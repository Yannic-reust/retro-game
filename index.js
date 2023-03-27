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
    document
      .getElementById("character-text-wrapper")
      .classList.remove("visible");
    //first robot explosions
    setTimeout(() => {
      document.getElementById("explosion1").classList.add("visible");
      setTimeout(() => {
        document.getElementById("explosion1").classList.remove("visible");
      }, 1000);
    }, 1250);

    setTimeout(() => {
      document.getElementById("explosion2").classList.add("visible");
      setTimeout(() => {
        document.getElementById("explosion2").classList.remove("visible");
      }, 750);
    }, 2600);
    //second robot explosions
    setTimeout(() => {
      document.getElementById("explosion3").classList.add("visible");
      setTimeout(() => {
        document.getElementById("explosion3").classList.remove("visible");
      }, 750);
    }, 850);

    setTimeout(() => {
      document.getElementById("explosion4").classList.add("visible");
      setTimeout(() => {
        document.getElementById("explosion4").classList.remove("visible");
      }, 750);
    }, 2000);
    setTimeout(() => {
      document.getElementById("explosion5").classList.add("visible");
      setTimeout(() => {
        document.getElementById("explosion5").classList.remove("visible");
      }, 1000);
    }, 2800);
  }, 8000);

  setTimeout(() => {
    document.getElementById("intro").classList.add("visible");

    nextStep();
  }, 13000);
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
    document
      .getElementById("character-wrapper-1")
      .classList.add("second-animation-character");
    document.getElementById("character-sc1").classList.remove("character-turn");
    document.getElementById("character-sc1").classList.add("character-sc1");
    setTimeout(() => {
      document.getElementById("fs").classList.add("darken");
      setTimeout(() => {
        location.href = "level2.html";
      }, 3000);
    }, 4000);
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



class collisionClass {
  constructor(object_one, object_tow) {
    this.object_one = object_one;
    this.object_tow = object_tow;
  }
  checkCollision() {
    return (
      this.object_one.left < this.object_tow.left + this.object_tow.width &&
      this.object_one.left + this.object_one.width > this.object_tow.left &&
      this.object_one.top < this.object_tow.top + this.object_tow.height &&
      this.object_one.top + this.object_one.height > this.object_tow.top
    );
  }
}