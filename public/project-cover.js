(() => {
  const card = document.querySelector('.rail-visual.school');
  if (!card) return;

  const cover = document.createElement('img');
  cover.className = 'project-cover';
  cover.src = 'images/our-teacher-school-cover.png';
  cover.alt = 'Our Teacher School website homepage';
  cover.loading = 'lazy';

  card.classList.add('has-cover');
  card.prepend(cover);
})();
