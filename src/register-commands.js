require('dotenv').config();
const { REST, Routes } = require('discord.js'); 

const commands = [
    {
        name: 'drifter',
        description: `replies with an human-phobic insult :)`,
    },
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);
    
(async () => {
    try {
        await rest.put(
        Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
                { body: commands }    
        )

        console.log('✅ Slash commands were registered successfully!');
    } catch (err) {
           console.log('⛔ There was an error: ${err}');
    }
})();