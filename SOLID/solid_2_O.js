
// Open Close Principle
class Shape {
    area () {
        throw new Error('Area method should be implemented')
    }
}

class Square extends Shape {
    constructor (size) {
        super()
        this.size = size
    }

    area() {
        return this.size ** 2
    }
}

class Circle extends Shape{
    constructor(radius) {
        super()
        this.radius = radius
    }

    area() {
        return (this.radius ** 2) * Math.PI
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }

    area() {
        return this.width * this.height
    }
}

class Triangle extends Shape {
    constructor(a, b) { 
        super()
        this.a = a
        this.b = b
    }

    area() {
        return (this.a * this.b) / 2
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes
    }

    sum() {
        return this.shapes.reduce((acc, shape) => {
            acc += shape.area()
            return acc
          //  if (shape.type === 'circle') {
          //      acc += (shape.radius ** 2) * Math.PI
          //  } else if (shape.type === 'square') {
          //      acc += shape.size ** 2
          //  } else if (shape.type === 'rect') {
          //      acc += shape.width * shape.height
            }
        }, 0 )
    }


const calc = new AreaCalculator( shapes: [
    new Square( size: 10),
    new Circle( radius: 1),
    new Circle( radius: 5),
    new Triangle(a: 10, b: 15)
] )

console.log(calc.sum())
// console.log(new Circle( radius: 5))