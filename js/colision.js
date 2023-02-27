function checkColison() {
  var object_1 = enemieAnim.getBoundingClientRect();
  var object_2 = char.getBoundingClientRect();
  if (
    object_1.left < object_2.left + object_2.width &&
    object_1.left + object_1.width > object_2.left &&
    object_1.top < object_2.top + object_2.height &&
    object_1.top + object_1.height > object_2.top
  ) {
    //rect.classList.add("collide");
    console.log("colide");
  } else {
    //rect.classList.remove("collide");
  }
}
