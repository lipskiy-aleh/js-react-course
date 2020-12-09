# Webpack

Current task must be implemented based on [weather api hw](./weatherApi.md)

## Requirements:
* Init `package.json` in folder with weather api
* Add webpack to this project
* All html must be generated from js
* Project should contains 2 modules:
  * `search` module - which will be responsible for inputs and fetch data from weather api. Must export at least **renderSearch** function (This function should render inputs and add listener to `submit` btn). 
  * `weather` module - generate part of html with weather details. Must export at least renderWeather function.

## Additional requirements (*):
* Add [eslint](https://eslint.org/) to project:
```
npm install eslint --save-dev
// next step
npx eslint --init
-> Check syntax and find problems and enforce code style
-> Js modules
-> None of these
-> No
-> Browser
-> Use a popular style guide
-> Airbnb
-> JSON
-> yes
```
More details about setup you can find [here](https://eslint.org/docs/user-guide/getting-started)
Airbnb code style details [here](https://github.com/airbnb/javascript)

* Add [husky](https://www.npmjs.com/package/husky) package and setup `pre-commit` hook with running eslint