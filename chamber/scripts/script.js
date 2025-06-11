// Open modal
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

// Close modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Close modal on outside click
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

// Insert timestamp
window.addEventListener("DOMContentLoaded", () => {
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        const now = new Date().toISOString();
        timestampInput.value = now;
    }
});
