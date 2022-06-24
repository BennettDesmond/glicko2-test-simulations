import React, { useState } from "react";
import { RegionTestGraph } from "../components/region-test-graph";
import { regionTest } from "../components/region-test";
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

export function RegionTestTab() {

  const [ratingPeriods, setRatingPeriods] = useState(40);
  const [numOfTeamsPerRegion, setNumOfTeamsPerRegion] = useState(30);
  const [numOfMatchesPerTeam, setNumOfMatchesPerTeam] = useState(10);
  const [numOfRegions, setNumOfRegions] = useState(1);
  const [multipleDeviationArray, setMultipleDeviationArray] = useState([]);
  const [singleDeviationArray, setSingleDeviationArray] = useState([]);
  const lowestScore = 0;
  const highestScore = 3000;
  const stdDev = 30;

    const recalculateRegionTest = () => {
        var regionTestResults = regionTest(
          numOfRegions,
          numOfTeamsPerRegion,
          lowestScore,
          highestScore,
          stdDev,
          ratingPeriods,
          numOfMatchesPerTeam
        );
        setMultipleDeviationArray(regionTestResults[0]);
        setSingleDeviationArray(regionTestResults[1]);
      };

    return (
        <Box>
          <Box mx="60px" my="20px">
            <RegionTestGraph
              ratingPeriods={ratingPeriods}
              multipleDeviationArray={multipleDeviationArray}
              singleDeviationArray={singleDeviationArray}
            />
          </Box>
          <Box alignContent="center">
            {/* <Center> */}
            <Box>
              <HStack mx="28%">
                <FormLabel mt="10px" htmlFor="regions">
                  Regions
                </FormLabel>
                <NumberInput
                  min={1}
                  defaultValue={numOfRegions}
                  width="90px"
                  onChange={(e) => {
                    setNumOfRegions(e);
                  }}
                >
                  <NumberInputField id="regions" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
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
              onClick={recalculateRegionTest}
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