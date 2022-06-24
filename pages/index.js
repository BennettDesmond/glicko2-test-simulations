import Head from "next/head";
import React, { useState } from "react";
import { Glicko2 } from "glicko2";
import { team } from "../components/teams";
import { match } from "../components/match";
import {
  FormControl,
  FormLabel,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Box,
  HStack,
  FormErrorMessage,
  FormHelperText,
  Center,
} from "@chakra-ui/react";
// import { match } from "../components/match";
import {
  orderTeamsByGlickoRating,
  orderTeamsByRealRating,
  orderTeamsByPeriodlessRating,
} from "../components/order-teams";
import { regionMatches } from "../components/matches";
import { compareOrderings, compareRatings } from "../components/comparisons";
import { createRegions } from "../components/create";
import { periodTest } from "../components/period-test";
import { regionTest } from "../components/region-test";
import { PeriodTestGraph } from "../components/period-test-graph";
import { RegionTestGraph } from "../components/region-test-graph";
import { RegionTestTab } from "../components/region-test-tab";
import { PeriodTestTab } from "../components/period-test-tab";

export default function Home() {
  var glicko2 = require("glicko2");
  var glicko3 = require("glicko2");

  const [periodTab, setPeriodTab] = useState(true);
  const [regionTab, setRegionTab] = useState(false);
  const [constantDeviationArray, setConstantDeviationArray] = useState([]);
  const [periodDeviationArray, setPeriodDeviationArray] = useState([]);
  const [ratingPeriods, setRatingPeriods] = useState(40);
  const [numOfTeamsPerRegion, setNumOfTeamsPerRegion] = useState(100);
  const [numOfMatchesPerTeam, setNumOfMatchesPerTeam] = useState(10);
  const [numOfRegions, setNumOfRegions] = useState(1);

  const [multipleDeviationArray, setMultipleDeviationArray] = useState([]);
  const [singleDeviationArray, setSingleDeviationArray] = useState([]);

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
  var ranking = new glicko2.Glicko2(settings);
  var periodlessRanking = new glicko3.Glicko2(settings);

  //********** */

  const rankingss = new Glicko2(settings);

  const Player1s = rankingss.makePlayer();
  const Player2s = rankingss.makePlayer();
  const Player3s = rankingss.makePlayer();
  const Player4s = rankingss.makePlayer();
  const Player5s = rankingss.makePlayer();
  const Player6s = rankingss.makePlayer();
  const Player7s = rankingss.makePlayer();
  const Player8s = rankingss.makePlayer();
  const Player9s = rankingss.makePlayer();

  var matchesss = [];
  matchesss.push([Player1s, Player2s, 1]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player1s, Player3s, 0.5]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player4s, Player5s, 1]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player4s, Player6s, 0.5]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player7s, Player8s, 1]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player7s, Player9s, 0.5]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player1s, Player2s, 1]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player1s, Player3s, 0.5]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player4s, Player5s, 1]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player4s, Player6s, 0.5]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player7s, Player8s, 1]);
  rankingss.updateRatings(matchesss);
  matchesss = [];
  matchesss.push([Player7s, Player9s, 0.5]);
  rankingss.updateRatings(matchesss);
  console.log("************************************************");
  console.log(Player1s.getRating(), "\n");
  console.log(Player2s.getRating(), "\n");
  console.log(Player3s.getRating(), "\n");
  console.log(Player4s.getRating(), "\n");
  console.log(Player5s.getRating(), "\n");
  console.log(Player6s.getRating(), "\n");
  console.log(Player7s.getRating(), "\n");
  console.log(Player8s.getRating(), "\n");
  console.log(Player9s.getRating(), "\n");
  console.log("************************************************");

  const rankings = new Glicko2(settings);

  const Player1 = rankings.makePlayer();
  const Player2 = rankings.makePlayer();
  const Player3 = rankings.makePlayer();
  const Player4 = rankings.makePlayer();
  const Player5 = rankings.makePlayer();
  const Player6 = rankings.makePlayer();
  const Player7 = rankings.makePlayer();
  const Player8 = rankings.makePlayer();
  const Player9 = rankings.makePlayer();

  const matchess = [];
  matchess.push([Player1, Player2, 1]);
  matchess.push([Player1, Player3, 0.5]);
  matchess.push([Player4, Player5, 1]);
  matchess.push([Player4, Player6, 0.5]);
  matchess.push([Player7, Player8, 1]);
  matchess.push([Player7, Player9, 0.5]);
  matchess.push([Player1, Player2, 1]);
  matchess.push([Player1, Player3, 0.5]);
  matchess.push([Player4, Player5, 1]);
  matchess.push([Player4, Player6, 0.5]);
  matchess.push([Player7, Player8, 1]);
  matchess.push([Player7, Player9, 0.5]);
  rankings.updateRatings(matchess);

  console.log("************************************************");
  console.log(Player1.getRating(), "\n");
  console.log(Player2.getRating(), "\n");
  console.log(Player3.getRating(), "\n");
  console.log(Player4.getRating(), "\n");
  console.log(Player5.getRating(), "\n");
  console.log(Player6.getRating(), "\n");
  console.log(Player7.getRating(), "\n");
  console.log(Player8.getRating(), "\n");
  console.log(Player9.getRating(), "\n");
  console.log("************************************************");

  // **********8 */

  // const ratingPeriods = 40;
  // const numOfRegions = 1;
  // const numOfTeamsPerRegion = 100;
  const lowestScore = 0;
  const highestScore = 3000;
  // var numOfMatchesPerTeam = 10;
  const stdDev = 30;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Create players
  // eval("account" + 1 + "='ranking.makePlayer()'");
  // var eval(`team${l}O`) = ranking.makePlayer();
  // var team1O = ranking.makePlayer();
  // var team2O = ranking.makePlayer();
  // var team3O = ranking.makePlayer();
  // var team4O = ranking.makePlayer();
  // var team5O = ranking.makePlayer();
  // var team6O = ranking.makePlayer();
  // var team7O = ranking.makePlayer();
  // var team8O = ranking.makePlayer();
  // var team9O = ranking.makePlayer();
  // var team10O = ranking.makePlayer();

  // var team1W = ranking.makePlayer();
  // var team2W = ranking.makePlayer();
  // var team3W = ranking.makePlayer();
  // var team4W = ranking.makePlayer();
  // var team5W = ranking.makePlayer();
  // var team6W = ranking.makePlayer();
  // var team7W = ranking.makePlayer();
  // var team8W = ranking.makePlayer();
  // var team9W = ranking.makePlayer();
  // var team10W = ranking.makePlayer();

  // var team1N = ranking.makePlayer();
  // var team2N = ranking.makePlayer();
  // var team3N = ranking.makePlayer();
  // var team4N = ranking.makePlayer();
  // var team5N = ranking.makePlayer();
  // var team6N = ranking.makePlayer();
  // var team7N = ranking.makePlayer();
  // var team8N = ranking.makePlayer();
  // var team9N = ranking.makePlayer();
  // var team10N = ranking.makePlayer();
  // var John = ranking.makePlayer(1550, 100, 0.06);
  // var Mary = ranking.makePlayer(1700, 300, 0.06);

  var matches = [];
  // matches.push([Ryan, Bob, 1]); //Ryan won over Bob
  // matches.push([Ryan, John, 0]); //Ryan lost against John
  // matches.push([Ryan, Mary, 0.5]); //A draw between Ryan and Mary
  // ranking.updateRatings(matches);

  // console.log("Ryan new rating: " + Ryan.getRating());
  // console.log("Ryan new rating deviation: " + Ryan.getRd());
  // console.log("Ryan new volatility: " + Ryan.getVol());
  // var players = ranking.getPlayers();

  // console.log("Players");
  // console.log(players);

  // const numOfRegions = 3;
  // const numOfPlayersPerRegion = 10;
  // console.log(numOfRegions);

  // for (let region = 0; region < numOfRegions; region++) {
  //   for (let player = 0; player < numOfPlayersPerRegion; player++) {
  //     let newPlayer = new team(player, "Test", region, 25, 1500);
  //     console.log(newPlayer);
  //   }
  // }

  // const region1 = [];
  // region1.push(new team(1, "team1O", "Oregon", 1500, 30, team1O));
  // region1.push(new team(2, "team2O", "Oregon", 1560, 30, team2O));
  // region1.push(new team(3, "team3O", "Oregon", 1319, 30, team3O));
  // region1.push(new team(4, "team4O", "Oregon", 1356, 30, team4O));
  // region1.push(new team(5, "team5O", "Oregon", 1702, 30, team5O));
  // region1.push(new team(6, "team6O", "Oregon", 1663, 30, team6O));
  // region1.push(new team(7, "team7O", "Oregon", 1442, 30, team7O));
  // region1.push(new team(8, "team8O", "Oregon", 1160, 30, team8O));
  // region1.push(new team(9, "team9O", "Oregon", 1502, 30, team9O));
  // region1.push(new team(10, "team10O", "Oregon", 1820, 30, team10O));

  // const region2 = [];
  // region2.push(new team(1, "team1W", "Wisconsin", 1314, 30, team1W));
  // region2.push(new team(2, "team2W", "Wisconsin", 1488, 30, team2W));
  // region2.push(new team(3, "team3W", "Wisconsin", 1310, 30, team3W));
  // region2.push(new team(4, "team4W", "Wisconsin", 1630, 30, team4W));
  // region2.push(new team(5, "team5W", "Wisconsin", 1462, 30, team5W));
  // region2.push(new team(6, "team6W", "Wisconsin", 1660, 30, team6W));
  // region2.push(new team(7, "team7W", "Wisconsin", 1708, 30, team7W));
  // region2.push(new team(8, "team8W", "Wisconsin", 1656, 30, team8W));
  // region2.push(new team(9, "team9W", "Wisconsin", 1329, 30, team9W));
  // region2.push(new team(10, "team10W", "Wisconsin", 1410, 30, team10W));

  // const region3 = [];
  // region3.push(new team(1, "team1N", "New York", 1646, 30, team1N));
  // region3.push(new team(2, "team2N", "New York", 1323, 30, team2N));
  // region3.push(new team(3, "team3N", "New York", 1486, 30, team3N));
  // region3.push(new team(4, "team4N", "New York", 1667, 30, team4N));
  // region3.push(new team(5, "team5N", "New York", 1436, 30, team5N));
  // region3.push(new team(6, "team6N", "New York", 1397, 30, team6N));
  // region3.push(new team(7, "team7N", "New York", 1531, 30, team7N));
  // region3.push(new team(8, "team8N", "New York", 1568, 30, team8N));
  // region3.push(new team(9, "team9N", "New York", 1281, 30, team9N));
  // region3.push(new team(10, "team10N", "New York", 1542, 30, team10N));

  const regions = createRegions(
    numOfRegions,
    numOfTeamsPerRegion,
    lowestScore,
    highestScore,
    stdDev,
    ranking,
    periodlessRanking
  );
  // regions.push(region1);
  // regions.push(region2);
  // regions.push(region3);

  for (let i = 0; i < ratingPeriods; i++) {
    for (let j = 0; j < regions.length; j++) {
      // regionMatches(
      //   regions[j],
      //   matches,
      //   numOfMatchedPerTeam,
      //   periodlessRanking
      // );
      // for (let k = 0; k < regions[j].length; k++) {
      //   // console.log(
      //   //   "team1 new rating: " +
      //   //     regions[j][k].glickoObj.getRating() +
      //   //     " new rating deviation: " +
      //   //     regions[j][k].glickoObj.getRd() +
      //   //     " new volatility: " +
      //   //     regions[j][k].glickoObj.getVol()
      //   // );
      // }
      // numOfMatchesPerTeam = numOfMatchesPerTeam / 2;
      for (let i = 0; i < regions[j].length * numOfMatchesPerTeam; i++) {
        var firstTeam = regions[j][getRandomInt(regions[j].length)];
        var secondTeam = regions[j][getRandomInt(regions[j].length)];
        while (firstTeam == secondTeam) {
          secondTeam = regions[j][getRandomInt(regions[j].length)];
        }
        var matchResults = [];
        matchResults = match(firstTeam, secondTeam);
        const matchArray = [];
        matchArray.push(matchResults[1]);
        // if (periodlessRanking) {
        //   periodlessRanking.updateRatings(matches);
        // }
        matches.push(matchResults[0]);
      }
      console.log("\n");
    }

    // matches.push([team1, team5, 1]);
    // matches.push([team3, team5, 0]);
    // matches.push([team8, team2, 0.5]);
    // periodlessRanking.updateRatings(matches);
    // ranking.updateRatings(matches);
    matches = [];
    console.log(
      "*******************************",
      i,
      "***********************************"
    );
    // const originalTeamOrdering = orderTeamsByRealRating(regions);
    // const newTeamOrdering = orderTeamsByGlickoRating(regions);
    // const periodlessOrdering = orderTeamsByPeriodlessRating(regions);
    // console.log(originalTeamOrdering);
    // console.log(newTeamOrdering);
    // console.log(periodlessOrdering);
    // console.log(
    //   "The number of positions correct: " +
    //     compareOrderings(originalTeamOrdering, newTeamOrdering)
    // );
    // console.log(
    //   "The total points off for the ratings: " +
    //     compareRatings(originalTeamOrdering, newTeamOrdering),
    //   "\n"
    // );
    // console.log(
    //   "The number of positions correct for periodless rating: " +
    //     compareOrderings(originalTeamOrdering, periodlessOrdering)
    // );
    // console.log(
    //   "The total points off for the periodless ratings: " +
    //     compareRatings(originalTeamOrdering, periodlessOrdering)
    // );
  }

  // var matches = [];
  // console.log(matches);
  // console.log(
  //   "team1O rating: " +
  //     team1O.getRating() +
  //     " team2O rating: " +
  //     team2O.getRating() +
  //     " team3O rating: " +
  //     team3O.getRating()
  // );
  // matches.push([team1O, team2O, 1]); //Ryan won over Bob
  // // matches.push([team1O, team3O, 0]); //Ryan lost against John
  // // matches.push([team1O, team4O, 0.5]); //A draw between Ryan and Mary
  // ranking.updateRatings(matches);
  // console.log(
  //   "team1O rating: " +
  //     team1O.getRating() +
  //     " team2O rating: " +
  //     team2O.getRating() +
  //     " team3O rating: " +
  //     team3O.getRating()
  // );

  // console.log(createRegions(3, 10, 1000, 2000, 30, ranking));

  console.log(
    "*********************************************************************************************((((((((((((((((((((((("
  );

  // const recalculatePeriodTest = () => {
  //   var periodTestResults = periodTest(
  //     numOfTeamsPerRegion,
  //     lowestScore,
  //     highestScore,
  //     stdDev,
  //     ratingPeriods,
  //     numOfMatchesPerTeam
  //   );
  //   setConstantDeviationArray(periodTestResults[0]);
  //   setPeriodDeviationArray(periodTestResults[1]);
  // };

  // const recalculateRegionTest = () => {
  //   var regionTestResults = regionTest(
  //     numOfRegions,
  //     numOfTeamsPerRegion,
  //     lowestScore,
  //     highestScore,
  //     stdDev,
  //     ratingPeriods,
  //     numOfMatchesPerTeam
  //   );
  //   setMultipleDeviationArray(regionTestResults[0]);
  //   setSingleDeviationArray(regionTestResults[1]);
  // };

  const periodTabSelected = () => {
    setPeriodTab(true);
    setRegionTab(false);
    setNumOfRegions(1);
    setNumOfTeamsPerRegion(30);
    setRatingPeriods(40);
    setNumOfMatchesPerTeam(10);
  };

  const regionTabSelected = () => {
    setPeriodTab(false);
    setRegionTab(true);
    setNumOfRegions(25);
    setNumOfTeamsPerRegion(30);
    setRatingPeriods(40);
    setNumOfMatchesPerTeam(10);
  };

  // var periodTestResults = periodTest(
  //   numOfTeamsPerRegion,
  //   lowestScore,
  //   highestScore,
  //   stdDev,
  //   ratingPeriods,
  //   numOfMatchesPerTeam
  // );

  // recalculatePeriodTest;

  // setConstantDeviationArray(periodTestResults[0]);
  // var constantDeviationArray = periodTestResults[0];
  // setPeriodDeviationArray(periodTestResults[1]);
  // var periodDeviationArray = periodTestResults[1];

  return (
    <>
      <HStack mx="40%" mt="20px">
        <Button
          colorScheme="blue"
          variant={periodTab ? "solid" : "outline"}
          onClick={periodTabSelected}
        >
          Period Analysis
        </Button>
        <Button
          colorScheme="blue"
          variant={regionTab ? "solid" : "outline"}
          onClick={regionTabSelected}
        >
          Region Analysis
        </Button>
      </HStack>
      {periodTab && (
        <PeriodTestTab />
        // <Box>
        //   <Box mx="60px" my="20px">
        //     <PeriodTestGraph
        //       ratingPeriods={ratingPeriods}
        //       constantDeviationArray={constantDeviationArray}
        //       periodDeviationArray={periodDeviationArray}
        //     />
        //   </Box>
        //   <Box alignContent="center">
        //     {/* <Center> */}
        //     <Box>
        //       <HStack mx="30%">
        //         <FormLabel mt="10px" htmlFor="teams">
        //           Teams
        //         </FormLabel>
        //         <NumberInput
        //           min={2}
        //           defaultValue={numOfTeamsPerRegion}
        //           width="90px"
        //           onChange={(e) => {
        //             setNumOfTeamsPerRegion(e);
        //           }}
        //         >
        //           <NumberInputField id="teams" />
        //           <NumberInputStepper>
        //             <NumberIncrementStepper />
        //             <NumberDecrementStepper />
        //           </NumberInputStepper>
        //         </NumberInput>
        //         <FormLabel mt="10px" htmlFor="periods">
        //           Periods
        //         </FormLabel>
        //         <NumberInput
        //           min={1}
        //           defaultValue={ratingPeriods}
        //           width="90px"
        //           onChange={(e) => {
        //             setRatingPeriods(e);
        //           }}
        //         >
        //           <NumberInputField id="periods" />
        //           <NumberInputStepper>
        //             <NumberIncrementStepper />
        //             <NumberDecrementStepper />
        //           </NumberInputStepper>
        //         </NumberInput>
        //         <FormLabel mt="10px" htmlFor="matches">
        //           Matches
        //         </FormLabel>
        //         <NumberInput
        //           min={1}
        //           defaultValue={numOfMatchesPerTeam}
        //           width="90px"
        //           onChange={(e) => {
        //             setNumOfMatchesPerTeam(e);
        //           }}
        //         >
        //           <NumberInputField id="matches" />
        //           <NumberInputStepper>
        //             <NumberIncrementStepper />
        //             <NumberDecrementStepper />
        //           </NumberInputStepper>
        //         </NumberInput>
        //       </HStack>
        //     </Box>
        //     <Button
        //       borderRadius="full"
        //       colorScheme="green"
        //       boxShadow="md"
        //       onClick={recalculatePeriodTest}
        //       mx="46%"
        //       my="20px"
        //     >
        //       Calculate
        //     </Button>
        //     {/* </Center> */}
        //   </Box>
        // </Box>
      )}

      {regionTab && (
        <RegionTestTab />
        // <Box>
        //   <Box mx="60px" my="20px">
        //     <RegionTestGraph
        //       ratingPeriods={ratingPeriods}
        //       multipleDeviationArray={multipleDeviationArray}
        //       singleDeviationArray={singleDeviationArray}
        //     />
        //   </Box>
        //   <Box alignContent="center">
        //     {/* <Center> */}
        //     <Box>
        //       <HStack mx="28%">
        //         <FormLabel mt="10px" htmlFor="regions">
        //           Regions
        //         </FormLabel>
        //         <NumberInput
        //           min={1}
        //           defaultValue={numOfRegions}
        //           width="90px"
        //           onChange={(e) => {
        //             setNumOfRegions(e);
        //           }}
        //         >
        //           <NumberInputField id="regions" />
        //           <NumberInputStepper>
        //             <NumberIncrementStepper />
        //             <NumberDecrementStepper />
        //           </NumberInputStepper>
        //         </NumberInput>
        //         <FormLabel mt="10px" htmlFor="teams">
        //           Teams
        //         </FormLabel>
        //         <NumberInput
        //           min={2}
        //           defaultValue={numOfTeamsPerRegion}
        //           width="90px"
        //           onChange={(e) => {
        //             setNumOfTeamsPerRegion(e);
        //           }}
        //         >
        //           <NumberInputField id="teams" />
        //           <NumberInputStepper>
        //             <NumberIncrementStepper />
        //             <NumberDecrementStepper />
        //           </NumberInputStepper>
        //         </NumberInput>
        //         <FormLabel mt="10px" htmlFor="periods">
        //           Periods
        //         </FormLabel>
        //         <NumberInput
        //           min={1}
        //           defaultValue={ratingPeriods}
        //           width="90px"
        //           onChange={(e) => {
        //             setRatingPeriods(e);
        //           }}
        //         >
        //           <NumberInputField id="periods" />
        //           <NumberInputStepper>
        //             <NumberIncrementStepper />
        //             <NumberDecrementStepper />
        //           </NumberInputStepper>
        //         </NumberInput>
        //         <FormLabel mt="10px" htmlFor="matches">
        //           Matches
        //         </FormLabel>
        //         <NumberInput
        //           min={1}
        //           defaultValue={numOfMatchesPerTeam}
        //           width="90px"
        //           onChange={(e) => {
        //             setNumOfMatchesPerTeam(e);
        //           }}
        //         >
        //           <NumberInputField id="matches" />
        //           <NumberInputStepper>
        //             <NumberIncrementStepper />
        //             <NumberDecrementStepper />
        //           </NumberInputStepper>
        //         </NumberInput>
        //       </HStack>
        //     </Box>
        //     <Button
        //       borderRadius="full"
        //       colorScheme="green"
        //       boxShadow="md"
        //       onClick={recalculateRegionTest}
        //       mx="46%"
        //       my="20px"
        //     >
        //       Calculate
        //     </Button>
        //     {/* </Center> */}
        //   </Box>
        // </Box>
      )}
    </>
  );
}
