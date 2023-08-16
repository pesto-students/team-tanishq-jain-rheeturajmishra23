// Inheritence 

class Vehicle {
    constructor(make,model,year,color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    
    drive() {
        console.log(`Driving ${make} ${model}`)
    }
}

class Car extends Vehicle {
    constructor(make,model,year,color,numSeats){
        super(make,model,year,color);
        this.numSeats = numSeats
    }
}

class RideShareCar extends Car {
    constructor(isAvailable){
        super();
        this.isAvailable = isAvailable
    }
}

let rideShareCar = new RideShareCar(true);
console.log(rideShareCar)

//Polymorphism

class Shape {
    calculateArea(){
        return 0;
    }
}

class Rectangle extends Shape {
    calculateArea(width,height){
        return width*height;
    }
}

class Triangle extends Shape {
    calculateArea(base,height){
        return (base*height)/2;
    }
}

class Circle extends Shape {
    calculateArea(radius){
        return Math.PI*radius*radius;
    }
}

const circle = new Circle();
console.log("Area of circle:",circle.calculateArea(3));
const triangle = new Triangle();
console.log("Area of triangle:",triangle.calculateArea(4,6));
const rectangle = new Rectangle();
console.log("Area of rectangle:",rectangle.calculateArea(3,8));

// Abstraction and Encaptulation
class BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      this._accountNumber = accountNumber;
      this._balance = balance;
      this._accountHolderName = accountHolderName;
    }
    
    deposit(amount) {
      this._balance += amount;
      console.log(`Deposit successful. New balance: ${this._balance}`);
    }
    
    withdraw(amount) {
      if (this._balance >= amount) {
        this._balance -= amount;
        console.log(`Withdrawal successful. New balance: ${this._balance}`);
      } else {
        console.log(`Insufficient funds. Withdrawal failed. Current balance: ${this._balance}`);
      }
    }
    
    getBalance() {
      return this._balance;
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, accountHolderName) {
      super(accountNumber, balance, accountHolderName);
    }
    
    withdraw(amount) {
      if (this._balance - amount < 0) {
        console.log("Withdrawal failed. Balance cannot be negative.");
        return;
      }
      
      super.withdraw(amount);
    }
  }
  
  // Create instances of each subclass
  const checking = new CheckingAccount("CH123456", 1000, "John Doe");
  const savings = new SavingsAccount("SA789012", 500, "Jane Smith");
  
  // Deposit, withdraw, and get balance for checking account
  checking.deposit(500);
  checking.withdraw(200);
  console.log(`Checking account balance: ${checking.getBalance()}`);
  
  // Deposit, withdraw, and get balance for savings account
  savings.deposit(200);
  savings.withdraw(800);
  console.log(`Savings account balance: ${savings.getBalance()}`);
  
  
