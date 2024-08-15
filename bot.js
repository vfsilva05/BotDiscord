require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const deployCommands = require('./deploy_commands');
const handleEmbedCommands = require('./module_embed');
const handleMessageCommands = require('./module_message');
const handleFileCommands = require('./module_file'); 

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
    client.on('interactionCreate', interaction => {
        handleEmbedCommands(interaction);
        handleMessageCommands(interaction);
        handleFileCommands(interaction); 
    });
});

console.log(process.env.TOKEN);
client.login(process.env.DISCORD_TOKEN);
