function checkColison() {
  //console.log("enemie y" + enemieAnim.getBoundingClientRect().y);
  //console.log("enemie x" + enemieAnim.getBoundingClientRect().x);
  console.log("char y" + char.getBoundingClientRect().y);
  console.log("char x" + char.getBoundingClientRect().x);

  if (enemieAnim.getBoundingClientRect().x == char.getBoundingClientRect().x) {
    console.log("asd");
  }
}
