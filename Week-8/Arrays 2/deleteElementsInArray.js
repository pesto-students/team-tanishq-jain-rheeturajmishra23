let arr = prompt().split(",")
let toNumber = (value)=> Number(value);
arr = arr.map(toNumber);
let isNotDivisibleBy2And3 = (num)=>{
    return ((num % 2 !== 0) && (num % 3 !== 0)) 
}
let result = arr.filter(isNotDivisibleBy2And3)
console.log(result)