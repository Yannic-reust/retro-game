var loading = false;

var playerSrc = "./assets/player_sprite.png";
var clouds = "";

function selectPlayer(e) {
  playerSrc = e.value;
  localStorage.playerSrc = playerSrc;
}

function ApiCall(e) {
  document.getElementById("loadingSpinner").style.visibility = "visible";
  loading = true;

  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.weatherapi.com/v1/current.json?key=3148bcd838a94d16bfa114522231306&q=${e.value}&aqi=no`,
    false
  );
  xhr.send();
  const res = JSON.parse(xhr.response).current.condition.text;

  if (res === "Sunny") {
    document.getElementById("cloudPreview").src = "";
    document.getElementById("textPreview").innerHTML = "sunny";
    document.getElementById("cloudPreview").style.visibility = "hidden";

    clouds = "";
  } else if (res === "Clear") {
    document.getElementById("cloudPreview").src = "";
    document.getElementById("textPreview").innerHTML = "clear";
    document.getElementById("cloudPreview").style.visibility = "hidden";

    clouds = "";
  } else if (res === "Overcast" || res === "Partly cloudy") {
    document.getElementById("cloudPreview").src =
      "../assets/level2/cloud_preview.png";
    document.getElementById("textPreview").innerHTML = "Overcast";
    document.getElementById("cloudPreview").style.visibility = "visible";

    clouds = "../assets/level2/cloud_preview.png";
  } else if (res.includes("rain")) {
    document.getElementById("cloudPreview").src =
      "../assets/level2/cloud_preview_2.png";
    document.getElementById("textPreview").innerHTML = "Rain";
    document.getElementById("cloudPreview").style.visibility = "visible";

    clouds = "../assets/level2/cloud_preview_2.png";
  } else {
    console.log(res);
  }
  localStorage.clouds = clouds;
  document.getElementById("loadingSpinner").style.visibility = "hidden";
}
