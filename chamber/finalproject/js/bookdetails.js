document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const bookTitleElement = document.getElementById("book-title");
  const bookAuthorElement = document.getElementById("book-author");
  const bookYearElement = document.getElementById("book-year");
  const bookNotesElement = document.getElementById("book-notes");
  const mainElement = document.querySelector("main");

  // Helper: Get URL query parameter
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  // Load and display book details
  function loadBookDetails() {
    const bookIndex = parseInt(getQueryParam("index"), 10);

    if (isNaN(bookIndex)) {
      mainElement.innerHTML = "<p>No book selected or invalid index.</p>";
      return;
    }

    const booksJSON = localStorage.getItem("libraryBooks");

    if (!booksJSON) {
      mainElement.innerHTML = "<p>No books found in local storage.</p>";
      return;
    }

    const books = JSON.parse(booksJSON);

    if (!Array.isArray(books) || !books[bookIndex]) {
      mainElement.innerHTML = "<p>Book not found.</p>";
      return;
    }

    const book = books[bookIndex];

    // Populate DOM with book details
    bookTitleElement.textContent = book.title || "Unknown Title";
    bookAuthorElement.textContent = book.author || "Unknown Author";
    bookYearElement.textContent = book.year || "Unknown Year";
    bookNotesElement.textContent = book.notes?.trim() || "No notes provided.";
  }

  loadBookDetails();
});
