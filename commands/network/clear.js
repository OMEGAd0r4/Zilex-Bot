

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

        if (message.channel.type == 'text') {
          message.channel.fetchMessages()
            .then(messages => {
              message.channel.bulkDelete(messages);
              messagesDeleted = messages.array().length; // number of messages deleted
  
              // Logging the number of messages deleted on both the channel and console.
              message.channel.sendMessage("Zelix bot has purged deleted a total "+messagesDeleted + " messages.");
              console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
            })
            .catch(err => {
              console.log('Error while doing Bulk Delete');
              console.log(err);
            });

        }
    }
  }


module.exports = clearCommand;



























