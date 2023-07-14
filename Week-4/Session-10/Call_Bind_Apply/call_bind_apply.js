class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  
    divide(num1, num2) {
      return num1 / num2;
    }
  }
  
  class ScientificCalculator extends Calculator {
    square(num) {
      return num * num;
    }
  
    cube(num) {
      return num * num * num;
    }
  
    power(num, exponent) {
      return Math.pow(num, exponent);
    }
  }
  
  const calculator = new Calculator();
  const scientificCalculator = new ScientificCalculator();
  
  // Using the "call" method to invoke the "add" method of the Calculator class
  const result1 = calculator.add.call(null, 10, 5);
  console.log(result1); // Output: 15
  
  // Using the "apply" method to invoke the "subtract" method of the Calculator class
  const result2 = calculator.subtract.apply(null, [10, 5]);
  console.log(result2); // Output: 5
  
  // Using the "bind" method to create a new method "multiplyByTwo" and bind it to the scientificCalculator instance
  const multiplyByTwo = calculator.multiply.bind(scientificCalculator, 2);
  const result3 = multiplyByTwo(5);
  console.log(result3); // Output: 10
  
  // Using the "bind" method to create a new method "powerOfThree" and bind it to the scientificCalculator instance
  const powerOfThree = scientificCalculator.power.bind(scientificCalculator, 3);
  const result4 = powerOfThree(2);
  console.log(result4); // Output: 8
  