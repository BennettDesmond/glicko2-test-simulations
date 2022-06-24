import React, { useState } from "react";
import { PeriodTestGraph } from "../components/period-test-graph";
import { periodTest } from "../components/period-test";
import {FormLabel,
    Button,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberDecrementStepper,
    NumberIncrementStepper,
    Box,
    HStack,
  } from "@chakra-ui/react";

export function PeriodTestTab() {

  const [ratingPeriods, setRatingPeriods] = useState(40);
  const [numOfTeamsPerRegion, setNumOfTeamsPerRegion] = useState(30);
  const [numOfMatchesPerTeam, setNumOfMatchesPerTeam] = useState(10);
  const [constantDeviationArray, setConstantDeviationArray] = useState([]);
  const [periodDeviationArray, setPeriodDeviationArray] = useState([]);
  const lowestScore = 0;
  const highestScore = 3000;
  const stdDev = 30;

  const recalculatePeriodTest = () => {
    var periodTestResults = periodTest(
      numOfTeamsPerRegion,
      lowestScore,
      highestScore,
      stdDev,
      ratingPeriods,
      numOfMatchesPerTeam
    );
    setConstantDeviationArray(periodTestResults[0]);
    setPeriodDeviationArray(periodTestResults[1]);
  };

    return (
      <Box>
      <Box mx="60px" my="20px">
        <PeriodTestGraph
          ratingPeriods={ratingPeriods}
          constantDeviationArray={constantDeviationArray}
          periodDeviationArray={periodDeviationArray}
        />
      </Box>
      <Box alignContent="center">
        {/* <Center> */}
        <Box>
          <HStack mx="30%">
            <FormLabel mt="10px" htmlFor="teams">
              Teams
            </FormLabel>
            <NumberInput
              min={2}
              defaultValue={numOfTeamsPerRegion}
              width="90px"
              onChange={(e) => {
                setNumOfTeamsPerRegion(e);
              }}
            >
              <NumberInputField id="teams" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel mt="10px" htmlFor="periods">
              Periods
            </FormLabel>
            <NumberInput
              min={1}
              defaultValue={ratingPeriods}
              width="90px"
              onChange={(e) => {
                setRatingPeriods(e);
              }}
            >
              <NumberInputField id="periods" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel mt="10px" htmlFor="matches">
              Matches
            </FormLabel>
            <NumberInput
              min={1}
              defaultValue={numOfMatchesPerTeam}
              width="90px"
              onChange={(e) => {
                setNumOfMatchesPerTeam(e);
              }}
            >
              <NumberInputField id="matches" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
        </Box>
        <Button
          borderRadius="full"
          colorScheme="green"
          boxShadow="md"
          onClick={recalculatePeriodTest}
          mx="46%"
          my="20px"
        >
          Calculate
        </Button>
        {/* </Center> */}
      </Box>
    </Box>
    )
}