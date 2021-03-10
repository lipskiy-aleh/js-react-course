# Webpack

Current task must be implemented based on [weather api hw](../weatherApi.md)

## Requirements:
* Init `package.json` in folder with weather api
* Add webpack to this project
* Add `build` and `start` scripts to package.json
* All html must be generated from js
* Project should contains 2 modules:
  * `search` module - which will be responsible for inputs and fetch data from weather api. Must export at least **renderSearch** function (This function should render inputs and add listener to `submit` btn). 
  * `weather` module - generate part of html with weather details. Must export at least renderWeather function.

## [Example of structure](./example)