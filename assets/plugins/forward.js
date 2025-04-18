const { command, parsedJid, isPrivate } = require("../../lib/");

command(
  {
    pattern: "fd",
    fromMe: isPrivate,
    desc: "Forwards the replied message",
    type: "Util",
  },
  async (message, match, m) => {
    if (!m.quoted) {
      return message.reply("Reply to a message you want to forward.");
    }

    const jids = parsedJid(match);
    const forwardedMessage = message.reply_message.message;

    for (const jid of jids) {
      await message.forward(jid, forwardedMessage);
    }
  }
);
