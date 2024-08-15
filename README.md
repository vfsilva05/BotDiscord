
# Bot Discord - Message Embed

O projeto é um bot para Discord que fornece um comando /embed para enviar mensagens formatadas em estilo embed para um canal de texto. O bot é projetado para facilitar a comunicação visualmente atraente dentro dos servidores do Discord, permitindo que os usuários com cargos específicos criem e personalizem mensagens usando o comando /embed.



## Funcionalidades

- **Comando /embed:** Este comando permite criar e enviar uma mensagem formatada com as seguintes opções:
    - **title:** Define o título da mensagem.
    - **description:** Define a descrição da mensagem.
    - **color:** Define a cor de fundo da mensagem.
    - **footer:** Define o rodapé da mensagem.
    - **image:** Define a URL da imagem que será exibida na mensagem.

## Como Usar

1. **Digite o comando `/embed`** no canal de texto onde você deseja enviar a mensagem.
2. **Preencha as opções** com os detalhes desejados:
    - Título da mensagem.
    - Descrição da mensagem.
    - Cor de fundo da mensagem (use códigos hexadecimais para cores).
    - Rodapé da mensagem.
    - URL da imagem que será exibida na mensagem.

## Exemplos

- Comando para criar uma mensagem com título e descrição:

    ```
    /embed title:"Meu Título" description:"Minha Descrição"
    ```

- Comando para adicionar cor de fundo e rodapé:

    ```
    /embed color:"#FF5733" footer:"Meu Rodapé"
    ```

- Comando para incluir uma imagem:

    ```
    /embed image:"https://exemplo.com/minha-imagem.jpg"
    ```


## Guia de Instalação

Siga os passos abaixo para configurar e executar o bot:

### 1. Clonar o Repositório

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/vfsilva05/BotDiscord.git
cd seu-repositorio
```

### 2. Instalar Dependências

Certifique-se de que você tem o Node.js instalado. Em seguida, instale as dependências do projeto:

```bash
npm init -y
npm install discord.js dotenv
```

### 3. Configurar o Arquivo .env

Altere o arquivo .envexample para .env e adicione suas credenciais e configurações:

```bash
DISCORD_TOKEN=seu-token-aqui
CLIENT_ID=seu-client-id-aqui
GUILD_ID=seu-guild-id-aqui
```

### 4. Configurar Cargos Permitidos

No arquivo module_embed.js, defina os IDs dos cargos que podem utilizar o comando **/embed**. Para obter o ID de um cargo, siga estes passos:

- 1°  No Discord, vá para as configurações do servidor.
- 2°  Selecione a aba "Cargos".
- 3° Clique com o botão direito do mouse sobre o cargo desejado e selecione "Copiar ID"

Atualize a variável **"allowedRoles"** com os IDs apropriados:

```bash
const allowedRoles = ['0000000000', '00000000000'];
```

### 5. Executar o Bot

Depois de configurar o arquivo .env e as permissões de cargos, você pode iniciar o bot com o comando:

```bash
node bot.js
```

## Contribuições

Sinta-se à vontade para contribuir com melhorias! Abra uma issue ou envie um pull request no [repositório](https://github.com/vfsilva05/BotDiscord.git).


