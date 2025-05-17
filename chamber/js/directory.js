const membersContainer = document.getElementById('membersContainer');
const gridViewBtn = document.getElementById('gridViewBtn');
const listViewBtn = document.getElementById('listViewBtn');

async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Network response was not ok');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    membersContainer.innerHTML = `<p class="error">Failed to load members data.</p>`;
    console.error('Fetch error:', error);
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('article');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" />
      <h3>${member.name}</h3>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> <a href="tel:${member.phone.replace(/[^\d]/g,'')}">${member.phone}</a></p>
      <p><strong>Website:</strong> <a href="${member.website}" target="_blank" rel="noopener">${member.website}</a></p>
      <p>${member.description}</p>
      <p><strong>Membership Level:</strong> ${getMembershipLevelName(member.membership)}</p>
    `;

    membersContainer.appendChild(card);
  });
}

function getMembershipLevelName(level) {
  switch (level) {
    case 1: return 'Member';
    case 2: return 'Silver';
    case 3: return 'Gold';
    default: return 'Member';
  }
}

function setView(view) {
  if (view === 'grid') {
    membersContainer.classList.add('grid-view');
    membersContainer.classList.remove('list-view');
    gridViewBtn.setAttribute('aria-pressed', 'true');
    listViewBtn.setAttribute('aria-pressed', 'false');
  } else {
    membersContainer.classList.add('list-view');
    membersContainer.classList.remove('grid-view');
    gridViewBtn.setAttribute('aria-pressed', 'false');
    listViewBtn.setAttribute('aria-pressed', 'true');
  }
}

gridViewBtn.addEventListener('click', () => setView('grid'));
listViewBtn.addEventListener('click', () => setView('list'));

// Initialize
fetchMembers();
setView('grid');

// Footer dates
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = new Date(document.lastModified).toLocaleDateString();
