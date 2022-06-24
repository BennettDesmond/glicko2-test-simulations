import { team } from "./teams";

export function match(team1, team2) {
  const teamOnePerformance = getNormallyDistributedRandomNumber(
    team1.realRating,
    team1.realStdDev
  );
  const teamTwoPerformance = getNormallyDistributedRandomNumber(
    team2.realRating,
    team2.realStdDev
  );
  if (teamOnePerformance > teamTwoPerformance) {
    return [team1.glickoObj, team2.glickoObj, 1];
    // [team1.periodlessRanking, team2.periodlessRanking, 1]
  } else if (teamOnePerformance == teamTwoPerformance) {
    return [team1.glickoObj, team2.glickoObj, 0.5];
    // [team1.periodlessRanking, team2.periodlessRanking, 0.5]
  } else {
    return [team1.glickoObj, team2.glickoObj, 0];
    // [team1.periodlessRanking, team2.periodlessRanking, 0]
  }
}

function boxMullerTransform() {
  const u1 = Math.random();
  const u2 = Math.random();

  const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
  const z1 = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);

  return { z0, z1 };
}

function getNormallyDistributedRandomNumber(mean, stddev) {
  const { z0, _ } = boxMullerTransform();

  return z0 * stddev + mean;
}
