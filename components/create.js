import { team } from "../components/teams";

function generateRandom(min = 0, max = 100) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
}

export function createRegions(
  numOfRegions,
  numOfTeamsPerRegion,
  lowestScore,
  highestScore,
  stdDev,
  ranking
  // periodlessRanking
) {
  var regions = [];
  for (let i = 0; i < numOfRegions; i++) {
    regions.push(
      createRegion(
        i,
        numOfTeamsPerRegion,
        lowestScore,
        highestScore,
        stdDev,
        ranking
        // periodlessRanking
      )
    );
  }
  return regions;
}

export function createRegion(
  regionId,
  numOfTeamsPerRegion,
  lowestScore,
  highestScore,
  stdDev,
  ranking
  // periodlessRanking
) {
  var region = [];
  for (let i = 0; i < numOfTeamsPerRegion; i++) {
    region.push(
      new team(
        i,
        `team ${i} | ${regionId}`,
        regionId,
        generateRandom(lowestScore, highestScore),
        stdDev,
        ranking.makePlayer()
        // periodlessRanking.makePlayer()
      )
    );
  }
  return region;
}

// export function createRegions(
//   regionId,
//   numOfTeamsPerRegion,
//   lowestScore,
//   highestScore,
//   stdDev,
//   ranking
// ) {
//   var region = [];
//   for (let i = 0; i < numOfTeamsPerRegion; i++) {
//     region.push(
//       new team(
//         i,
//         `team ${i} | ${regionId}`,
//         regionId,
//         generateRandom(lowestScore, highestScore),
//         stdDev,
//         ranking.makePlayer()
//       )
//     );
//   }
//   return region;
// }

export function duplicateRegions(
  numOfRegions,
  numOfTeamsPerRegion,
  stdDev,
  ranking,
  regions
) {
  var regions = [];
  for (let i = 0; i < numOfRegions; i++) {
    regions.push(
      createRegion(i, numOfTeamsPerRegion, stdDev, ranking, regions[1])
    );
  }
  return regions;
}

export function duplicateRegion(
  regionId,
  numOfTeamsPerRegion,
  stdDev,
  ranking,
  region
) {
  var region = [];
  for (let i = 0; i < numOfTeamsPerRegion; i++) {
    region.push(
      new team(
        i,
        `team ${i} | ${regionId}`,
        regionId,
        region[i].realRating,
        stdDev,
        ranking.makePlayer(),
        periodlessRanking.makePlayer()
      )
    );
  }
  return region;
}
