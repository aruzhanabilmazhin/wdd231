const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const city = "Driggs,US";

async function getWeather() {
  try {
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentUrl),
      fetch(forecastUrl)
    ]);

    const current = await currentRes.json();
    const forecast = await forecastRes.json();

    document.getElementById('weather-temp').textContent = Math.round(current.main.temp);
    document.getElementById('weather-desc').textContent = current.weather[0].description;

    const daily = forecast.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
    const forecastList = document.getElementById('forecast-list');
    forecastList.innerHTML = '';

    daily.forEach(day => {
      const date = new Date(day.dt_txt);
      forecastList.innerHTML += `<li>${date.toLocaleDateString(undefined, { weekday: 'long' })}: ${Math.round(day.main.temp)}°C</li>`;
    });
  } catch (err) {
    console.error('Weather fetch error:', err);
  }
}

getWeather();
