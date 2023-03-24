//=====================================
// Tastaturabfrage
//=====================================

globalThis.addEventListener("down", onkeydown, false);
globalThis.addEventListener("up", onkeyup, false);

let keys = {};
onkeydown = onkeyup = (e) => {
 pause()
  if (enableKeyboard) {
    keys[e.code] = e.type == "keydown";
    if (keys.KeyD && keys.KeyW) jumpRight3();
    else if (keys.KeyA && keys.KeyW) jumpLeft3();
    else if (keys.KeyA && !keys.KeyD) moveLeft3();
    else if (keys.KeyD && !keys.KeyA) moveRight3();
    else if (keys.KeyW && !keys.KeyS) jump();
    else if (keys.KeyA && keys.KeyD) pause();
    else if (!keys.KeyA && !keys.KeyD) pause();
  }
};
//=====================================
// Movement
//=====================================

const charAnim = charactersc3.getAnimations()[0];

let lastDirection = "right";
let atStart = true;
let atEnd = false;
let enableKeyboard = true;

charactersc3.addEventListener("animationend", () => {
  if (lastDirection === "right") atEnd = true;
  if (lastDirection === "left") atStart = true;
});

const moveAll = function () {
  charAnim.play();
};

const reverseAll = function () {
  charAnim.reverse();
};

const pause = function () {
  charAnim.pause();
};

function jumpRight3() {


  moveRight();
  jump();
}
function jumpLeft3() {

  moveLeft();
  jump();
}

const moveLeft3 = function () {
  reverseAll();
  document.getElementById("charactersc3").classList.add("walkLeft3")
  console.log("left");
};

const moveRight3 = function () {

  console.log("right");

  moveAll();
};
