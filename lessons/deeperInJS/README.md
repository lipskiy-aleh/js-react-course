# Deeper in JS.

<!-- ## [Presentation](https://slides.com/aleh_lipski/deck-199132) -->

## [Lesson videos](https://drive.google.com/file/d/1QFlZmihsStgpdz2lHAoykiwbSnisfYeM/view?usp=sharing)

## Useful links:
* Throttling and debouncing
   * [The difference between throttling and debouncing (EN)](https://css-tricks.com/the-difference-between-throttling-and-debouncing/)
   * [What is it throttling and debouncing ? (RU)](https://medium.com/nuances-of-programming/%D1%87%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-throttling-%D0%B8-debouncing-4f0a839769ef)

<!-- TODO: remove only for group 2 -->
## To refresh knowledge base and learn something new
* [Overview of basic features of ES6 (RU)](https://habr.com/ru/post/313526/)
* [Destructuring in ES6. Full tutorial (RU)](https://medium.com/@stasonmars/%D0%B4%D0%B5%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2-es6-%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-b865bb71f376)
* [Spread and rest operators (RU)](https://medium.com/@stasonmars/%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80-spread-%D0%B8-rest-%D0%BF%D0%B0%D1%80%D0%B0%D0%BC%D0%B5%D1%82%D1%80%D1%8B-%D0%B2-javascript-22eb33cb0825)
* 7 Tricks with Resting and Spreading JavaScript Objects
  * [EN](https://blog.bitsrc.io/6-tricks-with-resting-and-spreading-javascript-objects-68d585bdc83)
  * [RU](https://habr.com/ru/post/489550/)
<!--  -->

## Implementation `map`, `filter`, `reduce`

* map
```javascript
const newArr = arr.map( (item, index, arr) => {} )
Array.prototype.customMap = function(callback) {
  const arr = this
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const newEL = callback(el, i, arr)
    newArr.push(newEL)
  }

  return newArr
}
```
* filter
```javascript
const newArr = arr.filter( (el) => true/false )
Array.prototype.customFilter = function(callback) {
  const arr = this
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if(callback(el, i, arr)) {
      newArr.push(el)
    }
  }

  return newArr
}
```
* reduce
```javascript
const result = arr.reduce( (acc, el, index, arr ) => { newAcc } , startValue)
Array.prototype.customReduce = function(callback, init) {
  const arr = this
  let res = init

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    res = callback(res, el, i, arr)
  }

  return res
}
```