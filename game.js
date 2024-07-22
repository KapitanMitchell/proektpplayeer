const choices = ["Камінь", "Папір", "Ножиці"];
const resultText = document.getElementById("resultText");

document.getElementById("rock").onclick = () => playGame("Камінь");
document.getElementById("paper").onclick = () => playGame("Папір");
document.getElementById("scissors").onclick = () => playGame("Ножиці");

function playGame(playerChoice) {
  resultText.textContent = "Очікуйте...";
  setTimeout(() => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const result = determineWinner(playerChoice, computerChoice);
    resultText.textContent = `Ти обрав ${playerChoice}, комп'ютер обрав ${computerChoice}. ${result}`;
  }, 3000); 
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "Нічия!";
  }
  if (
    (player === "Камінь" && computer === "Ножиці") ||
    (player === "Папір" && computer === "Камінь") ||
    (player === "Ножиці" && computer === "Папір")
  ) {
    return "Ти переміг!";
  } else {
    return "Ти програв!";
  }
}