const Discord = require('discord.js'),
      client = new Discord.Client();

const settings = require('./settings.json');

const answer = [
    'Oduncu',
    'Allah Allah',
    'Yaparım',
    'Efendim',
    'Doğru',
    'Emrin',
    'Evet',
    'Hazır',
    'Tamam'
];

client.on('ready', () => {

  console.log(`Oduncu Sunucuya Giriş Yaptı!`);
  client.user.setPresence({ game: { name: 'Age of Empires II: The Age of Kings', type: 0 } });

});

client.on('message', (msg) => {

    if(msg.content === settings.prefix || msg.content.startsWith(settings.prefix + ' ')) {

        if (msg.content) {

            msg.reply(answer[Math.floor(Math.random() * answer.length)]);

        }

    }

});

client.login(settings.token);