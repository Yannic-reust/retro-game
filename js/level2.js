const clouds1Anim = clouds1.getAnimations()[0];
const clouds2Anim = clouds2.getAnimations()[0];
const background1Anim = background1.getAnimations()[0];
const background2Anim = background2.getAnimations()[0];
const ground1Anim = ground1.getAnimations()[0];
const ground2Anim = ground2.getAnimations()[0];
const infoGuyBoxAnim = infoGuyBox.getAnimations()[0];

const char = document.getElementById("character");
const infoGuyAnim = document.getElementById("infoGuy");

const groundAnimation = ground1.getAnimations()[0];
var showScore = 0;

var jumping = false;

function jump() {
  if (!jumping) {
    jumping = true;
    var elem = document.getElementById("character-wrapper-2");
    elem.classList.add("jump");
    setTimeout(() => {
      elem.classList.remove("jump");
      setTimeout(() => {
        jumping = false;
        collisionHole();
      }, 250);
    }, 250);
  }
}

function nextTry() {
  resetGame();
  document.getElementById("deadWrapper").classList.remove("visible");
  showScore = 0;
  score = 0;
  document.getElementById("scoreText").innerHTML = showScore;
}

function resetGame() {
  enableKeyboard = true;
  clouds1Anim.cancel();
  clouds2Anim.cancel();
  background1Anim.cancel();
  background2Anim.cancel();
  ground1Anim.cancel();
  ground2Anim.cancel();
  infoGuyBoxAnim.cancel();
  charAnim.cancel();
}

function nextLevel() {
  location.href = "final.html";
}

function jumpRight() {
  showScore = groundAnimation.currentTime / 1000;
  document.getElementById("scoreText").innerHTML = showScore
    .toString()
    .substring(0, 4);

  if (showScore >= 15) {
    pause();
    document.getElementById("levelDone").classList.add("visible");
    enableKeyboard = false;
  }
  jump();

  moveRight();
}
function jumpLeft() {
  moveLeft();
  jump();
}

//=====================================
// Tastaturabfrage
//=====================================

globalThis.addEventListener("down", onkeydown, false);
globalThis.addEventListener("up", onkeyup, false);

let keys = {};
onkeydown = onkeyup = (e) => {
  if (enableKeyboard) {
    keys[e.code] = e.type == "keydown";
    if (keys.KeyW && keys.KeyD) {
      jumpRight();
    } else if (keys.KeyW && keys.KeyA) {
      jumpLeft();
    } else if (keys.KeyA && !keys.KeyD) {
      moveLeft();
    } else if (keys.KeyD && !keys.KeyA) {
      moveRight();
    } else if (keys.KeyW && !keys.KeyS) jump();
    else if (keys.KeyA && keys.KeyD) pause();
    else if (!keys.KeyA && !keys.KeyD) pause();
  }
};
//=====================================
// Movement
//=====================================

const charAnim = charactersc2.getAnimations()[0];

let lastDirection = "right";
let atStart = true;
let atEnd = false;
let enableKeyboard = true;

charactersc2.addEventListener("animationend", () => {
  if (lastDirection === "right") atEnd = true;
  if (lastDirection === "left") atStart = true;
});

const moveAll = function () {
  clouds1Anim.play();
  clouds2Anim.play();
  background1Anim.play();
  background2Anim.play();
  ground1Anim.play();
  ground2Anim.play();
  infoGuyBoxAnim.play();
  charAnim.play();
};

const reverseAll = function () {
  clouds1Anim.reverse();
  clouds2Anim.reverse();

  background1Anim.reverse();
  background2Anim.reverse();
  ground1Anim.reverse();
  ground2Anim.reverse();
  infoGuyBoxAnim.reverse();
  charAnim.reverse();
};

const pause = function () {
  clouds1Anim.pause();
  clouds2Anim.pause();
  background1Anim.pause();
  background2Anim.pause();
  ground1Anim.pause();
  ground2Anim.pause();
  infoGuyBoxAnim.pause();
  charAnim.pause();
};

myFunc();
function myFunc() {
  myFunc = function () {};
  pause();
}

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
};

const moveRight = function () {
  showScore = groundAnimation.currentTime / 1000;
  document.getElementById("scoreText").innerHTML = showScore
    .toString()
    .substring(0, 4);
  console.log(showScore);
  if (showScore >= 15) {
    document.getElementById("levelDone").classList.add("visible");
    enableKeyboard = false;
    pause();
  }

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
};
