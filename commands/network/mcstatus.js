const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});

class statusCommand extends commando.Command {
    constructor(client)
    {
      super(client, {
        name: 'status',
        group: 'network',
        memberName: 'status',
        description: 'Shows the status of the Zilex Network'
      });
    }

    async run(message)
    {
        var request = require("request");
        var mcIP = "zilex.us";
        var mcPort = "";

        var url = "http://mcapi.us/server/status?ip=" + mcIP + "&port" + mcPort;
        request(url, function(err, response, body) {
            if (err) message.channel.send(err);

            body = JSON.parse(body);
            
            var status = `The Zilex Network is currently offline`;
            if(body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**Status | Information**")
                    .setColor("#4286f4")
                    .addField("Zilex.us is online with,", `${body.players.now} people playing`)
                    .setThumbnail("https://images-ext-1.discordapp.net/external/NKKFTtifMQP0ADT4Dw0BZd5fOEMHyd6NmrRznNTzm04/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/521027621589483542/db986c0e576e96cfe02c20ed7d814a69.png?width=487&height=487")})
            }
        })
    }
}

module.exports = statusCommand;
