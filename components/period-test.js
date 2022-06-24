import { Glicko2 } from "glicko2";
import { createRegions, duplicateRegions } from "../components/create";
import { regionMatches } from "../components/matches";
import { team } from "../components/teams";
import { match } from "../components/match";
import {
  orderTeamsByGlickoRating,
  orderTeamsByRealRating,
  orderTeamsByPeriodlessRating,
} from "../components/order-teams";
import { compareOrderings, compareRatings } from "../components/comparisons";

function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function periodTest(
  numOfTeamsPerRegion,
  lowestScore,
  highestScore,
  stdDev,
  ratingPeriods,
  numMatchPerTeam
) {
  var settings = {
    // tau : "Reasonable choices are between 0.3 and 1.2, though the system should
    //      be tested to decide which value results in greatest predictive accuracy."
    tau: 0.5,
    // rating : default rating
    rating: 1500,
    //rd : Default rating deviation
    //     small number = good confidence on the rating accuracy
    rd: 200,
    //vol : Default volatility (expected fluctation on the player rating)
    vol: 0.06,
  };

  const regionId = 0;
  var constantDeviationArray = [];
  var periodDeviationArray = [];

  const constantUpdateRanking = new Glicko2(settings);
  const periodUpdateRanking = new Glicko2(settings);
  var constantRegion = [];
  var periodRegion = [];
  for (let i = 0; i < numOfTeamsPerRegion; i++) {
    constantRegion.push(
      new team(
        i,
        `team ${i} | ${regionId}`,
        regionId,
        generateRandom(lowestScore, highestScore),
        stdDev,
        constantUpdateRanking.makePlayer()
      )
    );
  }
  //   console.log("First Team", constantRegion);
  for (let i = 0; i < numOfTeamsPerRegion; i++) {
    periodRegion.push(
      new team(
        i,
        `team ${i} | ${regionId}`,
        regionId,
        constantRegion[i].realRating,
        stdDev,
        periodUpdateRanking.makePlayer()
      )
    );
  }
  //   var constantMatches = [];
  var periodMatches = [];

  //   for (let i = 0; i < numOfTeamsPerRegion; i++) {}
  //   console.log("First Team", constantRegion);
  for (let i = 0; i < ratingPeriods; i++) {
    for (let j = 0; j < constantRegion.length * (numMatchPerTeam / 2); j++) {
      var firstTeam = constantRegion[getRandomInt(constantRegion.length)];
      var secondTeam = constantRegion[getRandomInt(constantRegion.length)];
      while (firstTeam == secondTeam) {
        secondTeam = constantRegion[getRandomInt(constantRegion.length)];
      }
      var matches = [];
      matches.push(match(firstTeam, secondTeam));
      constantUpdateRanking.updateRatings(matches);
    }
    regionMatches(periodRegion, periodMatches, numMatchPerTeam);
    // constantUpdateRanking.updateRatings(periodMatches);
    periodUpdateRanking.updateRatings(periodMatches);
    periodMatches = [];
    var constantRegions = [];
    var periodRegions = [];
    constantRegions.push(constantRegion);
    periodRegions.push(periodRegion);
    const originalTeamOrdering = orderTeamsByRealRating(constantRegions);
    const constantOrdering = orderTeamsByGlickoRating(constantRegions);
    const periodOrdering = orderTeamsByGlickoRating(periodRegions);
    console.log(originalTeamOrdering);
    console.log(constantOrdering);
    console.log(periodOrdering);
    console.log(
      "The number of positions correct for constant: " +
        compareOrderings(originalTeamOrdering, constantOrdering)
    );
    console.log(
      "The total points off for the ratings for constant: " +
        compareRatings(originalTeamOrdering, constantOrdering),
      "\n"
    );
    console.log(
      "The number of positions correct for period rating: " +
        compareOrderings(originalTeamOrdering, periodOrdering)
    );
    console.log(
      "The total points off for the period ratings: " +
        compareRatings(originalTeamOrdering, periodOrdering)
    );
    constantDeviationArray.push(
      compareRatings(originalTeamOrdering, constantOrdering)
    );
    periodDeviationArray.push(
      compareRatings(originalTeamOrdering, periodOrdering)
    );
  }
  //   console.log(orderTeamsByGlickoRating(constantRegion));
  //   console.log("First Team", constantRegion);
  //   console.log("First Team", periodRegion);
  return [constantDeviationArray, periodDeviationArray];
}
