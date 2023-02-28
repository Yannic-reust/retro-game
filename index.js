const clouds1Anim = clouds1.getAnimations()[0];
const clouds2Anim = clouds2.getAnimations()[0];
const background1Anim = background1.getAnimations()[0];
const background2Anim = background2.getAnimations()[0];
const ground1Anim = ground1.getAnimations()[0];
const ground2Anim = ground2.getAnimations()[0];

const charAnim = character.getAnimations()[0];
const char = document.getElementById("character");
const infoGuyAnim = document.getElementById("infoGuy");

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
      }, 250);
    }, 250);
  }
}
