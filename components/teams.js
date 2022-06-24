export class team {
  constructor(
    id,
    name,
    regionId,
    realRating,
    realStdDev,
    glickoObj
    // periodlessRanking
  ) {
    this.id = id;
    this.name = name;
    this.regionId = regionId;
    this.realRating = realRating;
    this.realStdDev = realStdDev;
    this.glickoObj = glickoObj;
    // this.periodlessRanking = periodlessRanking;
  }
}
