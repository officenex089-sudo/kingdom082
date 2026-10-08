// Gametion Bot - Simple Telegram Bot
const TelegramBot = require('node-telegram-bot-api');
const TOKEN = process.env.BOT_TOKEN; // Railway Variables tab mein BOT_TOKEN set karo
const TELEGRAM_LINK = 'https://t.me/JSK1official';
const WHATSAPP_LINK = 'https://wa.link/dir2iz';

if (!TOKEN) {
  console.error('ERROR: BOT_TOKEN environment variable set nahi hai!');
  process.exit(1);
}

const bot = new TelegramBot(TOKEN, { polling: true });

const welcomeMessage =
  `👋 Welcome to Gametion Bot!\n\n` +
  `Use the menu below or type a command to explore game categories, learn about us, or get support. New here? Just tap /board to begin.\n\n` +
  `📚 Disclaimer: This bot is created strictly for educational purposes only. We are not affiliated with any official game company or service.`;

const playKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: '▶️ Telegram',
          url: TELEGRAM_LINK
        },
        {
          text: '💬 WhatsApp',
          url: WHATSAPP_LINK
        }
      ]
    ]
  }
};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, welcomeMessage, playKeyboard);
});

bot.onText(/\/board/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, welcomeMessage, playKeyboard);
});

console.log('Gametion Bot is running...');
