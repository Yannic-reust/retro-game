var loading = false;


var colors = {
  playerSrc: "./assets/player_sprite.png",
  clouds: ""
};





function selectPlayer(e){
  console.log(e.value)
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
    document.getElementById("cloudPreview").src = '';
    document.getElementById("textPreview").innerHTML = "sunny"
    document.getElementById("cloudPreview").style.visibility = "hidden";
    console.log("sunny");
  }else if (res === "Clear") {
    document.getElementById("cloudPreview").src = '';
    document.getElementById("textPreview").innerHTML = "clear"
    document.getElementById("cloudPreview").style.visibility = "hidden";
    console.log("clear");
  } 
  
  else if (res === "Overcast" || res === "Partly cloudy") {
    document.getElementById("cloudPreview").src = '../assets/level2/cloud_preview.png';
    document.getElementById("textPreview").innerHTML = "Overcast"
    document.getElementById("cloudPreview").style.visibility = "visible";
    console.log("overcast");
  }
  else if (res === "Rain") {
    document.getElementById("cloudPreview").src = '../assets/level2/cloud_preview_2.png';
    document.getElementById("textPreview").innerHTML = "Rain"
    document.getElementById("cloudPreview").style.visibility = "visible";
    console.log("rain");
  }
  
  else{
    console.log(res);
  }
  document.getElementById("loadingSpinner").style.visibility = "hidden";
}
