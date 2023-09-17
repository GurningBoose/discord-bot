const ms = require("ms");
const cooldowns = new Map();

const cooldownTime = 5; // seconds

module.exports = ({ interaction }) => {
  const { userId } = interaction;
  const cooldown = cooldowns.get(userId);

  if (cooldown) {
    const formatted = ms(cooldown, { long: true });

    interaction.reply({
      content: `Please wait ${formatted} before using another command!`,
      ephemeral: true,
    });

    return true;
  } else {
    cooldowns.set(userId, Date.now() + cooldownTime * 1000);
    setTimeout(() => cooldowns.delete(userId), cooldownTime * 2);

    return false;
  }
};
