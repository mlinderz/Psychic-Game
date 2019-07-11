var choices = ["a","b","c","d","e"]
var computerGuess;  
var GuessesRemaining = 9

function KeyPress (){
    console.log ("a key was pressed")
}

PickRandomLetter ()
document.onkeydown = function (event) {
    console.log (event.key)
    if (event.key == computerGuess) {
        console.log ("You Win!")
    } else {
        if (GuessesRemaining === 1) {
            console.log ("You Lose!")
        } else {
            console.log ("Incorrect Guess")
            GuessesRemaining = GuessesRemaining - 1
            console.log (GuessesRemaining)
document.querySelector ("#GuessesLeft").innerHTML = "Guesses Left: " + GuessesRemaining
        }
    }
}


function PickRandomLetter (){
    var RandomNumber = (Math.floor(Math.random()*5))
    console.log ("The computer chose " + choices [RandomNumber])
    computerGuess = choices [RandomNumber]
}