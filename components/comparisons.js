export function findindexOfTeam(teams, team) {
  for (let i = 0; i < teams.length; i++) {
    // console.log("Teams thing", teams[i][0], " ", team);
    if (teams[i][0] === team) {
      // console.log("I = ", i);
      return i;
    }
  }
  return 0;
}

export function compareOrderings(originalOrdering, newOrdering) {
  var numOfTeamsInCorrectPosition = 0;
  for (let i = 0; i < originalOrdering.length; i++) {
    // console.log(
    //   originalOrdering[i][0] +
    //     " " +
    //     i +
    //     "   " +
    //     Math.abs(i - findindexOfTeam(newOrdering, originalOrdering[i][0]))
    // );
    const positionDifference = Math.abs(
      i - findindexOfTeam(newOrdering, originalOrdering[i][0])
    );
    if (positionDifference === 0) {
      // console.log("Adding one");
      numOfTeamsInCorrectPosition += 1;
    } else {
      // console.log("Subtracting", positionDifference);
      numOfTeamsInCorrectPosition -= positionDifference;
    }
    // if (originalOrdering[i][0] === newOrdering[i][0]) {
    //   numOfTeamsInCorrectPosition++;
    // }
  }
  return numOfTeamsInCorrectPosition;
}

export function compareRatings(originalRatings, newRatings) {
  var differenceBetweenRatings = 0;
  for (let i = 0; i < originalRatings.length; i++) {
    if (originalRatings[i][1] < newRatings[i][1]) {
      differenceBetweenRatings += newRatings[i][1] - originalRatings[i][1];
    } else {
      differenceBetweenRatings += originalRatings[i][1] - newRatings[i][1];
    }
  }
  return differenceBetweenRatings;
}
