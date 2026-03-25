const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Disable handlers temporarily
// require("./handlers/commandHandler")(client);
// require("./handlers/eventHandler")(client);

client.login(process.env.DISCORD_TOKEN);
