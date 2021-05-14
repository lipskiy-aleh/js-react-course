
function Machine(config) {
  this.active = false
  this.config = config
}

Machine.prototype.enable = function() {
  this.active = true
}

Machine.prototype.disable = function() {
  this.active = false
}


function CoffeeMachine(config) {
  Machine.call(this, config)
}


// function createObject(parentPrototype) {
//   function F() {}
//   F.prototype = parentPrototype
//   return new F()
// }
// CoffeeMachine.prototype = createObject(Machine.prototype)
CoffeeMachine.prototype = Object.create(Machine.prototype)
CoffeeMachine.prototype.constructor = CoffeeMachine

CoffeeMachine.prototype.makeCoffee = function(type) {
  if(!this.active) {
    throw new Error('Pls activate machine')
  }

  console.log(type)
}

CoffeeMachine.prototype.enable = function() {
  Machine.prototype.enable.call(this)
  console.log('Enable coffee machine')
}

const coffee = new CoffeeMachine({
  name: '1',
  type: 'coffeeMachine'
})

// class Machine{
//   constructor() {
        // super()
//   }
// }


// const arr = [] // new Array()
// arr.find()

// arr.__proto__  === Array.prototype
// Array.prototype.__proto__  === Object.prototype
// Object.prototype.__proto__ === null


// // 1 - __proto__ vs prototype
// // 2 - 
// __proto__ === null
// const obj = Object.create(null)