var loading = false;

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
    console.log("sunny");
  } else if (res === "Overcast") {
    console.log("overcast");
  }
  document.getElementById("loadingSpinner").style.visibility = "hidden";
}
