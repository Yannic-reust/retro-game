//=====================================
// Tastaturabfrage
//=====================================

globalThis.addEventListener("down", onkeydown, false);
globalThis.addEventListener("up", onkeyup, false);

let keys = {};
onkeydown = onkeyup = (e) => {
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
  moveRight3();
  jump();
}
function jumpLeft3() {
  moveLeft3();
  jump();
}

var jumping = false;

function jump() {
  if (!jumping) {
    jumping = true;
    var elem = document.getElementById("character-wrapper-3");
    elem.classList.add("jump");
    setTimeout(() => {
      elem.classList.remove("jump");
      setTimeout(() => {
        jumping = false;
      }, 250);
    }, 250);
  }
}

var position = 0;
var direction = "";
var windowWidth = window.innerWidth;
const moveLeft3 = function () {
  console.log("asd");
  if (position >= 0) {
    position -= 10;
    document.getElementById("charactersc3").style.transform =
      "translate(" + position + "px, 0px)";
    direction = "left";

    if (direction !== "left") {
      reverseAll();
    }
  }
};

const moveRight3 = function () {
  /*console.log("asd")
  if (position <= windowWidth - 700) {
    position += 10;
    document.getElementById("charactersc3").style.transform =
      "translate(" + position + "px, 0px)";

    direction == "right";
    if (direction !== "right") {
      moveAll();
    }
  }*/
};

var createdEnemiesIds = [];

const addEnemie = function (id) {
  const e = document.createElement("div");
  e.setAttribute("id", "enemie-" + id);
  e.setAttribute("class", "enemieM");

  const container = document.querySelector("#enemieMinions");
  container.appendChild(e);
  createdEnemiesIds.push(id);
};

var lastIndex = 1;

const cleanUp = function () {
  for (i = lastIndex; i <= shotCount; i++) {
    document.getElementById("enemie-" + i).remove();
  }
  createdEnemiesIds = [];
  lastIndex = shotCount + 1 - createdEnemiesIds.length;

  setTimeout(() => {
    cleanUp();
  }, 10000);
};

var notDead = true;
var shotCount = 0;

const enemieShot = function () {
  var number = Math.floor(Math.random() * 4);

  if (notDead) {
    setTimeout(() => {
      enemieShot();
      shotCount++;
      addEnemie(shotCount);
    }, (number + 1) * 1000);
  }
};

enemieShot();
setTimeout(() => {
  cleanUp();
}, 8000);

var loaded = false;

if (!loaded) {
  pause();
  loaded = true;
}
