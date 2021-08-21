// Variables basicas para iniciar el juego
const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const choices = document.querySelectorAll("button")

// Datos a guardar
let userChoice
let computerChoice
let result

//Función botones
choices.forEach(button => button.addEventListener("click", (e) => {
userChoice = e.target.id
userChoiceDisplay.innerHTML = `  ${userChoice}`
generateComputerChoice()
getResult() 
}))

// Función number randomizer
function generateComputerChoice(){
    const randomNumber =  Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1){
        computerChoice = "Piedra"
    }
    if (randomNumber === 2){
        computerChoice = "Papel"
    }
    if (randomNumber === 3){
        computerChoice = "Tijeras"
    }
    computerChoiceDisplay.innerHTML = `${computerChoice}`;
}

// Función con los posibles resultados
function getResult(){
    if (computerChoice === userChoice){
        result = "¡Es un empate!"
    }
    if (computerChoice === "Piedra" && userChoice === "Papel"){
        result = "¡Ganaste!"
    }
    if (computerChoice === "Piedra" && userChoice === "Tijeras"){
        result = "¡Haz perdido!"
    }
    if (computerChoice === "Papel" && userChoice === "Tijeras"){
        result = "¡Ganaste!"
    }
    if (computerChoice === "Papel" && userChoice === "Piedra"){
        result = "¡Haz perdido!"
    }
    if (computerChoice === "Tijeras" && userChoice === "Piedra"){
        result = "¡Ganaste!"
    }
    if (computerChoice === "Tijeras" && userChoice === "Papel"){
        result = "¡Haz perdido!"
    }

    // Resultado del juego
resultDisplay.innerHTML = `  ${result}`

}