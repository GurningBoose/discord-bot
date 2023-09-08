require(`dotenv`).config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,  
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready',(c) => {
    console.log(`✅ ${c.user.tag} is online.`);
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'drifter') {
        interaction.reply('Go fuck yourself, flat-skin.')
    };
    console.log(interaction.commandName);
});

client.login(process.env.TOKEN);

 