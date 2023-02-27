const primaryAnim = primary.getAnimations()[0];
const secondaryAnim = secondary.getAnimations()[0];
const charAnim = character.getAnimations()[0];
const char = document.getElementById("character");
const enemieAnim = document.getElementById("enemie");

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
