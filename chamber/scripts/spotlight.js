document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("data/members.json");
        const members = await response.json();

        // Filter Gold & Silver members
        const spotlightMembers = members.filter(m => m.membership === "Gold" || m.membership === "Silver");

        // Randomly select 2-3 members
        const shuffled = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

        const spotlightContainer = document.getElementById("spotlight-container");
        spotlightContainer.innerHTML = "";

        shuffled.forEach(member => {
            const card = document.createElement("div");
            card.classList.add("spotlight-card");
            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" width="100">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p><strong>${member.membership} Member</strong></p>
            `;
            spotlightContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Spotlight data fetch error:", error);
    }
});
