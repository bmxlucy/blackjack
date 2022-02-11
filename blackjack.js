let playerHand = 0
let DealearHand = 0
let Balance = 10000
let CurrentBet = 500
let WinBet = CurrentBet * 2

//Отображаем текущую руку Игрока и Диллера
let playerDisplay = document.getElementById("playerDisplay-el")
let DealerDisplay = document.getElementById("dealerDisplay-el")
let balanceDisplay = document.getElementById("balance-el")
playerDisplay.textContent += playerHand
DealerDisplay.textContent += DealearHand
balanceDisplay.textContent += Balance

function displayCurrentHands() {
  playerDisplay.textContent = "Player Hand: " + playerHand
  DealerDisplay.textContent = "Dealer Hand: " + DealearHand
}
function playerWon() {
  alert("Player WON")
  Balance += WinBet
  balanceDisplay.textContent = "Balance: " + Balance
  playerHand = 0
  DealearHand = 0
  displayCurrentHands()
}
function dealerWon() {
  alert("Dealer WON")
  Balance -= CurrentBet
  balanceDisplay.textContent = "Balance: " + Balance
  playerHand = 0
  DealearHand = 0
  displayCurrentHands()
  
}
function aDraw() {
  alert("a Draw")
  playerHand = 0
  DealearHand = 0
  displayCurrentHands()
}

function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
//Добавляем рандомную карту от 2 до 11
function addAnotherCard() {
  newPlayerCard = randomIntFromInterval(2, 11)
  newDealerCard = randomIntFromInterval(2, 11)
  playerHand += newPlayerCard
  DealearHand += newDealerCard
  displayCurrentHands()

if (playerHand == 21 && DealearHand !== 21) {
  setTimeout(playerWon, 100)
} else if (DealearHand == 21 && playerHand !== 21) {
  setTimeout(dealerWon, 100)
} else if (playerHand > 21 && DealearHand < 21) {
  setTimeout(dealerWon, 100)
} else if (DealearHand > 21 && playerHand < 21) {
  setTimeout(playerWon, 100)
} else if (DealearHand > 21 && playerHand > 21) {
  setTimeout(aDraw, 2000)
  }
}



