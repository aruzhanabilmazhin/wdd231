document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent traditional form submission

    // Generate timestamp
    const timestamp = new Date().toLocaleString();
    document.getElementById("timestamp").value = timestamp;

    // Gather values
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Basic validation (optional enhancement)
    if (!name || !email) {
      alert("Please fill in required fields.");
      return;
    }

    // Create confirmation HTML
    confirmation.classList.remove("hidden");
    confirmation.innerHTML = `
      <h2>Thank you, ${name}!</h2>
      <p>Your message was received on <strong>${timestamp}</strong>.</p>
      <p><strong>Email:</strong> ${email}</p>
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
    `;

    // Reset form (optional)
    form.reset();
  });
});
