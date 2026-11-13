# Telegram notifications

The portfolio contact form sends inquiries to the Telegram group after these Vercel environment variables are configured:

| Variable | Value |
| --- | --- |
| `TELEGRAM_BOT_TOKEN` | The secret token from BotFather. Never commit or share it. |
| `TELEGRAM_CHAT_ID` | `-5459930026` |

## Configure in Vercel

1. Open the portfolio project in Vercel.
2. Go to **Settings → Environment Variables**.
3. Add both variables for **Production**, **Preview**, and **Development**.
4. Redeploy the latest deployment after saving the variables.

The bot `@contactwebsitebot` must remain in the **Contact From Website** Telegram group.
