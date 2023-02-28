let lastDirection = "right";
let atStart = true;
let atEnd = false;

ground1.addEventListener("animationend", () => {
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

const pause = function (x) {
  clouds1Anim.pause();
  clouds2Anim.pause();
  background1Anim.pause();
  background2Anim.pause();
  ground1Anim.pause();
  ground2Anim.pause();
  infoGuyBoxAnim.pause();
  charAnim.pause();
  if (x) {
    setTimeout(() => {
      console.log("Delayed for 1 second.");
    }, x);
  }
};

const moveLeft = function () {
  checkColison();
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
  checkColison();

  if (atEnd) return;
  if (atStart) atStart = false;

  if (lastDirection === "right") {
    moveAll();
  } else {
    reverseAll();
  }

  lastDirection = "right";
};

//=====================================
// Tastaturabfrage
//=====================================

globalThis.addEventListener("down", onkeydown, false);
globalThis.addEventListener("up", onkeyup, false);

let keys = {};
onkeydown = onkeyup = (e) => {
  keys[e.code] = e.type == "keydown";
  if (keys.KeyD && keys.KeyW) jump(), moveRight();
  else if (keys.KeyA && keys.KeyW) jump(), moveLeft();
  else if (keys.KeyA && !keys.KeyD) moveLeft();
  else if (keys.KeyD && !keys.KeyA) moveRight();
  else if (keys.KeyW && !keys.KeyS) jump();
  else if (keys.KeyA && keys.KeyD) pause();
  else if (!keys.KeyA && !keys.KeyD) pause();
};
