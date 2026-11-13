(() => {
  const portrait = document.querySelector('.portrait');
  const primaryPhoto = portrait?.querySelector('.profile-photo');
  if (!portrait || !primaryPhoto) return;

  const hoverPhoto = document.createElement('img');
  hoverPhoto.className = 'profile-hover-photo';
  hoverPhoto.src = 'images/chorn-angkor-hover.png';
  hoverPhoto.alt = '';
  hoverPhoto.setAttribute('aria-hidden', 'true');
  portrait.insertBefore(hoverPhoto, primaryPhoto.nextSibling);
})();
