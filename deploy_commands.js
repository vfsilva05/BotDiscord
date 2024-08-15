const { REST, Routes } = require('discord.js');

async function deployCommands() {
    try {
        console.log('Started refreshing application (/) commands.');

        const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
            body: [
                {
                    name: 'embed',
                    description: 'Envia uma mensagem embed personalizada',
                    options: [
                        {
                            type: 3, // STRING
                            name: 'title',
                            description: 'O título da embed',
                            required: false,
                        },
                        {
                            type: 3, // STRING
                            name: 'description',
                            description: 'A descrição da embed (use \\n para nova linha)',
                            required: false,
                        },
                        {
                            type: 3, // STRING
                            name: 'color',
                            description: 'A cor da embed (hex code)',
                            required: false,
                        },
                        {
                            type: 3, // STRING
                            name: 'footer',
                            description: 'O rodapé da embed',
                            required: false,
                        },
                        {
                            type: 3, // STRING
                            name: 'image',
                            description: 'A URL da imagem da embed',
                            required: false,
                        },
                    ],
                },
            ],
        });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error('Failed to register commands:', error);
    }
}

module.exports = deployCommands;
