// Interface segregation principle
/* class Animal {
    constructor(name) {
        this.name = name
    }
}

walk() {
    console.log(` ${this.name} умеет ходить`)
}

swim() {
    console.log(` ${this.name} умеет плавать`)
}

fly() {
    console.log(` ${this.name} умеет летать`)
}

class Dog extends Animal {
    fly() {
        return null
    }
}

class Eagle extends Animal {
    swim() {
        return null
    }
}

class Whale extends Animal {
    fly() {
        return null
    }

    walk() {
        return null
    }
}

const dog = new Dog( name: 'Рэкс')

dog.walk()
dog.swim()
dog.fly()

const eagle = new Eagle( name: 'Эрнесто')
eagle.fly()
eagle.walk()
eagle.swim()

const whale = new Whale ( name: 'Жора')
whale.swim()
whale.walk()
whale.fly()
*/

class Animal {
    constructor(name) {
        this.name = name
    }
}

const swimmer = {
    swim() {
        console.log(` ${this.name} умеет плавать`)
    }
}

const flier = {
    fly() {
        console.log(` ${this.name} умеет летать`)
    }
}

const walker = {
    walk() {
        console.log(` ${this.name} умеет ходить`)
    }
} 

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, swimmer, walker)
Object.assign(Eagle.prototype, flier, walker)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog( 'Рэкс')

dog.walk()
dog.swim()


const eagle = new Eagle( 'Эрнесто')
eagle.fly()
eagle.walk()


const whale = new Whale ( 'Жора')
whale.swim()
