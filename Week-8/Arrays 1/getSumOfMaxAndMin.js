const getSumOfMaxAndMin = (arr)=>{
    let max=arr[0],min=arr[0]
    for(let i=0 ; i<arr.length ; i++){
        if(max < arr[i]){
            max = arr[i]
        }
        if(min > arr[i]){
            min = arr[i]
        }
        console.log(max,min)
    }
    return  Number(max) + Number(min)
}
const toNumber = (value)=>{
    return Number(value)
}

let inputArr = prompt().split(" ")
console.log(getSumOfMaxAndMin(inputArr.map(toNumber)))