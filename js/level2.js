const clouds1Anim = clouds1.getAnimations()[0];
const clouds2Anim = clouds2.getAnimations()[0];
const background1Anim = background1.getAnimations()[0];
const background2Anim = background2.getAnimations()[0];
const ground1Anim = ground1.getAnimations()[0];
const ground2Anim = ground2.getAnimations()[0];
const infoGuyBoxAnim = infoGuyBox.getAnimations()[0];

const char = document.getElementById("character");
const infoGuyAnim = document.getElementById("infoGuy");

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
