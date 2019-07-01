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
        description: 'Shows the status of the Zelix Network'
      });
    }

    async run(message)
    {
        //npm install request --save
        var request = require("request");
        var mcIP = "zelix.us";
        var mcPort = "";

        var url = "http://mcapi.us/server/status?ip=" + mcIP + "&port" + mcPort;
        request(url, function(err, response, body) {
            if (err) message.channel.send(err);

            body = JSON.parse(body);
            
            var status = `The Zelix Network is currently offline`;
            if(body.players.now){
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**Status | Information**")
                    .setColor("#4286f4")
                    .addField("Zelix.us is online with,", `${body.players.now} people playing`)
                    .setThumbnail("https://cdn.discordapp.com/attachments/516650665691578368/588379110255099914/logo.png")})
            }
            else{
                message.channel.send({embed: new Discord.RichEmbed()
                    .setTitle("**Status | Information**")
                    .setColor("#4286f4")
                    .addField("The Zelix Network is currently online with,", "-> 0 players")
                    .setThumbnail("https://cdn.discordapp.com/attachments/516650665691578368/588379110255099914/logo.png")})
            }
        })
    }
}

module.exports = statusCommand;


