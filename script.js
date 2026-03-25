const input = document.getElementById("guessInput")
const button = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attemptsText = document.getElementById("attempts")
const historialText = document.getElementById("historial");
const reiniciar = document.getElementById("resetBtn");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0
let historial = "";

button.addEventListener("click", checkGuess);
reiniciar.addEventListener("click", reiniciarJuego);


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

  attempts = attempts + 1
  historial += guess + " ";
  historialText.innerText = "Intentos anteriores: " + 
  historial;
  attempts.innerText = attempts;

if (attempts >= 10 && guess !== secretNumber){
  message.innerText = "Perdiste. El número era " + secretNumber;
 reiniciarJuego();
 return;
}

  if(guess === secretNumber){

    message.innerText = "¡Ganaste!"
    
     reiniciarJuego();
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
function reiniciarJuego() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  historial = "";
  attemptsText.innerText = attempts;
  historialText.innerText = "";
  input.value = "";
}
input.addEventListener("keyup", (e) => { if (e.key === "Enter") { checkGuess();}
});