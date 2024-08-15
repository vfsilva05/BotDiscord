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
    deployCommands(); // Mover o deployCommands aqui
    client.on('interactionCreate', handleCommands); // Listener para comandos
});

console.log(process.env.TOKEN);
client.login(process.env.DISCORD_TOKEN);
