/* general */

const char = document.getElementById("character");
var speed = 50;
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
    document.getElementById("character-text-wrapper").classList.add("visible");
    txt = "The City looks realy good at night";
    textCharacter();
  }, 4000);
  setTimeout(() => {
    //enemie fly in
    document.getElementById("roboter1").classList.add("enemie-left");
    document.getElementById("roboter2").classList.add("enemie-right");
    document.getElementById("character-text-wrapper").classList.remove("visible");
    
    setTimeout(() => {
      console.log("explosion");
    }, 1250);

    setTimeout(() => {
      console.log("explosion");
    }, 2600);
  }, 8000);

  setTimeout(() => {

    document.getElementById("intro").classList.add("visible")
    
    nextStep()
   
  }, 12000);

}
var j = 0;
function textCharacter() {
  if (j < txt.length) {
    document.getElementById("character-text").innerHTML += txt.charAt(j);
    j++;
    setTimeout(textCharacter, speed);
  }
}

var step = 1;

function nextStep() {
  if (step == 1) {
    txt = "The World has been taken over by the Robots";
    typeWriter();
    step++;
  } else if (step == 2) {
    document.getElementById("introText").innerHTML = "";
    txt = "They are going to destroy humanity";
    i = 0;
    typeWriter();

    step++;
  } else if (step == 3) {
    document.getElementById("introText").innerHTML = "";
    txt = "You need to do something about it, but look out it is dangerous ";
    i = 0;
    typeWriter();
    step++;
  } else {
    intro.classList.add("hidden");
    document.getElementById("character-wrapper-1").classList.add("second-animation-character");
    document.getElementById("character-sc1").classList.remove("character-turn");
    document.getElementById("character-sc1").classList.add("character-sc1");
    
  }
}

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
