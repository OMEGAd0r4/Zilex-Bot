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
            .setTitle("**Zuni | Information**")
            .addField(":mailbox_with_no_mail: Server IP", "-> **zuni.cc**")
            .addField("``>IP to use this command. Requested by``", ` -> ${message.author}`)
            .setFooter("Copyright© 2018 Zuni Network. Created by dora#0843")
            .setThumbnail("https://cdn.discordapp.com/attachments/606702450409209878/609004091947089920/design-mascot-logo-with-free-revisions-and-vector-file.png")

        message.channel.send(ipEmbed);
    }
}

module.exports = ipCommand;
