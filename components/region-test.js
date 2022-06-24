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

export function regionTest(
  numOfRegions,
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
  var multipleDeviationArray = [];
  var singleDeviationArray = [];

  const multipleUpdateRanking = new Glicko2(settings);
  const singleUpdateRanking = new Glicko2(settings);
  var multipleRegions = [];
  var singleRegion = [];
  for (let j = 0; j < numOfRegions; j++) {
    var region = [];
    for (let i = 0; i < numOfTeamsPerRegion; i++) {
      region.push(
        new team(
          i,
          `team ${i} | ${regionId}`,
          regionId,
          generateRandom(lowestScore, highestScore),
          stdDev,
          multipleUpdateRanking.makePlayer()
        )
      );
    }
    multipleRegions.push(region);
  }
  for (let j = 0; j < numOfRegions; j++) {
    for (let i = 0; i < numOfTeamsPerRegion; i++) {
      singleRegion.push(
        new team(
          i,
          `team ${i} | ${regionId}`,
          regionId,
          multipleRegions[j][i].realRating,
          stdDev,
          singleUpdateRanking.makePlayer()
        )
      );
    }
  }
  var singleMatches = [];
  var multipleMatches = [];

  //   for (let i = 0; i < numOfTeamsPerRegion; i++) {}
  //   console.log("First Team", constantRegion);
  for (let i = 0; i < ratingPeriods; i++) {
    for (let j = 0; j < numOfRegions; j++) {
      regionMatches(multipleRegions[j], multipleMatches, numMatchPerTeam);
    }
    regionMatches(singleRegion, singleMatches, numMatchPerTeam);
    multipleUpdateRanking.updateRatings(multipleMatches);
    singleUpdateRanking.updateRatings(singleMatches);
    multipleMatches = [];
    singleMatches = [];
    var singleRegions = [];
    singleRegions.push(singleRegion);
    const originalTeamOrdering = orderTeamsByRealRating(multipleRegions);
    const multipleOrdering = orderTeamsByGlickoRating(multipleRegions);
    const singleOrdering = orderTeamsByGlickoRating(singleRegions);
    console.log(originalTeamOrdering);
    console.log(multipleOrdering);
    console.log(singleOrdering);
    console.log(
      "The number of positions correct for multiple: " +
        compareOrderings(originalTeamOrdering, multipleOrdering)
    );
    console.log(
      "The total points off for the ratings for multiple: " +
        compareRatings(originalTeamOrdering, multipleOrdering),
      "\n"
    );
    console.log(
      "The number of positions correct for single rating: " +
        compareOrderings(originalTeamOrdering, singleOrdering)
    );
    console.log(
      "The total points off for the single ratings: " +
        compareRatings(originalTeamOrdering, singleOrdering)
    );
    multipleDeviationArray.push(
      compareRatings(originalTeamOrdering, multipleOrdering)
    );
    singleDeviationArray.push(
      compareRatings(originalTeamOrdering, singleOrdering)
    );
  }
  //   console.log(orderTeamsByGlickoRating(constantRegion));
  //   console.log("First Team", constantRegion);
  //   console.log("First Team", periodRegion);
  return [multipleDeviationArray, singleDeviationArray];
}
