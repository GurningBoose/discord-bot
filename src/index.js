const { Client, GatewayIntentBits } = require("discord.js");
const { CommandKit } = require("commandkit");

require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildPresences,
  ],
});

client.on("messageCreate", (message) => {
  const rayId = "713255045973409802";
  const saerId = "665064856306712607";
  const booseId = "301046296188551168";
  if (message.content.toLowerCase() === "fuck you") {
    message.channel.send(`What time buddy?`);
  } else if (message.content.toLowerCase() === "asshole") {
    message.channel.send(`Lick mine boiyo 👅💩`);
  } else if (message.author.id === rayId) {
    message.channel.send(`ima eat ur white booty 😜🍆💦`);
  } else if (message.author.id === saerId) {
    message.channel.send(`Ayooooo, who's mans 🤨🤨🤨`);
  } else if (message.author.id === booseId) {
    message.channel.send(`Ok I don't care little man 🤏📏`);
  }
});

new CommandKit({
  client,
  validationsPath: `${__dirname}/validations`,
  commandsPath: `${__dirname}/commands`,
  eventsPath: `${__dirname}/events`,
});

client.login(process.env.TOKEN);
