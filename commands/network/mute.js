const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class muteCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'mute', 
        group: 'network',
        memberName: 'mute',
        description: "Temporarily mutes a user"
      });
    }

    async run(message, args)
    {
        var tempmuteargs = message.content.slice(prefix.length).split(/ + /); //MAIN ARGS
        var tempmuteuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(tempmuteargs[0]));
        var tempmutereason = tempmuteargs.join(" ").slice(26);
        var tempmuterole = message.guild.roles.find(`name`, "Muted");
        var supportteamerole = message.guild.roles.find(`name`, "SUPPORT TEAM");

        if (!tempmuterole) return message.channel.send("Please make a 'Muted' role to proceed")

        if (!tempmuteuser) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", "/mute [User] [Reason]")});

        if (!tempmutereason) return message.channel.send({embed: new Discord.RichEmbed()
            .setDescription(":x: **Missing args**")
            .setColor("#FF4040")
            .addField("->", "/mute [User] [Reason]")});

        if (!message.member.roles.has(supportteamerole.id)) return message.channel.send("Insufficient permission. You do not have permission to mute others")

        if (tempmuteuser.roles.has(supportteamerole.id)) return message.channel.send("Insufficient permission. You do not have permission to mute support team!")

            var tempmuteembed = new Discord.RichEmbed()
                .setTitle("**Mute | Information**")
                .setColor("#4286f4")
                .setDescription(`:red_circle: ${tempmuteuser}, Muted by ${message.author}`)
                .addField(`:low_brightness: **REASON:**`, "->" + tempmutereason)

                let logschannel = message.guild.channels.find(`name`, "logs");
                if(!logschannel) return message.channel.send("Couldn't find the logs channel");

                logschannel.send(tempmuteembed).then(tempmuteuser.addRole(tempmuterole.id));

                message.delete();

                message.channel.send(`${tempmuteuser} has been muted.`)

                tempmuteuser.sendMessage(tempmuteuser + " Hey you have been muted from the Zilex Network for the reason of " + '[' + args[1] + ']')
        
    }
}

module.exports = muteCommand;
