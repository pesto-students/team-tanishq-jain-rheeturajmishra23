const oldKeyNewKey = (arr) =>{
    arr = arr.map(toNumber)
    let newKey = parseInt(prompt())
    let oldKey = parseInt(prompt())
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] === oldKey){
            arr[i] = newKey
        }
    }
    return arr;
}
let toNumber = (value) => Number(value)
let arr = prompt().split(",")
console.log(oldKeyNewKey(arr))