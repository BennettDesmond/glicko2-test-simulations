import { match } from "../components/match";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function regionMatches(
  region,
  periodMatches,
  numMatchPerTeam
  // constantUpdate
) {
  numMatchPerTeam = numMatchPerTeam / 2;
  for (let i = 0; i < region.length * numMatchPerTeam; i++) {
    var firstTeam = region[getRandomInt(region.length)];
    var secondTeam = region[getRandomInt(region.length)];
    while (firstTeam == secondTeam) {
      secondTeam = region[getRandomInt(region.length)];
    }
    // var matchResults = [];
    // matchResults = match(firstTeam, secondTeam);
    // const matchArray = [];
    // matchArray.push(matchResults[1]);
    // if (constantUpdate) {
    //   constantUpdate.updateRatings(matchArray);
    // }
    periodMatches.push(match(firstTeam, secondTeam));
  }
}
