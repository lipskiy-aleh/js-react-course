// Object.create polyfill

function objectCreate(parentPrototype) {
  function F() {}
  F.prototype = parentPrototype
  return new F()
}