const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lookup")
    .setDescription("Lookup a user")
    .addUserOption(option =>
      option.setName("user")
        .setDescription("User to lookup")
        .setRequired(true)
    ),

  async execute(interaction) {
    const user = interaction.options.getUser("user");

    await interaction.reply({
      content: `🔍 Lookup for ${user.tag}`,
      ephemeral: true
    });
  }
};
