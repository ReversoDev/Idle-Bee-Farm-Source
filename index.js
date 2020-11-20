//Here's the source code.
const Discord = require('discord.js');
const Client = new Discord.Client();
require('dotenv').config();

Client.login(process.env.TOKEN);

Client.on('ready', () => {
  console.log('Make your own bot.');
})
