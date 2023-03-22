const moveLeft = function () {
  checkColisonGuy();
  collisionHole();
  if (atStart) return;
  if (atEnd) atEnd = false;
  if (lastDirection === "left") {
    moveAll();
  } else {
    reverseAll();
  }
  lastDirection = "left";
  scoreDecrease();
};

const moveRight = function () {
  checkColisonGuy();
  collisionHole();
  if (atEnd) return;
  if (atStart) atStart = false;

  if (lastDirection === "right") {
    moveAll();
  } else {
    reverseAll();
  }
  lastDirection = "right";
  scoreIncrease();
};
var score = 0;
var showScore = 0;

const scoreIncrease = function () {
  if (score == showScore) {
    showScore++;
  }
  score++;
  document.getElementById("scoreText").innerHTML = showScore;
  if (showScore > 175) {
    document.getElementById("levelDone").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
};
const scoreDecrease = function () {
  score--;
};

