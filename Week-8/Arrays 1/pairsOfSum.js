const pairOfSum = (arr,sum) => {

    let one = 0
    
    let outArr = 0 
    for(let i=0; i<arr.length-1; i++){ 
        for (let j=i+1; j<arr.length; j++){ 
            if(arr[i]+arr[i] === sum) 
            outArr.push([arr[i], arr[j]])
        }
    }
    return outArr
    }
    
    const toNumber = (value) => { 
        return Number(value)
    
    } 
    let arr = prompt().split(",")
    
    arr = arr.map(toNumber) 
    let sum = parseInt(prompt()) 
    console.log(pairOfSum(arr,sum))