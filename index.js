//PLUGINS
const commando = require('discord.js-commando')
const Discord = require('discord.js');
const prefix = ">";
const bot = new commando.Client({
    commandPrefix: prefix
});
//PLUGINS

//BOT TOKEN
bot.login('NTIzNzkxNTkxNjgxMjk0MzM3.Dveqhg.Ux_n_4eKpdXXySPqUbg_LA7McUo');
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
