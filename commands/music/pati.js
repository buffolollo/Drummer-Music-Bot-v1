const { Client, Message, EmbedBuilder } = require("discord.js");
const play = require("../playBased/play");

module.exports = {
  name: "pati",
  aliases: ["andrea"],
  voice: true,
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  execute(client, message, args) {
    play.execute(client, message, ["https://www.youtube.com/watch?v=8wC-3ETAIKc"]);
  },
};
