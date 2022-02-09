
function Shape(color) {
  this.color = color
}

Shape.prototype.setColor = function (color) {
  this.color = color
}
Shape.prototype.getColor = function () {
  return this.color
}


const shape1 = new Shape('red')
console.log(shape1.color)
shape1.getColor() // -> 'red'
shape1.setColor('blue')
console.log(shape1.color) // -> 'blue'


function Circle(color, radius) {
  Shape.call(this, color)

  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.getColor = function () {
  const color = Shape.prototype.getColor.apply(this)
  return `circle ${color}`
}


const circle1 = new Circle('yellow')


// class Circle extends Shape {}


customObjectCreate = function (parent) {
  function F() { }
  F.prototype = parent
  return new F()
}
const obj = customObjectCreate({ el: 10 })
