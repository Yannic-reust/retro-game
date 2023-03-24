
var score = 0;
var showScore = 0;

function scoreIncrease (e) {
  console.log(e)
  if (score == showScore) {
    showScore + e;
  }
  score + e;
  document.getElementById("scoreText").innerHTML = showScore;
  if (showScore > 175) {
    document.getElementById("levelDone").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
  console.log()
};
function scoreDecrease  (e) {
  score - e;
};
