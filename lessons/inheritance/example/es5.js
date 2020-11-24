// ES5 class 
// __proto__ vs prototype
// __proto__ ссылка на prototype родителя

// Machine - function constructor 
function Machine(value) {
  this.value = value

  this.enableProperty = false
}

Machine.prototype.status = function() {
  console.log(this.enableProperty)
}

Machine.prototype.enable = function() {
  this.enableProperty = true
}

Machine.prototype.disable = function() {
  this.enableProperty = false
}


const machine = new Machine() 
//machine - instance class


function CoffeMachine(value) {
  Machine.call(this, value) // ES6 super()

  this.waterAmount = 0
}

// Object.create()
CoffeMachine.prototype = Object.create(Machine.prototype)
CoffeMachine.prototype.constructor = CoffeMachine

CoffeMachine.prototype.makeCoffe = function(type) {
  console.log(type)
}

CoffeMachine.prototype.setWaterAmount = function(amount) {
  this.waterAmount = amount
}

CoffeMachine.prototype.enable = function() {
  debugger
  if(this.waterAmount === 0) {
    return
  }
  
  Machine.prototype.enable.call(this)
}

const coffeMachine = new CoffeMachine()
coffeMachine.enable()



const int = new IntBuilder(1)

int.plus(10).plus(20).plus(30).minus(15)