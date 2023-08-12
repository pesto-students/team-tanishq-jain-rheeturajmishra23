const intersectionOfTwoArrays = (arr1,arr2)=>{
    m = new Map();
    for(let i=0 ; i<arr1.length ; i++){
        if(m.has(arr1[i])){
            m.set(arr1[i],m.get(arr1[i])+1)
        } else {
            m.set(arr1[i], 1)
        }
    }
    let output=[]
    for(let i=0 ; i<arr2.length ; i++){
        if(m.has(arr2[i]) && !output.includes(arr2[i])){
            output.push(arr2[i])
        }
    }
    return output.map(toNumber)
}
const toNumber = (value)=>{
    return Number(value)
}
const arr1 = prompt().split(",")
const arr2 = prompt().split(",")
console.log(intersectionOfTwoArrays(arr1,arr2))