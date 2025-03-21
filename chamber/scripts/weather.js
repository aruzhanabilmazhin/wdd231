document.addEventListener("DOMContentLoaded", async () => {
    const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";
    const city = "San Miguel, SV";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const temp = Math.round(data.list[0].main.temp);
        const description = data.list[0].weather.map(w => w.description).join(", ");

        document.getElementById("temperature").textContent = `Current Temp: ${temp}°F`;
        document.getElementById("description").textContent = `Conditions: ${description.charAt(0).toUpperCase() + description.slice(1)}`;

        let forecastText = "3-Day Forecast: ";
        for (let i = 1; i <= 3; i++) {
            let dayTemp = Math.round(data.list[i * 8].main.temp);
            forecastText += ` Day ${i}: ${dayTemp}°F `;
        }
        document.getElementById("forecast").textContent = forecastText;

    } catch (error) {
        console.error("Weather data fetch error:", error);
    }
});
