let transpose = (matrix) => {
    let newMatrix = []
    let col = matrix.length
    let row = matrix[0].length
    for(let i=0 ; i<row ; i++){
        let temp =[]
        for(let j=0 ; j<col ; j++){
            temp.push(matrix[j][i])
        }
        newMatrix.push(temp)
    }
    return newMatrix
}
let row = parseInt(prompt())
let col = parseInt(prompt())
let temp = prompt().split(" ")
let matrix = []
let k=0
for(let i=0 ; i<row ; i++){
    matrix[i] = []
    for(let j=0 ; j<col ; j++){
        matrix[i][j] = Number(temp[k++])    
    }
}
console.log(matrix)
console.log(transpose(matrix))