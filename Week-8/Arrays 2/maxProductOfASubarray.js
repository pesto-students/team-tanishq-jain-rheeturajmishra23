const maxProductSubarrayApproach1 = (arr,size) => {
    let maxProduct = arr[0]
    for(let i=1 ; i<size ; i++){
        let currProduct = arr[i]
        for(let j=i+1 ; j<size ; j++){
            maxProduct = Math.max(currProduct,maxProduct)
            currProduct *= arr[j]
        }
        maxProduct = Math.max(currProduct,maxProduct)
    }
    return maxProduct
}

const maxProductSubarrayApproach2 = (arr,size) => {
    let maxProduct = arr[0],minProduct = arr[0],maxSoFar = arr[0]
    for(let i=1 ; i<size ; i++){
        let temp = Math.max(arr[i],maxProduct*arr[i],minProduct*arr[i])
        minProduct = Math.min(arr[i],maxProduct*arr[i],minProduct*arr[i])
        maxProduct = temp
        maxSoFar = Math.max(maxProduct,minProduct)
        console.log(i,minProduct,maxProduct,maxSoFar)
    }
    return maxProduct
}
const toNumber = (value) => {
    return Number(value)
}
let size = parseInt(prompt())
let arr = prompt().split(" ")
arr = arr.map(toNumber)

// console.log(maxProductSubarrayApproach1(arr,size))

console.log(maxProductSubarrayApproach2(arr,size))