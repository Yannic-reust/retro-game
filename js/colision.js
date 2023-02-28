function checkColison() {
  var object_1 = infoGuyAnim.getBoundingClientRect();
  var object_2 = char.getBoundingClientRect();
  if (
    object_1.left < object_2.left + object_2.width &&
    object_1.left + object_1.width > object_2.left &&
    object_1.top < object_2.top + object_2.height &&
    object_1.top + object_1.height > object_2.top
  ) {
    //rect.classList.add("collide");
    console.log("colide");
    document.getElementById("infoText").classList.add("visible");
    pause(600);
  } else {
    //rect.classList.remove("collide");
  }
}
