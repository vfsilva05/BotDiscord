require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const deployCommands = require('./deploy_commands');
const handleCommands = require('./module_embed');

// Configurações do cliente
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Evento de inicialização do bot
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    deployCommands(); // Executa o deploy dos comandos quando o bot iniciar
});

// Adiciona o listener para os comandos
client.on('interactionCreate', handleCommands);

client.login(process.env.DISCORD_TOKEN);
