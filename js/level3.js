var shieldActive = false;
var shieldCoolDown = false;
var rip = false;

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
    else if (keys.KeyA && !keys.KeyD) pause();
    else if (keys.KeyD && !keys.KeyA) {
      if (!shieldCoolDown) {
        shieldBar();
      }
    } else if (keys.KeyW && !keys.KeyS) jump();
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
    document.getElementById("character-wrapper-3").classList.add("jump");
    document.getElementById("shiledWrapper").classList.add("jump");
    setTimeout(() => {
      document.getElementById("character-wrapper-3").classList.remove("jump");
      document.getElementById("shiledWrapper").classList.remove("jump");
      setTimeout(() => {
        jumping = false;
      }, 250);
    }, 250);
  }
}

const shieldBar = function () {
  shieldActive = true;
  shieldCoolDown = true;
  document.getElementById("shieldBar").classList.add("shieldBarDown");
  document.getElementById("shield").classList.add("shieldMovement");

  setTimeout(() => {
    shieldActive = false;
    document.getElementById("shield").classList.remove("shieldMovement");
  }, 500);
  setTimeout(() => {
    shieldCoolDown = false;
    document.getElementById("shieldBar").classList.remove("shieldBarDown");
  }, 5000);
};

var position = 0;
var direction = "";
var windowWidth = window.innerWidth;

var object_1 = document.getElementById("charactersc3").getBoundingClientRect();

var createdEnemiesIds = [];
var notDead = true;
var shieldActive = false;

const addEnemie = function (id) {
  createdEnemiesIds.push(id);
  const e = document.createElement("div");
  e.setAttribute("id", "enemie-" + id);
  e.setAttribute("class", "enemieM");
  const container = document.querySelector("#enemieMinions");
  container.appendChild(e);

  setTimeout(() => {
    if (
      new collisionClass1(
        document.getElementById("charactersc3").getBoundingClientRect(),
        document.getElementById("enemie-" + id).getBoundingClientRect()
      ).checkCollision1()
    ) {
      if (shieldActive) {
        document.getElementById("enemie-" + id).remove();
        hitEnemie();
      } else {
        rip = true;
        document.getElementById("deadWrapper").classList.add("visible");
      }
    }
  }, 1600);

  setTimeout(() => {
    if (createdEnemiesIds.length > 5) {
      cleanUpOngoing = true;

      for (i = lastIndex; i < shotCount; i++) {
        if (document.getElementById("enemie-" + i)) {
          document.getElementById("enemie-" + i).remove();
        }
      }
      createdEnemiesIds = [];

      lastIndex = shotCount;
      cleanUpOngoing = false;
    }
  }, 1700);
};

class collisionClass1 {
  constructor(object_one, object_tow) {
    this.object_one = object_one;
    this.object_tow = object_tow;
  }
  checkCollision1() {
    return (
      this.object_one.left < this.object_tow.left + this.object_tow.width &&
      this.object_one.left + this.object_one.width > this.object_tow.left &&
      this.object_one.top < this.object_tow.top + this.object_tow.height &&
      this.object_one.top + this.object_one.height > this.object_tow.top
    );
  }
}

var lastIndex = 1;
var cleanUpOngoing = false;

var shotCount = 0;

const enemieShot = function () {
  if (!cleanUpOngoing) {
    var number = Math.floor(Math.random() * 4);
    setTimeout(() => {
      enemieShot();
      shotCount++;
      if (!rip) {
        addEnemie(shotCount);
      }
    }, (number + 1) * 1000);
  }
};

enemieShot(1);

var loaded = false;

if (!loaded) {
  pause();
  loaded = true;
}

function finalNextTry() {
  window.location.reload();

  enemieShot(1);
}
var health = 60;
function hitEnemie() {
  var enemie = document.getElementById("enemieMinionRebound");
  enemie.classList.add("visible", "attackBoss");
  setTimeout(() => {
    enemie.classList.remove("visible", "attackBoss");
    console.log(health);
    health = health - 30;
    document.getElementById("healtBarBoss").style.width = health + "%";
    if (health == 0) {
      document.getElementById("WinScreen").classList.add("visible");
      rip = true;
      shieldActive = true;
    }
  }, 2000);
}
