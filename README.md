# Glicko 2 Test Simulations

[Curlo](https://github.com/curling-hub/curling-hub) uses the [Glicko 2](http://www.glicko.net/glicko/glicko2.pdf) rating system. As part of the development of this project, I needed to research how effective the Glicko rating system would be for curlers. This research was conducted under the guidance of Dr. Bruce Irvin.

## Description

This project has two main simulations that seek to answer two questions related to the Glicko rating system.

### Period Analysis
The first question relates to Glicko's rating period. The Glicko rating system relies on the concept of rating periods. The rating period is defined by how many matches are played by each team on average. The Glicko system only calculates ratings at the end of a rating period. Glicko recommends that roughly 10 games should be played by each team during every rating period. This means that during rating periods, teams are not getting updated scores. This can be an issue, so I created a simulation to show how the scores are affected by recaulculating ratings after each match is added (without a rating period). You can run the simulation yourself, but the results clearly show us that the Glicko system relies heavily on the idea of a rating period in order to properly function.

### Region Analysis
The second question related to the accuracy of the Glicko scores. Our use case for the Glicko rating system involved pockets of teams playing eachother. These pockets or clusters of teams in their particular regions do not necessarily play eachother. Because of this, I wanted to ensure that the rating system accurately rated teams even when they had never played eachother. We don't want a top team in a small city to have a higher score than a team in a big city if that team is not better than the big city team. Areas with better teams should not have lower scores just because of good competition. This simulation simulated a world where all the teams played eachother without clusters and a world where there are clusters of teams that only play eachother. After evaulating the results from this simulation, multiple regions or clusters of teams does not seem to have a major effect on the accuracy of the ratings.

## Getting Started

### Dependencies

* [Next JS](https://nextjs.org)
* [Chakra UI](https://chakra-ui.com)
* [Glicko 2](https://www.npmjs.com/package/glicko2)
* [Chart JS](https://www.npmjs.com/package/react-chartjs-2)

### Cloning

* Clone the repository
```
git clone https://github.com/BennettDesmond/glicko2-test-simulations.git
```

### Executing program

* Run Package Installer
```
npm install
```
* Start up the app
```
npm run dev
```

## Help

When the simulation page loads, make sure to click calculate in order to get the simulations started.

## Authors

Bennett Desmond
[LinkedIn](https://www.linkedin.com/in/bennettdesmond)

## Version History

* 0.1
    * Initial Release

## License

MIT License with copyright held by Bennett Desmond

## Acknowledgments

Dr. Bruce Irvin for research guidance
