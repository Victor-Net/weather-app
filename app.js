// 23nov2023wed 2030

const KEY = "20b2bc6927e5a547db8963151d2dffb0";

const btn = document.querySelector(".search-btn");

btn.addEventListener("click", function temp() {
  console.log("searching");

  const city = document.getElementById("search").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
  console.log(city);

  // if (city.length == 0) {
  //   return;
  // }

  fetch(url)
    .then((res) => res.json())
    // .then((data) => console.log(data));
    .then((data) => showWeather(data));

  showCard();
});

function showCard() {
  const cardEl = document.getElementById("card");
  cardEl.innerHTML = `<div class="location">
          <p class="time"></p>
          <h1 id="city" class="md-auto"></h1>
          <h4><span id="temp"></span>&deg;C</h4>
          <h5>weather: <span id="weather"></span></h5>
          <h5>sunrise: <span id="sunrise"></span></h5>
          <h5>sunset: <span id="sunset"></span></h5>
        </div>`;
  const timeEl = document.querySelector(".time");
  timeEl.innerText = new Date().toDateString();
}

function innerTxt(a, b) {
  console.log(a, b);
  document.getElementById(a).innerText = b;
}
function showWeather(e) {
  console.log(e);
  // sunrise
  // let unixRise = e.sys.sunrise;
  // unixRise = new Date(unixRise * 1000);
  // let sunrise = unixRise.toLocaleTimeString("en-US", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // });
  // console.log(sunrise);
  // ******

  // susnet
  // let unixSet = e.sys.sunset;
  // unixSet = new Date(unixSet * 1000);
  // let sunset = unixSet.toLocaleTimeString("en-US", {
  //   hour: "2-digit",
  //   minute: "2-digit",
  //   second: "2-digit",
  // });
  // console.log(sunset);
  // *****

  innerTxt("city", e.name);
  innerTxt("temp", Math.floor(e.main.temp - 273.15));
  // console.log(temp);
  innerTxt("weather", e.weather[0].description);

  // api time format is unix
  innerTxt(
    "sunrise",
    new Date(e.sys.sunrise * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
  innerTxt(
    "sunset",
    new Date(e.sys.sunset * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  );
}

// K − 273.15 = °C
// C = 5/9(F - 32)
// 9/5C = F - 32

