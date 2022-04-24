const API_KEY = "fa80ddf50e9a211f6214274bb3bfdf6a"



function onGeoOk(postion) {
  const lat = postion.coords.latitude;
  const lon = postion.coords.longitude;
  console.log("You live in", lat, lon)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const city = document.querySelector("#weather span:first-child")
      const weather = document.querySelector("#weather span:last-child")
      city.textContent = `${data.sys.country} / ${data.name}`;
      weather.textContent = `${data.weather[0].main} / ${data.main.temp}`
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

