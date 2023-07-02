//Protecting the object
const person = {}
Object.defineProperties(person,{
    email: {
        value:"xyz@yahoo.com",
        writable: false
    },
    name: {
        value: "xyz",
        writable: false,
    },
    age: {
        value: undefined,
        writable: true,
    },
    getAge: {
        value: function(){
            return this.age;   
        }
    },
    setAge: {
        value : function(age) {
            this.age = age;
        }
    },
});

// Testing
console.log(person.name);
console.log(person.email);
person.setAge(34);
console.log(person.getAge());

// Javascript Prototype

function Vehicle(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.getDetails = function() {
    return `Vehicle is of ${this.make} make and ${this.model} model, which is made in ${this.year}`
};

function Car(make,model,year,numDoors){
    Vehicle.call(this,make,model,year);
    this.numDoors = numDoors;
}

//Extending object
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

//Overiding the function.
Car.prototype.getDetails = function() {
    const vehicleDetails = Vehicle.prototype.getDetails.call(this);
    return `${vehicleDetails} with ${this.numDoors} doors.`
};

const vehicle = new Vehicle('Toyota', 'Camry', 2022);
const car = new Car('Ford', 'Mustang', 2023, 2);

// Calling getDetails method
console.log(vehicle.getDetails());
console.log(car.getDetails());