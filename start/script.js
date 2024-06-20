let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

function displayMessage(msg) {
  document.querySelector(".message").textContent = msg;
}

document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  //console.log(guess);
  if (!guess) {
    displayMessage("❌ No Number");
  } else if (guess == secretNumber) {
    displayMessage("💪 Correct Number");
    document.body.style.backgroundColor = "green";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "25rem";
    // traitement
    if (score > highscore) {
      // mise à jour highscore
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😵‍💫 You lost the game");
      document.querySelector(".score").textContent = 0;
      document.querySelector(".check").disabled = true;
      //traitement
    }
  }
});

document.getElementById("btn-again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".check").disabled = false;
});
