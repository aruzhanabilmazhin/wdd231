document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("bookModal");
  const closeModal = document.getElementById("modalClose");

  // Sample book data lookup (you’d replace with your own data or fetch from JSON)
  const books = [
    {
      id: "book1",
      title: "Sample Book",
      author: "John Doe",
      genre: "Mystery",
      summary: "This is a sample book summary.",
      progress: "50%",
    },
    // Add more books here or fetch them from books.json
  ];

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

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
