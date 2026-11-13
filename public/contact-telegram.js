(() => {
  const form = document.getElementById('inquiry');
  const status = document.getElementById('form-status');
  const prepared = document.getElementById('prepared');
  if (!form || !status) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const helper = form.querySelector('.form-bottom small');
  submitButton.textContent = 'Send inquiry';
  helper.textContent = 'Send directly to Telegram.';
  prepared.hidden = true;

  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'company';
  honeypot.autocomplete = 'off';
  honeypot.tabIndex = -1;
  honeypot.setAttribute('aria-hidden', 'true');
  honeypot.style.cssText = 'position:absolute;left:-10000px;width:1px;height:1px;opacity:0;';
  form.append(honeypot);

  form.addEventListener('submit', async event => {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const payload = {
      name: data.get('name'),
      email: data.get('email'),
      message: data.get('message'),
      services: data.getAll('service'),
      company: data.get('company'),
    };

    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    status.textContent = 'Sending your message securely…';
    prepared.hidden = true;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send the message.');

      form.reset();
      status.textContent = 'Message sent! I will receive it on Telegram shortly.';
    } catch (error) {
      status.textContent = error.message || 'Unable to send the message. Please try again.';
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Send inquiry';
    }
  }, true);
})();
