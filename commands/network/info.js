const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class infoCommand extends commando.Command {
  constructor(client) 
  {
    super(client, {
      name: 'info', 
      group: 'network',
      memberName: 'info',
      description: "Information about the Zilex Network"
    });
  }

  async run(message)
  {
      message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Information**")
        .setColor("#4286f4")
        .addField("__Twitter__", "@USZilex")
        .addField("__Website__", "www.zilex.us")
        .addField("__Teamspeak__", "ts.zilex.us")
        .addField("__Shop__", "zilex.buycraft.net")
        .setFooter("Zilex Network | Created by dora#0843")
        .setThumbnail("https://images-ext-1.discordapp.net/external/NKKFTtifMQP0ADT4Dw0BZd5fOEMHyd6NmrRznNTzm04/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/521027621589483542/db986c0e576e96cfe02c20ed7d814a69.png?width=487&height=487")})
  }
}

module.exports = infoCommand;
