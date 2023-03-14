/* general */

const char = document.getElementById("character");

/* first scene */

const intro = document.getElementById("intro");

triggerAnimations();

function triggerAnimations() {
  //character start walk
  document
    .getElementById("character-wrapper-1")
    .classList.add("first-animation-character");
  setTimeout(() => {
    document.getElementById("character-sc1").classList.add("character-sc1");
  }, 1000);

  //character turn
  setTimeout(() => {
    document.getElementById("character-sc1").classList.remove("character-sc1");
    document.getElementById("character-sc1").classList.add("character-turn");
    console.log("second animation");
  }, 4000);
}

var step = 1;
var txt = null;
function nextStep() {
  if (step == 1) {
    txt = "The World has been tacken over by the Robots";
    typeWriter();
    step++;
  } else if (step == 2) {
    document.getElementById("introText").innerHTML = "";
    txt = "They are going to destory humanity";
    i = 0;
    typeWriter();
    step++;
  } else if (step == 3) {
    document.getElementById("introText").innerHTML = "";
    txt = "Third Text";
    i = 0;
    typeWriter();
    step++;
  } else {
    intro.classList.add("hidden");
    //To Do --> trigger walk out
  }
}

var speed = 50;
var i = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("introText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/* second scene */

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
        colisionHole();
      }, 250);
    }, 250);
  }
}

function nextTry() {
  resetGame();
  document.getElementById("deadWrapper").classList.remove("visible");
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
