document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("bookModal");
  const closeModal = document.getElementById("modalClose");

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("show");
  });

  // Sample book data (replace or fetch externally)
  const books = [
    {
      id: "book1",
      title: "Sample Book",
      author: "John Doe",
      genre: "Mystery",
      summary: "This is a sample book summary.",
      progress: "50%",
    },
    // Add more books here
  ];

  // Handle read-more modal logic
  document.body.addEventListener("click", function (e) {
    if (e.target.classList.contains("read-more-btn")) {
      const bookId = e.target.getAttribute("data-id");
      const book = books.find((b) => b.id === bookId);
      if (book) {
        document.getElementById("modalTitle").textContent = book.title;
        document.getElementById("modalAuthor").textContent = book.author;
        document.getElementById("modalGenre").textContent = book.genre;
        document.getElementById("modalSummary").textContent = book.summary;
        document.getElementById("modalProgress").textContent = book.progress;
        modal.style.display = "block";
      }
    }
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
