/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model){
        this.model = model;
        this.currentSpeed = 0
    }
    accelerate(){
        this.currentSpeed++
    }
    brake(){
        this.currentSpeed--
    }
    toString(){
        return `Car Model: ${this.model}, Current Speed: ${this.currentSpeed}`;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const newCar = new Car('Camry');
newCar.accelerate();
newCar.accelerate();
newCar.brake();
console.log(newCar.toString());


/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car{
    constructor(model){
        super(model)
        this.motor = 'electric'
    }
    accelerate(){
        this.currentSpeed++
    }
    brake(){
        this.currentSpeed--
    }
    toString(){
        return `Electric car Model: ${this.model}, Current Speed: ${this.currentSpeed}`;
    }
}

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const TeslaCar = new ElectricCar('Tesla')
TeslaCar.accelerate();
TeslaCar.accelerate();
TeslaCar.brake();
console.log(TeslaCar.toString());