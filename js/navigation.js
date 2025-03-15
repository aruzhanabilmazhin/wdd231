document.addEventListener("DOMContentLoaded", function () {
    // Menu Toggle Functionality
    const menuToggle = document.querySelector("#menu-toggle");
    const navMenu = document.querySelector("nav ul");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    // Footer Date Handling
    const yearSpan = document.querySelector("#year");
    const lastModifiedSpan = document.querySelector("#lastModified");

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedSpan) {
        // Format last modified date
        const lastModifiedDate = new Date(document.lastModified);
        const formattedDate = lastModifiedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });

        lastModifiedSpan.textContent = `Last Updated: ${formattedDate}`;
    }
});
