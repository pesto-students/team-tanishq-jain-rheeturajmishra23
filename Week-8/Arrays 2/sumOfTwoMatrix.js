const sumOfTwoMatrix = (mat1,mat2) =>{
    sumMatrix=[]
    if((row1 !== row2) || (col1 !== col2) )
        return -1
    for(let i=0 ; i<row1 ; i++){
        sumMatrix[i] = []
        for(let j=0 ; j<col1 ; j++){
            sumMatrix[i][j] = mat1[i][j] + mat2[i][j]
        }
    }
    return sumMatrix;
}
let row1 = parseInt(prompt())
let col1 = parseInt(prompt())
let temp1 = prompt().split(" ")
let row2 = parseInt(prompt())
let col2 = parseInt(prompt())
let temp2 = prompt().split(" ")
let matrix1 = []
let matrix2 = []
let k=0
for(let i=0 ; i<row1 ; i++){
    matrix1[i] = []
    for(let j=0 ; j<col1 ; j++){
        matrix1[i][j] = Number(temp1[k++])    
    }
}
let p=0
for(let i=0 ; i<row2 ; i++){
    matrix2[i] = []
    for(let j=0 ; j<col2 ; j++){
        matrix2[i][j] = Number(temp2[p++])    
    }
}
console.log(sumOfTwoMatrix(matrix1,matrix2))