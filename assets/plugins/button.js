const { command } = require("../../lib");

command(
  {
    pattern: "button1",
    fromMe: true,
    desc: "send a button message",
    usage: "#button",
    type: "message",
  },
  async (message, match, m) => {
 await  message.client.sendMessage(message.jid, {
      text: "Hello World !",
      footer: "Zenhhh - 2025",
      buttons: [
        {
          buttonId: "#button2",
          buttonText: {
            displayText: "button2",
          },
          type: 1,
        },
        {
          buttonId: "#button3",
          buttonText: {
            displayText: "button3",
          },
          type: 1,
        },
        {
          buttonId: "#button4",
          buttonText: {
            displayText: "button4",
          },
          type: 1,
        },
      ],
      headerType: 1,
      viewOnce: true,
    }, { quoted: null });
  }
);

command(
  {
    pattern: "button2",
    fromMe: true,
    desc: "send a button message",
    usage: "#button",
    type: "message",
  },
  async (message, match, m) => {
await message.client.sendMessage(message.jid, {
  text: "Hello Wolrd !;", 
  footer: "© lynx Dev",
  buttons: [
  {
    buttonId: '.tes',
    buttonText: {
      displayText: 'TESTING BOT'
    },
    type: 1,
  },
  {
    buttonId: ' ',
    buttonText: {
      displayText: 'PRIVATE SCRIPT'
    },
    type: 1,
  },
  {
    buttonId: 'action',
    buttonText: {
      displayText: 'ini pesan interactiveMeta'
    },
    type: 4,
    nativeFlowInfo: {
      name: 'single_select',
      paramsJson: JSON.stringify({
        title: 'message',
        sections: [
          {
            title: 'Zenhhh - 2025',
            highlight_label: '🇧🇷',
            rows: [
              {
                header: 'HEADER',
                title: 'TITLE',
                description: 'DESCRIPTION',
                id: 'YOUR ID',
              },
              {
                header: 'HEADER',
                title: 'TITLE',
                description: 'DESCRIPTION',
                id: 'YOUR ID',
              },
            ],
          },
        ],
      }),
    },
  },
  ],
  headerType: 1,
  viewOnce: true
}, { quoted: null });
});

command(
  {
    pattern: "button3",
    fromMe: true,
    desc: "send a button message",
    usage: "#button",
    type: "message",
  },
  async (message, match, m) => {
  await message.client.sendMessage(
    message.jid,
    {
        image: { url : "https://files.catbox.moe/azgjyw.png" },
        caption: "Description Of Messages",
        title: "Title Of Messages",
        subtitle: "Subtile Message",
        footer: "Footer Messages",
        media: true,
        interactiveButtons: [
             {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                     display_text: "Display Button",
                     id: "ID"
                })
             },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                     display_text: "Display Button",
                     url: "https://github.com/Akshay-Eypz"
                })
             }
        ]
    },
  {
    quoted : null
  }
)
});

command(
  {
    pattern: "button4",
    fromMe: true,
    desc: "send a button message",
    usage: "#button",
    type: "message",
  },
  async (message, match, m) => {
await message.client.sendMessage(
    message.jid,
    {
        product: {
            productImage: { url: "https://files.catbox.moe/azgjyw.png" }, //or buffer
            productImageCount: 1,
            title: "Title Product",
            description: "Description Product",
            priceAmount1000: 20000 * 1000,
            currencyCode: "IDR",
            retailerId: "Retail",
            url: "github.com",            
        },
        businessOwnerJid: "918138898059@s.whatsapp.net",
        caption: "Description Of Messages", //Additional information
        title: "Title Of Messages",
        footer: "Footer Messages",
        media: true,
        interactiveButtons: [
             {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                     display_text: "Display Button",
                     id: "ID"
                })
             },
             {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                     display_text: "Display Button",
                     url: "github.com"
                })
             }
        ]
    },
  {
    quoted : null
  }
)
});
