async function loadSpotlights() {
    try {
      const res = await fetch('data/members.json');
      const data = await res.json();
      const members = data.members;
  
      const goldSilver = members.filter(m => m.membership === 'Gold' || m.membership === 'Silver');
      const selected = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);
  
      const container = document.getElementById('spotlight-container');
      container.innerHTML = '';
  
      selected.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('spotlight-card');
        card.innerHTML = `
          <img src="${member.logo}" alt="${member.name} logo">
          <h3>${member.name}</h3>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><a href="${member.website}" target="_blank">Visit Website</a></p>
          <p><strong>Membership:</strong> ${member.membership}</p>
        `;
        container.appendChild(card);
      });
    } catch (err) {
      console.error('Spotlight fetch error:', err);
    }
  }
  
  loadSpotlights();
  