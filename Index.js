function searchWeather() {
    const apiKey = "9b04d704c4243cb03cc20b8650801502";
    const searchInput = document.getElementById("searchInput").value;

    if (searchInput === "") {
        alert("Please enter a country.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('An error occurred. Please try again.');
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = "";

    const cityName = data.name;
    const country = data.sys.country;
    const temperature = Math.round(data.main.temp - 273.15); 

    const weatherDescription = data.weather[0].description;
    const iconCode = data.weather[0].icon;

    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    const weatherCard = document.createElement("div");
    weatherCard.className = "weather-card";
    weatherCard.innerHTML = `
        <h2>${cityName}, ${country}</h2>
        <p>${temperature}°C</p>
        <p>${weatherDescription}</p>
        <img src="${iconUrl}" alt="${weatherDescription}">
    `;

    weatherInfo.appendChild(weatherCard);
}




// slideshow from 3wschools
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}