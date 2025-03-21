// Home Page JavaScript

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Set last modified date in footer
document.getElementById("last-modified").textContent = document.lastModified;

// Mobile menu toggle
document.getElementById("menu-button").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("show");
});

// Fetch and display weather data
const weatherApiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=San%20Miguel,SV&units=imperial&appid=YOUR_API_KEY";

fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => {
        const weatherSection = document.getElementById("weather");
        const today = data.list[0];
        const description = today.weather.map(w => w.description).join(", ");
        
        weatherSection.innerHTML = `
            <h2>Weather</h2>
            <p>Temperature: ${Math.round(today.main.temp)}&deg;F</p>
            <p>Condition: ${description.replace(/\b\w/g, c => c.toUpperCase())}</p>
        `;
    })
    .catch(error => console.error("Error fetching weather data:", error));

// Fetch and display spotlight members
fetch("data/members.json")
    .then(response => response.json())
    .then(members => {
        const spotlightSection = document.getElementById("spotlights");
        const eligibleMembers = members.filter(m => m.membershipLevel === "Gold" || m.membershipLevel === "Silver");
        const selectedMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 3);
        
        spotlightSection.innerHTML = selectedMembers.map(member => `
            <div class="spotlight">
                <img src="${member.logo}" alt="${member.name} Logo">
                <h3>${member.name}</h3>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
            </div>
        `).join("");
    })
    .catch(error => console.error("Error fetching spotlight members:", error));
