const Discord = require("discord.js");
const commando = require('discord.js-commando')
const prefix = ">";
const bot = new commando.Client({
  commandPrefix: prefix
});
const ms = require("ms");

class clearCommand extends commando.Command {
    constructor(client) 
    {
      super(client, {
        name: 'clear', 
        group: 'network',
        memberName: 'clear',
        description: "Clears the chat"
      });
    }

    async run(message, args)
    {
        var supportteamerole = message.guild.roles.find(`name`, "SUPPORT TEAM");

        if (!message.member.roles.has(supportteamerole.id)) return message.channel.send("Insufficient permission. You do not have permission to clear chats")

        if (message.member.roles.has(supportteamerole.id)) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHAT CHANNEL.")})                        
        }
    }
}

module.exports = clearCommand;













