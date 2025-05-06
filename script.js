const publications = [
  { title: 'Efficient Zero-Knowledge Proofs', link: '#' },
  { title: 'Secure Multi-Party Computation at Scale', link: '#' },
  { title: 'Post-Quantum Cryptography: A Survey', link: '#' }
];
const reviews = [
  { venue: 'CRYPTO Conference', year: 2024 },
  { venue: 'EUROCRYPT', year: 2023 },
  { venue: 'IEEE S&P', year: 2022 }
];

// Populate lists on load
document.addEventListener('DOMContentLoaded', () => {
  const pubList = document.getElementById('pub-list');
  publications.forEach(pub => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${pub.link}">${pub.title}</a>`;
    pubList.appendChild(li);
  });

  const reviewList = document.getElementById('review-list');
  reviews.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `Reviewer for ${r.venue} (${r.year})`;
    reviewList.appendChild(li);
  });
});
