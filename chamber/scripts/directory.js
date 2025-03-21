document.addEventListener("DOMContentLoaded", () => {
    const membersSection = document.getElementById("members");
    const toggleButton = document.getElementById("toggle-view");

    let isGridView = true;

    // Fetch business directory data
    async function fetchMembers() {
        try {
            const response = await fetch("data/businesses.json"); // Updated path to JSON file
            const members = await response.json();
            sessionStorage.setItem("members", JSON.stringify(members)); // Store for toggling
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Display businesses in either Grid or List view
    function displayMembers(members) {
        membersSection.innerHTML = ""; // Clear previous content
        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card", isGridView ? "grid-view" : "list-view");

            // Add membership class for styling
            if (member.membership) {
                memberCard.classList.add(member.membership.toLowerCase());
            }

            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}" class="member-img">
                <div class="member-info">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                    <span class="membership-level">${member.membership} Member</span>
                </div>
            `;

            membersSection.appendChild(memberCard);
        });
    }

    // Toggle between Grid and List view
    toggleButton.addEventListener("click", () => {
        isGridView = !isGridView;
        toggleButton.textContent = isGridView ? "Switch to List View" : "Switch to Grid View";
        displayMembers(JSON.parse(sessionStorage.getItem("members"))); // Reload data
    });

    fetchMembers();
});
