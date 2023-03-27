
const char2 = document.getElementById("charactersc2");

function checkColisonGuy() {
  var object_1 = infoGuyAnim.getBoundingClientRect();
  var object_2 = char2.getBoundingClientRect();
  if (
    object_1.left < object_2.left + object_2.width &&
    object_1.left + object_1.width > object_2.left &&
    object_1.top < object_2.top + object_2.height &&
    object_1.top + object_1.height > object_2.top
  ) {
    document.getElementById("infoText").classList.add("visible");
    setTimeout(() => {
      document.getElementById("infoGuyBox").classList.add("hidden");
    }, 8000);
  }
}

const box1 = document.getElementById("hitBoxGround1");
const box2 = document.getElementById("hitBoxGround2");
const box4 = document.getElementById("hitBoxGround4");

const enemieGround1 = document.getElementById("enemieGround1");
const enemieGround2 = document.getElementById("enemieGround2");
const enemieGround3 = document.getElementById("enemieGround3");

var object_one;
var object_tow;


function collisionHole() {
  var object_1 = char2.getBoundingClientRect();

  var object_2 = box1.getBoundingClientRect();
  var object_3 = box2.getBoundingClientRect();
  var object_4 = box4.getBoundingClientRect();

  var object_5 = enemieGround1.getBoundingClientRect();
  var object_6 = enemieGround2.getBoundingClientRect();
  var object_7 = enemieGround3.getBoundingClientRect();

  if (new collisionClass(object_1, object_2).checkCollision()) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
  if (new collisionClass(object_1, object_3).checkCollision()) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }

  if (new collisionClass(object_1, object_4).checkCollision()) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
  if (new collisionClass(object_1, object_5).checkCollision()) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
  if (new collisionClass(object_1, object_6).checkCollision()) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
  if (new collisionClass(object_1, object_7).checkCollision()) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
}
