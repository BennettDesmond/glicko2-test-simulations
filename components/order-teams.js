export function orderTeamsByGlickoRating(regions) {
  var ratings = [];
  for (let i = 0; i < regions.length; i++) {
    for (let j = 0; j < regions[i].length; j++) {
      ratings.push([regions[i][j].name, regions[i][j].glickoObj.getRating()]);
    }
  }
  ratings.sort(function (a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    return 0;
  });

  return ratings;
}

export function orderTeamsByRealRating(regions) {
  var ratings = [];
  for (let i = 0; i < regions.length; i++) {
    for (let j = 0; j < regions[i].length; j++) {
      ratings.push([regions[i][j].name, regions[i][j].realRating]);
    }
  }
  ratings.sort(function (a, b) {
    if (a[1] > b[1]) return -1;
    if (a[1] < b[1]) return 1;
    return 0;
  });

  return ratings;
}

// export function orderTeamsByPeriodlessRating(regions) {
//   var ratings = [];
//   for (let i = 0; i < regions.length; i++) {
//     for (let j = 0; j < regions[i].length; j++) {
//       ratings.push([
//         regions[i][j].name,
//         regions[i][j].periodlessRanking.getRating(),
//       ]);
//     }
//   }
//   ratings.sort(function (a, b) {
//     if (a[1] > b[1]) return -1;
//     if (a[1] < b[1]) return 1;
//     return 0;
//   });

//   return ratings;
// }
