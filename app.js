let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissor_div = document.getElementById("s")

function getComputerChoice(){
 const choices = ["r","p","s"]
 const choice = choices[Math.floor(Math.random() * 3)]
 return choice
}

function convertToWord(letter){
 if(letter==="r") return "Rock"
 if(letter==="p") return "Paper"
 return "Scissor" 
}

function win(userChoice,computerChoice){
 userScore++
 userScore_span.innerHTML=userScore
 const smallUserWord = "user".fontsize(3).sub()
 const smallCompWord = "comp".fontsize(3).sub()
 result_div.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(computerChoice)+smallCompWord + ". You win! "
 document.getElementById(userChoice).classList.add('green-glow')
 setTimeout(() => {
  document.getElementById(userChoice).classList.remove('green-glow') 
 }, 300);
 
}

function lose(userChoice,computerChoice){
 computerScore++
 computerScore_span.innerHTML=computerScore
 const smallUserWord = "user".fontsize(3).sub()
 const smallCompWord = "comp".fontsize(3).sub()
 result_div.innerHTML = `${convertToWord(computerChoice)}${smallUserWord} beats ${convertToWord(userChoice)}${smallCompWord}. You lose! `
document.getElementById(userChoice).classList.add('red-glow')
 setTimeout(() => {
  document.getElementById(userChoice).classList.remove('red-glow') 
 }, 300);
}

function draw(){
 result_div.innerHTML = ` It's draw. Continue!`
 document.getElementById(userChoice).classList.add('gray-glow')
 setTimeout(() => {
  document.getElementById(userChoice).classList.remove('gray-glow') 
 }, 300);
}

function game(userChoice){
 const computerChoice = getComputerChoice()
 switch(userChoice + computerChoice){
  case "rs":
  case "sp":
  case "pr":
   win(userChoice,computerChoice);
   break
  case "rr":
  case "pp":
  case "ss":
    draw(userChoice,computerChoice)
    break
  case "sr":
  case "ps":
  case "rp":
   lose(userChoice,computerChoice)
   break
 }
}

function main(){
 rock_div.addEventListener('click', function(){
 game("r")
 })
 paper_div.addEventListener('click', function(){
  game("p")
 })
 scissor_div.addEventListener('click', function(){
  game("s")
 })
}
main();
