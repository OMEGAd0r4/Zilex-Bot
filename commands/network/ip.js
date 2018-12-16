const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});

class ipCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'ip',
        group: 'network',
        memberName: 'ip',
        description: 'Shows the different proxies the network has'
      });
    }
    
    async run(message)
    {
        var ipEmbed = new Discord.RichEmbed()
            .setColor("#4286f4")
            .setTitle("**Zilex | Information**")
            .addField(":mailbox_with_no_mail: SA: Server IP", "-> **sa.zilex.us**")
            .addField(":mailbox_with_no_mail: EU: Server IP", "-> **eu.zilex.us**")
            .addField("``>IP to use this command. Requested by``", ` -> ${message.author}`)
            .setFooter("Copyright© 2018 Zilex Network. Created by dora#0843")
            .setThumbnail("https://images-ext-1.discordapp.net/external/NKKFTtifMQP0ADT4Dw0BZd5fOEMHyd6NmrRznNTzm04/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/521027621589483542/db986c0e576e96cfe02c20ed7d814a69.png?width=487&height=487")

        message.channel.send(ipEmbed);
    }
}

module.exports = ipCommand;
