/* general */
const clouds1Anim = clouds1.getAnimations()[0];
const clouds2Anim = clouds2.getAnimations()[0];
const background1Anim = background1.getAnimations()[0];
const background2Anim = background2.getAnimations()[0];
const ground1Anim = ground1.getAnimations()[0];
const ground2Anim = ground2.getAnimations()[0];
const infoGuyBoxAnim = infoGuyBox.getAnimations()[0];

const charAnim = character.getAnimations()[0];
const char = document.getElementById("character");
const infoGuyAnim = document.getElementById("infoGuy");

/* first scene */

const intro = document.getElementById("intro");

document.getElementById("character-wrapper2").classList.add("walk-sc-1");
console.log("asd");

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
    var elem = document.getElementById("character-wrapper");
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
