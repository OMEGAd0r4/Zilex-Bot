//PLUGINS
const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});
//PLUGINS

//BOT TOKEN
bot.login(process.env.token);
//BOT TOKEN

//GETS THE BOT ONLINE
bot.on('ready',function(){
    console.log(`Bot is now online!, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);
    bot.user.setActivity(`Zilex Bot | >help`, { type: 'WATCHING' });
});
//GETS THE BOT ONLINE

//REGISTRIES
bot.registry.registerGroup('network', 'Network')
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();
//REGISTIES

//WELCOME MESSAGE
bot.on('guildMemberAdd', (member) => {
    const welcomechannel = member.guild.channels.find('name', `welcome`);
    welcomechannel.send({embed: new Discord.RichEmbed()
        .setColor("#4286f4")
        .setTitle("**New Member**")
        .setDescription(`:busts_in_silhouette:|**Greetings,** ${member}. Welcome to the **Zilex Network**.`)});
})


//ANTI-LINKS GUARDIAN
bot.on('message', async message => {
    //blacklisted words
    let blacklisted = ["KYS"] //words put , after the word
  
    //2 looking for words
    let foundInText = false;
    for (var i in blacklisted) { // loops through the blacklisted list
      if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;
    }
    // checks casesensitive words
  
    //3 deletes and send message
      if (foundInText) {
        message.delete();
        message.channel.send(`The Zilex Guardian has caught ${message.author} being toxic.`)
        bot.channels.get('523814455205822496').send({embed: new Discord.RichEmbed()
            .setTitle("**Suicidal Influence | Information**")
            .addField("**Link User**", message.author)
            .addField("**Link sent**", message.content)})
    }
});
//ANTI-LINKS GUARDIAN
