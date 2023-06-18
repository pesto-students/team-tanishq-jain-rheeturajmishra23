// Your solution goes here 
function playGuessingGame(numToGuess,totalGuesses=10){
    let input = prompt("Enter a number between 1 and 100")
    totalGuesses--;
    while(totalGuesses!=0){
        totalGuesses--;
        if(input===null){
            break;
        }else if(numToGuess > input){
            input = prompt(input+" is too small. Guess a larger number")
        } else if(numToGuess < input){
            input = prompt(input+" is too large. Guess a smaller number")
        } else if(isNaN(input)){
            input = prompt("Enter a number between 1 and 100");
            totalGuesses++;
        } else {
            console.log("You guessed it right");
            return input;
        }
    }
}