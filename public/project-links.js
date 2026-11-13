(() => {
  const project = document.querySelector('.rail-visual.school');
  if (!project) return;

  project.href = 'https://ourteacherschool.vercel.app/';
  project.target = '_blank';
  project.rel = 'noopener noreferrer';
  project.removeAttribute('data-project');
  project.setAttribute('aria-label', 'Visit Our Teacher School (opens in a new tab)');
  project.querySelector('.visit').innerHTML = 'VISIT<br>WEBSITE';

  const card = project.closest('.rail-card');
  card.querySelector('p').textContent = 'Live school website with daily posts, video lessons, school history and teacher profiles.';

  // The portfolio dialog listener is registered earlier; capture the click so this
  // live project opens its deployed site instead.
  project.addEventListener('click', event => event.stopImmediatePropagation(), true);
})();
