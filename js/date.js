document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.querySelector("#year");
    const lastModifiedSpan = document.querySelector("#lastModified");

    // Dynamically update the year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Dynamically update last modified date
    lastModifiedSpan.textContent = document.lastModified;
});