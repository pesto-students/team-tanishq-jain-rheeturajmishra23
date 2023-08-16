// Put your solution here
function divideArrays(nums) {
    let evenNums=[],oddNums=[];
    for(let i=0 ; i<nums.length ; i++){
        if(nums[i] % 2 === 0){
            evenNums.push(nums[i])
        } else {
          oddNums.push(nums[i])  
        }
    }
    evenNums.sort();
    oddNums.sort();
    console.log("Even Numbers:");
    if(evenNums.length == 0){
        console.log("None")
    } else {
        console.log(evenNums);
    }
    console.log("Odd Numbers: ");
    if(oddNums.length == 0){
        console.log("None")
    } else {
        console.log(oddNums);
    }
}