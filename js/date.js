document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.querySelector("#year");
    const lastModifiedSpan = document.querySelector("#lastModified");

    // Ensure elements exist before modifying them
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedSpan) {
        // Format the last modified date for better readability
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
