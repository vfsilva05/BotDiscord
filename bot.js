require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const deployCommands = require('./deploy_commands');
const handleCommands = require('./module_embed');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});


client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    deployCommands(); 
});

// Adiciona o listener para os comandosclient.on('interactionCreate', handleCommands);

client.login(process.env.DISCORD_TOKEN);
