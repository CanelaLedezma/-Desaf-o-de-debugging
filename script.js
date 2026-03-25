const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0

button.addEventListener("click", checkGuess)

function checkGuess(){

const guess = Number(input.value)
if (guess < 1 || guess > 100){
      message.innerText = "Ese número no esta entre 1 y 100"
return;
}

  attempts = attempts + 1

  attemptsText.innerText = attempts

  if(guess === secretNumber){
    message.innerText = "¡Ganaste!"
  }

  else if(guess < secretNumber){
    message.innerText = "El número es mayor"
  }

  else
  {
    message.innerText = "El número es menor"
  }

   
}