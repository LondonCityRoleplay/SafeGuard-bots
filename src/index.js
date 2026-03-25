const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

require("./handlers/commandHandler")(client);
require("./handlers/eventHandler")(client);

client.login(process.env.DISCORD_TOKEN);
