const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
const historialText = document.getElementById("historial");


let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0

button.addEventListener("click", checkGuess)

let historial = "";
historialText.innerText = "";
function checkGuess(){

  if (input.value === "") {
    message.innerText = "Ingresá un número";
    return;
  }

  const guess = Number(input.value);

  if (guess < 1 || guess > 100){
    message.innerText = "Ese número no está entre 1 y 100"
    return;
  }

  historial = historial + guess + " ";
  historialText.innerText = "Intentos anteriores: " + historial;
  attempts = attempts + 1

if (attempts >= 10){
  message.innerText = "Perdiste. El número era " + secretNumber;

  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  historial = "";
  historialText.innerText = "";
  attemptsText.innerText = attempts;

  return;
}

  if(guess === secretNumber){

    message.innerText = "¡Ganaste!"
    
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    historial = "";
    historialText.innerText = "";
    attemptsText.innerText = attempts;
    input.value = "";

  return;
  }

  else if(guess < secretNumber){
    message.innerText = "El número es mayor"
  }

  else
  {
    message.innerText = "El número es menor"
  }

  input.value = "";
   
}

input.addEventListener("keyup", (e) => { if (e.key === "Enter") { checkGuess();}
});