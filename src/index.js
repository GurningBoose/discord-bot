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

client.on('messageCreate', (msg) => {
    console.log(msg.content);
    if (msg.author.bot) {
        return;
    }
    if (msg.content === `What are you doing here, drifter?`) {
        msg.reply(`That's none of your business, ratsack!`);
    }
})

client.login(process.env.TOKEN);

 