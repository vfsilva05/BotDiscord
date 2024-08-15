const allowedRoles = ['1261748785042952232', '1261760124083765330'];

async function handleFileCommands(interaction) {
    if (!interaction.isCommand()) return;

    const { commandName, options, member } = interaction;

    if (commandName === 'enviararquivo') {
        
        const hasRole = allowedRoles.some(roleId => member.roles.cache.has(roleId));

        if (!hasRole) {
            return interaction.reply({ content: 'Você não tem permissão para usar este comando.', ephemeral: true });
        }

        const arquivo = options.getAttachment('arquivo');

        if (!arquivo) {
            return interaction.reply({ content: 'Nenhum arquivo foi anexado.', ephemeral: true });
        }

        try {
            
            await interaction.deferReply({ ephemeral: true });

            
            const validFileTypes = ['image/gif', 'image/png', 'image/jpeg', 'image/jpg'];
            if (!validFileTypes.includes(arquivo.contentType)) {
                return interaction.editReply({ content: 'Tipo de arquivo não suportado.' });
            }

            
            await interaction.channel.send({ files: [arquivo] });

            
            await interaction.editReply({ content: 'Arquivo enviado com sucesso!' });
        } catch (error) {
            console.error('Failed to send file:', error);
            await interaction.editReply({ content: `Houve um erro ao enviar o arquivo: ${error.message}` });
        }
    }
}

module.exports = handleFileCommands;
