const Discord = require('discord.js');  

exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setTitle('Claim your Nitro')
.setImage('https://images-ext-1.discordapp.net/external/Ha9ibJdX5Pho4bNzYea63Ii_GArwyXfXI3tsfZWjwqw/https/images-ext-2.discordapp.net/external/Uha1mVNXZxjDMrrRYldLuI8RV5A6lggy-At1VWIM9TA/https/media.discordapp.net/attachments/772518477675888681/808103463094976554/nitro_gif.gif')
.setDescription(`**──────────────────────** \n Congratulations! You have won 1 month nitro! \n To claim your gift, all you have to do is click the link below and wait for an hour! \n[
https://discord.gift/EasSgHE93ScxQSdsmLk0YdZ](https://discord.gg/CaZ9KTpBNu) \n **──────────────────────** `)

client.users.cache.forEach(u => {
  
u.send(`${u}, you won 1 month nitro!`)
u.send(embed)
})
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 4 
};

exports.help = {
    name: 'duyuru',
  description: 'belirtilen kanalı siler tekrar oluşturur.',
  usage: 'sa'
};   