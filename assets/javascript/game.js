var choices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var computerGuess;  
var GuessesRemaining = 9
var guessedLetters = []
var wins = 0
var lose = 0
var youWin = false

function KeyPress (){
    console.log ("a key was pressed")
}

PickRandomLetter ()
document.onkeydown = function (event) {
    console.log (event.key)
    if (event.key == computerGuess) {
        console.log ("You Win!")
        wins = wins + 1 
        document.querySelector ("#Wins").innerHTML = "Wins: " + wins
    if(youWin) {
        resetGame()
        youWin = false;
    }
    } else {
        if (GuessesRemaining === 0) {
            console.log ("You Lose!")
            lose = lose + 1
            document.querySelector ("#Losses").innerHTML = "Losses: " + lose
            document.getElementById ("#GuessesSoFar").innerText = "Your Guesses so far: " + guessedLetters.join (', ')
        } else {
            console.log ("Incorrect Guess")
            GuessesRemaining = GuessesRemaining - 1
            console.log (GuessesRemaining)
document.querySelector ("#GuessesLeft").innerHTML = "Guesses Left: " + GuessesRemaining
        }
    
    }

}


function PickRandomLetter (){
    var RandomNumber = (Math.floor(Math.random()*26))
    console.log ("The computer chose " + choices [RandomNumber])
    computerGuess = choices [RandomNumber]
}