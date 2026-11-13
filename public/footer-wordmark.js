(() => {
  document.querySelectorAll('.footer-wordmark > span').forEach(word => {
    const letters = [...word.textContent];
    word.replaceChildren(...letters.map(letter => {
      const character = document.createElement('span');
      character.className = 'footer-letter';
      character.textContent = letter;
      return character;
    }));
  });
})();
