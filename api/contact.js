const allowedServices = new Set([
  'IT Support',
  'Web development',
  'Teaching',
  'Graphic design',
  'Video editing',
]);

const escapeHtml = value => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const cleanText = (value, maximum) => String(value || '').trim().slice(0, maximum);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return res.status(503).json({ error: 'Contact notifications are not configured yet.' });
  }

  let body = req.body || {};
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: 'Invalid request.' });
    }
  }

  // A hidden field that normal visitors never fill in helps reject simple bots.
  if (cleanText(body.company, 200)) {
    return res.status(400).json({ error: 'Unable to send this message.' });
  }

  const name = cleanText(body.name, 100);
  const email = cleanText(body.email, 200);
  const message = cleanText(body.message, 5000);
  const services = Array.isArray(body.services)
    ? body.services.filter(service => allowedServices.has(service)).slice(0, 5)
    : [];

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid name, email, and message.' });
  }

  const telegramMessage = [
    '🔔 <b>New portfolio inquiry</b>',
    '',
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    `<b>Services:</b> ${escapeHtml(services.join(', ') || 'General inquiry')}`,
    '',
    `<b>Message:</b>\n${escapeHtml(message)}`,
  ].join('\n');

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });

    const telegramData = await telegramResponse.json();
    if (!telegramResponse.ok || !telegramData.ok) {
      return res.status(502).json({ error: 'Telegram could not receive the message.' });
    }

    return res.status(200).json({ ok: true });
  } catch {
    return res.status(502).json({ error: 'Unable to send the message right now.' });
  }
};
