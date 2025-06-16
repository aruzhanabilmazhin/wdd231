document.addEventListener('DOMContentLoaded', () => {
  const trackerForm = document.getElementById('tracker-form');
  const trackerEntries = document.getElementById('tracker-entries');

  // Load existing entries from localStorage
  const loadEntries = () => {
    const entries = JSON.parse(localStorage.getItem('readingTracker')) || [];
    trackerEntries.innerHTML = '';
    entries.forEach((entry, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${entry.title}</strong> - ${entry.progress}% 
        <progress value="${entry.progress}" max="100"></progress>
        <button class="delete" data-index="${index}">Delete</button>
      `;
      trackerEntries.appendChild(li);
    });
  };

  // Save entry to localStorage
  const saveEntry = (title, progress) => {
    const entries = JSON.parse(localStorage.getItem('readingTracker')) || [];
    entries.push({ title, progress });
    localStorage.setItem('readingTracker', JSON.stringify(entries));
    loadEntries();
  };

  // Delete entry by index
  trackerEntries.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      const index = e.target.getAttribute('data-index');
      const entries = JSON.parse(localStorage.getItem('readingTracker')) || [];
      entries.splice(index, 1);
      localStorage.setItem('readingTracker', JSON.stringify(entries));
      loadEntries();
    }
  });

  // Form submission
  trackerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('book-title').value.trim();
    const progress = parseInt(document.getElementById('progress').value);
    if (title && !isNaN(progress) && progress >= 0 && progress <= 100) {
      saveEntry(title, progress);
      trackerForm.reset();
    }
  });

  loadEntries(); // Initial load
});
