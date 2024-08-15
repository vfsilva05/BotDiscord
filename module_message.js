const allowedRoles = ['1261748785042952232', '1261760124083765330'];

async function handleMessageCommands(interaction) {
    if (!interaction.isCommand()) return;

    const { commandName, options, member } = interaction;

    if (commandName === 'mensagem') {
        // Verifica se o membro tem um dos cargos permitidos
        const hasRole = allowedRoles.some(roleId => member.roles.cache.has(roleId));

        if (!hasRole) {
            return interaction.reply({ content: 'Você não tem permissão para usar este comando.', ephemeral: true });
        }

        const mensagem = options.getString('mensagem');

        try {
            // Envia a mensagem no canal onde o comando foi usado
            await interaction.channel.send(mensagem);
            await interaction.reply({ content: 'Mensagem enviada com sucesso!', ephemeral: true });
        } catch (error) {
            console.error('Failed to send message:', error);
            await interaction.reply({ content: `Houve um erro ao enviar a mensagem: ${error.message}`, ephemeral: true });
        }
    }
}

module.exports = handleMessageCommands;
