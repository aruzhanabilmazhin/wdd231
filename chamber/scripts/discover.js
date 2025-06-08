// discover.js

document.addEventListener("DOMContentLoaded", () => {
  updateVisitMessage();
  fetchDataAndDisplayCards();
  document.getElementById("year").textContent = new Date().getFullYear();
});

function updateVisitMessage() {
  const messageEl = document.getElementById("visit-message");
  const today = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");

  let message = "Welcome! Let us know if you have any questions.";
  if (lastVisit) {
    const msInDay = 1000 * 60 * 60 * 24;
    const daysAgo = Math.floor((today - lastVisit) / msInDay);

    if (daysAgo === 0) {
      message = "Back so soon! Awesome!";
    } else if (daysAgo === 1) {
      message = "You last visited 1 day ago.";
    } else {
      message = `You last visited ${daysAgo} days ago.`;
    }
  }

  messageEl.textContent = message;
  localStorage.setItem("lastVisit", today);
}

function fetchDataAndDisplayCards() {
  fetch("data/discover.json")
    .then((res) => res.json())
    .then((data) => {
      const grid = document.querySelector(".grid-container");
      data.forEach((place, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.gridArea = `card${index + 1}`;

        card.innerHTML = `
          <h2>${place.title}</h2>
          <figure>
            <img src="${place.image}" alt="${place.title}" loading="lazy" width="320" height="213" />
          </figure>
          <p><strong>Address:</strong> ${place.address}</p>
          <p>${place.description}</p>
          <button onclick="alert('Thank you for your interest in ${place.title}!')">More Info</button>
        `;

        grid.appendChild(card);
      });
    })
    .catch((error) => console.error("Error loading JSON data:", error));
}
