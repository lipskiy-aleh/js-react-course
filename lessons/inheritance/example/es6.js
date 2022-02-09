class Shape {
  #color

  constructor(color) {
    this.#color = color
    this.colorModified = false
  }

  getColor() {
    return this.#color
  }

  setColor(color) {
    this.colorModified = true
    this.#color = color
  }

  static randomColor() {
    return 'red'
  }
}
Shape.randomColor() -> 'red'

class Circle extends Shape {
  constructor(color, radius) {
    super(color)

    this.radius = radius

    // this.getColor = this.getColor.bind(this)
  }

  getColor = () => {
    const color = super.getColor()
    // const color = super.getColor()
    return `circle ${color}`
  }
}

const circle = new Circle('red', 10)

const func = circle.getColor.bind({})
const func2 = circle.getColor
func()
func2()
// circle.#radius

Builder.prototype.minus = function () {
  if (typeof this.value === 'string') {

  } else if (typeof this.value === 'number') {

  }
}

IntBuilder