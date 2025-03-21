document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
    
    const membersSection = document.getElementById("members");
    const toggleButton = document.getElementById("toggle-view");

    let isGridView = true;

    // Fetch business directory data
    async function fetchMembers() {
        try {
            const response = await fetch("data/businesses.json");
            const members = await response.json();
            sessionStorage.setItem("members", JSON.stringify(members));
            displayMembers(members);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    // Display businesses in Grid or List view
    function displayMembers(members) {
        membersSection.innerHTML = "";
        members.forEach(member => {
            const memberCard = document.createElement("div");
            memberCard.classList.add("member-card", isGridView ? "grid-view" : "list-view");

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
        displayMembers(JSON.parse(sessionStorage.getItem("members")));
    });

    fetchMembers();

    document.getElementById("menu-button").addEventListener("click", function() {
        document.getElementById("menu").classList.toggle("show");
    });
});
