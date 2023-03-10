/* first scene */

/* second scene */

function checkColisonGuy() {
  var object_1 = infoGuyAnim.getBoundingClientRect();
  var object_2 = char.getBoundingClientRect();
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
const box3 = document.getElementById("hitBoxGround3");
const box4 = document.getElementById("hitBoxGround4");

function colisionHole() {
  var object_1 = char.getBoundingClientRect();

  var object_2 = box1.getBoundingClientRect();
  var object_3 = box2.getBoundingClientRect();
  var object_4 = box3.getBoundingClientRect();
  var object_5 = box4.getBoundingClientRect();

  if (
    object_1.left < object_2.left + object_2.width &&
    object_1.left + object_1.width > object_2.left &&
    object_1.top < object_2.top + object_2.height &&
    object_1.top + object_1.height > object_2.top
  ) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
  if (
    object_1.left < object_3.left + object_3.width &&
    object_1.left + object_1.width > object_3.left &&
    object_1.top < object_3.top + object_3.height &&
    object_1.top + object_1.height > object_3.top
  ) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
  if (
    object_1.left < object_4.left + object_4.width &&
    object_1.left + object_1.width > object_4.left &&
    object_1.top < object_4.top + object_4.height &&
    object_1.top + object_1.height > object_4.top
  ) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
  if (
    object_1.left < object_5.left + object_5.width &&
    object_1.left + object_1.width > object_5.left &&
    object_1.top < object_5.top + object_5.height &&
    object_1.top + object_1.height > object_5.top
  ) {
    document.getElementById("deadWrapper").classList.add("visible");
    enableKeyboard = false;
    pause();
  }
}
