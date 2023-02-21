var jumping = false;

document.addEventListener(
  "keydown",
  (event) => {
    console.log("junp");
    var code = event.code;
    if (code === "KeyW" && !jumping) {
      jump();
    }
  },
  false
);

function jump() {
  jumping = true;
  var elem = document.getElementById("character-wrapper");
  elem.classList.add("jump");
  setTimeout(() => {
    elem.classList.remove("jump");
    setTimeout(() => {
      jumping = false;
    }, 500);
  }, 500);
}
