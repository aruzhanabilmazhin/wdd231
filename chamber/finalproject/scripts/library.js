

document.addEventListener("DOMContentLoaded", () => {
  const libraryList = document.getElementById("library-list");

  fetch("data/books.json") // <-- Adjust path if needed
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      libraryList.innerHTML = ""; // Clear loading text

      if (!Array.isArray(data) || data.length === 0) {
        libraryList.innerHTML = "<p>No books available.</p>";
        return;
      }

      data.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.className = "book-card";

        bookCard.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <p><strong>Status:</strong> ${book.status}</p>
          <p>${book.description}</p>
        `;

        libraryList.appendChild(bookCard);
      });
    })
    .catch(error => {
      console.error("Error loading books:", error.message);
      libraryList.innerHTML = `<p class="error">📕 Failed to load books. Please try again later.</p>`;
    });
});
