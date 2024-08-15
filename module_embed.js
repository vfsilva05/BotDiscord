const { EmbedBuilder } = require('discord.js');

// Substitua pelos IDs reais dos cargos
const allowedRoles = ['1261748785042952232', '1261760124083765330'];

async function handleCommands(interaction) {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === 'embed') {
        const member = interaction.member;

        const hasRole = allowedRoles.some(roleId => member.roles.cache.has(roleId));

        if (!hasRole) {
            return interaction.reply({ content: 'Você não tem permissão para usar este comando.', ephemeral: true });
        }

        const title = options.getString('title');
        const description = options.getString('description');
        const color = options.getString('color');
        const footer = options.getString('footer');
        const image = options.getString('image');

        const embed = new EmbedBuilder();

        if (title) embed.setTitle(title);
        if (description) embed.setDescription(description.replace(/\\n/g, '\n'));

        // Tratamento para cor com validação
        if (color && /^#[0-9A-F]{6}$/i.test(color)) {
            embed.setColor(color);
        } else if (color) {
            return interaction.reply({ content: 'A cor fornecida é inválida. Por favor, use um código de cor hexadecimal válido.', ephemeral: true });
        }

        if (footer) embed.setFooter({ text: footer });
        if (image) embed.setImage(image);

        try {
            // Envia a embed no canal onde o comando foi usado
            await interaction.channel.send({ embeds: [embed] });
            await interaction.reply({ content: 'Embed enviada com sucesso!', ephemeral: true });
        } catch (error) {
            console.error('Failed to send embed:', error);
            await interaction.reply({ content: `Houve um erro ao enviar a embed: ${error.message}`, ephemeral: true });
        }
    }
}

module.exports = handleCommands;
