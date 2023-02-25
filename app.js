const computerChoiceDisplay = document.querySelector(".computer-choice")
const userChoiceDisplay = document.querySelector(".user-choice")
const options = document.querySelectorAll(".choice-btn")
const displayUserScore = document.querySelector(".user-score")
const displayComputerScore = document.querySelector(".computer-score")
const winner = document.querySelector(".winner")
const playAgainBtn = document.querySelector(".play-again")
const selectLength = document.querySelector(".game-length")

let userChoice
let computerChoice
let result
let userScore = 0
let computerScore = 0

options.forEach((possibleChoice) => {
   possibleChoice.addEventListener("click", (e) => {
      selectLength.classList.add("disable")
      userChoice = e.currentTarget.innerHTML
      userChoiceDisplay.innerHTML = userChoice
      generetCamputerChoice()
      setTimeout(getResult, 100)
   })
})

function generetCamputerChoice() {
   const randomNumber = Math.floor(Math.random() * options.length) + 1
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

let userWin = "you win"
let computerWin = "computer win"

function getResult() {
   if (computerChoice === userChoice) result = ""

   if (computerChoice === "👊" && userChoice === "✋") {
      result = userWin
   }
   if (computerChoice === "👊" && userChoice === "✂️") {
      result = computerWin
   }
   if (computerChoice === "✋" && userChoice === "✂️") {
      result = userWin
   }
   if (computerChoice === "✋" && userChoice === "👊") {
      result = computerWin
   }
   if (computerChoice === "✂️" && userChoice === "👊") {
      result = userWin
   }
   if (computerChoice === "✂️" && userChoice === "✋") {
      result = computerWin
   }
   scores()
   gameWinner()
}

let gameLength = selectLength.value

selectLength.addEventListener("change", () => {
   gameLength = selectLength.value
   selectLength.classList.add("disable")
})

function scores() {
   if (result === userWin) {
      setTimeout(userScore++, 100)
      displayUserScore.innerHTML = userScore
   }
   if (result === computerWin) {
      setTimeout(computerScore++, 100)
      displayComputerScore.innerHTML = computerScore
   }
   if (userScore >= gameLength) {
      winner.innerHTML = "You win the game 😊"
   }
   if (computerScore >= gameLength) {
      winner.innerHTML = "Computer win, you lose 😔"
   }
}

function gameWinner() {
   if (userScore >= gameLength || computerScore >= gameLength) {
      options.forEach((btn) => {
         btn.classList.add("disable")
      })

      playAgainBtn.style.display = "block"
      selectLength.classList.remove("disable")
      playAgainBtn.addEventListener("click", resetGame)
   }
}

function resetGame() {
   playAgainBtn.style.display = "none"
   selectLength.classList.add("disable")
   winner.innerHTML = ""
   userScore = 0
   computerScore = 0
   displayUserScore.innerHTML = userScore
   displayComputerScore.innerHTML = computerScore
   document.querySelectorAll("span").forEach(span => span.innerHTML = "")
   options.forEach((btn) => {
      btn.classList.remove("disable")
   })

}
