
class Car {
    constructor(model, mark, country, speed) {
        this.model = model;
        this.mark = mark;
        this.country = country;
        this.speed = speed;
    }
}

increaseSpeed(amount) {
    this.speed += amount;
    return this.speed
}

decreaseSpeed(amount) {
    this.speed -= amount;
    return this.speed
}

class Truck extends Car {
    constructor(takeWeight) {
        super(model, mark, country, speed);
        this.takeWeight = takeWeight;
        const Truck = `Truck ${this.mark} ${this.model} take ${weight}kg`;
        console.log('Truck');
    }
}

class Bus extends Car {
    constructor(takePeople) {
        super(model, mark, country, speed);
        this.takePeople = takePeople;
        const Bus = `Bus ${this.mark} ${this.model} take ${people}people`;
        console.log('Bus');
    }
}

class Transporter extends Car {
    constructor(takeCars) {
        super(model, mark, country, speed);
        this.takeCars = takeCars;
        const Transporter = `Transporter ${this.mark} ${this.model} take ${cars}cars`;
        console.log('Transporter');
    }
}

const truck = new Truck("Model1", "Mark1", "Country1", 80);
const bus = new Bus("Model2", "Mark2", "Country2", 60);
const transporter = new Transporter("Model3", "Mark3", "Country3", 100);

truck.increaseSpeed(10);
console.log(`Truck speed: ${truck.speed} km/h`);
truck.takeWeight(500);

bus.decreaseSpeed(20);
console.log(`Bus speed: ${bus.speed} km/h`);
bus.takePeople(30);

transporter.increaseSpeed(15);
console.log(`Transporter speed: ${transporter.speed} km/h`);
transporter.takeCars(5);