const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription(`Replies with "Pong!"`),

  run: ({ interaction }) => {
    interaction.reply("I am going to eat the skin off of your body 🙂");
  },
};
