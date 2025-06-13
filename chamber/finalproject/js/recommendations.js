// recommendations.js

document.addEventListener("DOMContentLoaded", () => {
  const recommendationsList = document.getElementById("recommendation-list");

  // JSON data (you could load it from a separate file instead)
  const recommendedBooks = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Classic",
      description: "A gripping, heart-wrenching tale of racial injustice and childhood in the Deep South.",
      cover: "images/tokillamockingbird.jpg"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      description: "A chilling prophecy about the future and the dangers of totalitarianism.",
      cover: "images/1984.jpg"
    },
    {
      id: 3,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      description: "A classic novel about love and misunderstanding in 19th-century England.",
      cover: "images/prideandprejudice.jpg"
    },
    {
      id: 4,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      description: "A story of lost love and the American Dream in the Jazz Age.",
      cover: "images/greatgatsby.jpg"
    },
    {
      id: 5,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy",
      description: "A young boy discovers he is a wizard and begins his magical journey at Hogwarts.",
      cover: "images/harrypotter1.jpg"
    },
    {
      id: 6,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      description: "Bilbo Baggins embarks on an unexpected journey through Middle-earth.",
      cover: "images/thehobbit.jpg"
    },
    {
      id: 7,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      genre: "Dystopian",
      description: "Katniss Everdeen fights for survival in a televised battle for life.",
      cover: "images/hungergames.jpg"
    },
    {
      id: 8,
      title: "The Fault in Our Stars",
      author: "John Green",
      genre: "Young Adult",
      description: "Two teens with cancer find love while facing life’s harsh realities.",
      cover: "images/faultinourstars.jpg"
    },
    {
      id: 9,
      title: "Dune",
      author: "Frank Herbert",
      genre: "Science Fiction",
      description: "A boy becomes a messianic figure in a desert planet's epic battle for survival.",
      cover: "images/dune.jpg"
    },
    {
      id: 10,
      title: "Little Women",
      author: "Louisa May Alcott",
      genre: "Classic",
      description: "Four sisters grow up during the Civil War with dreams, hardships, and love.",
      cover: "images/littlewomen.jpg"
    },
    {
      id: 11,
      title: "The Book Thief",
      author: "Markus Zusak",
      genre: "Historical Fiction",
      description: "A young girl finds solace in books during the horrors of Nazi Germany.",
      cover: "images/bookthief.jpg"
    },
    {
      id: 12,
      title: "Percy Jackson: The Lightning Thief",
      author: "Rick Riordan",
      genre: "Fantasy",
      description: "A teen discovers he’s the son of Poseidon and must retrieve Zeus’s stolen lightning bolt.",
      cover: "images/percyjackson.jpg"
    },
    {
      id: 13,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Adventure",
      description: "A shepherd travels in search of treasure, finding his destiny instead.",
      cover: "images/thealchemist.jpg"
    },
    {
      id: 14,
      title: "Anne of Green Gables",
      author: "L.M. Montgomery",
      genre: "Classic",
      description: "A spirited red-haired orphan finds a home and herself in Avonlea.",
      cover: "images/anneofgreengables.jpg"
    },
    {
      id: 15,
      title: "The Giver",
      author: "Lois Lowry",
      genre: "Science Fiction",
      description: "A boy discovers the hidden truths of a seemingly perfect society.",
      cover: "images/thegiver.jpg"
    }
  ];

  // Clear loading message
  recommendationsList.innerHTML = "";

  recommendedBooks.forEach(book => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    card.innerHTML = `
      <img src="${book.cover}" alt="${book.title} cover">
      <div class="book-info">
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <p>${book.description}</p>
      </div>
    `;

    recommendationsList.appendChild(card);
  });
});
