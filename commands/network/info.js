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
      description: "Information about the Zelix Network"
    });
  }

  async run(message)
  {
      message.channel.send({embed: new Discord.RichEmbed()
        .setTitle("**Information**")
        .setColor("#4286f4")
        .addField("__Twitter__", "@AudosNetwork")
        .addField("__Website__", "www.audos.org")
        .addField("__Teamspeak__", "ts.audos.org")
        .addField("__Shop__", "store.audos.org")
        .setFooter("Audos Network | Created by dora#0843")
        .setThumbnail("https://cdn.discordapp.com/attachments/516650665691578368/588379110255099914/logo.png")})
  }
}

module.exports = infoCommand;
