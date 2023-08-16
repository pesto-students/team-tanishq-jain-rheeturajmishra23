const findNonDuplicates = (inputArr)=>{
    let hashMap = new Map()
    for(let i=0 ; i<inputArr.length ; i++){
        if(hashMap.has(inputArr[i])){
            hashMap.set(inputArr[i],hashMap.get(inputArr[i])+1)
        } else {
            hashMap.set(inputArr[i],1)
        }
    }
    console.log(hashMap)
    for(let i=0 ; i<inputArr.length ; i++){
        if(hashMap.get(inputArr[i])==1){
            return inputArr[i];
        }
    }
    return -1;
}

let inputArr = prompt().split(" ")
console.log(findNonDuplicates(inputArr))