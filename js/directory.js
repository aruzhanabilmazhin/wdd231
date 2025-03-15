document.addEventListener("DOMContentLoaded", () => {
    const membersContainer = document.querySelector("#members-container");
    const toggleButton = document.querySelector("#toggle-view");
    const lastModified = document.querySelector("#last-modified");

    async function fetchMembers() {
        try {
            const response = await fetch("data/members.json");
            const data = await response.json();
            displayMembers(data, "grid");
        } catch (error) {
            console.error("Error loading members:", error);
        }
    }

    function displayMembers(members, view) {
        membersContainer.innerHTML = "";
        members.forEach(member => {
            const memberElement = document.createElement("div");
            memberElement.classList.add("member", view);

            memberElement.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Visit Website</a>
                <p class="membership-level">Level: ${member.membership}</p>
            `;

            membersContainer.appendChild(memberElement);
        });
    }

    toggleButton.addEventListener("click", () => {
        const currentView = membersContainer.classList.contains("grid") ? "list" : "grid";
        membersContainer.classList.toggle("grid");
        membersContainer.classList.toggle("list");
        displayMembers(members, currentView);
    });

    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    fetchMembers();
});
