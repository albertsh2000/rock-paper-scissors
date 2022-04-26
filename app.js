const computerChoiceDisplay = document.querySelector(".computer-choice")
const userChoiceDisplay = document.querySelector(".user-choice")
const allBtns = document.querySelectorAll(".choice-btn")
const resultDisplay = document.querySelector('.result')
const displayUserScore = document.querySelector(".user-score")
const displayComputerScore = document.querySelector(".computer-score")
const winner = document.querySelector(".winner")
const playAgain = document.querySelector(".play-again")

let userChoice
let computerChoice
let result
let userScore = 0
let computerScore = 0

playAgain.classList.add("disable")

allBtns.forEach((possibleChoice) => {
    possibleChoice.addEventListener("click", (e) => {
        userChoice = e.currentTarget.innerHTML
        userChoiceDisplay.innerHTML = userChoice
        generetCamputerChoice()
        setTimeout(getResult,300)
    })
})

function generetCamputerChoice() {
    const randomNumber = Math.floor(Math.random() * allBtns.length) + 1
    if (randomNumber === 1) {
        computerChoice = "👊"
    }
    if (randomNumber === 2) {
        computerChoice = "✂️"
    }
    if (randomNumber === 3) {
        computerChoice = "✋"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw! 🤝'
    }
    if (computerChoice === "👊" && userChoice === "✋") {
        result = 'you win! 👍'
    }
    if (computerChoice === "👊" && userChoice === "✂️") {
        result = 'computer win 👎'
    }
    if (computerChoice === "✋" && userChoice === "✂️") {
        result = 'you win! 👍'
    }
    if (computerChoice === "✋" && userChoice === "👊") {
        result = 'computer win 👎'
    }
    if (computerChoice === "✂️" && userChoice === "👊") {
        result = 'you win! 👍'
    }
    if (computerChoice === "✂️" && userChoice === "✋") {
        result = 'computer win 👎'
    }
    resultDisplay.innerHTML = result
    scores()
    gameWinner()
}

function scores() {
    if (result === 'you win! 👍') {
        setTimeout(userScore++ ,300)
        displayUserScore.innerHTML = userScore
    }
    if (result === 'computer win 👎') {
    	setTimeout( computerScore++ ,300)
        displayComputerScore.innerHTML = computerScore
    }
    if (userScore >= 5) {
        winner.innerHTML = "User Win The Game"
    }
    if (computerScore >= 5) {
        winner.innerHTML = "Computer Win The Game"
    }
}

function gameWinner() {
    if (userScore >= 5 || computerScore >= 5) {
        allBtns.forEach((btn) => {
            btn.classList.add("disable")
        })
        resultDisplay.innerHTML = ""
        playAgain.classList.remove("disable")

        playAgain.addEventListener("click", () => {
            window.location.reload()
        })
    }
}