const Discord = require('discord.js')
module.exports = async (bot, member) => {

  
  let guild = await bot.guilds.cache.get("579017114669547533");
  let test = member.roles.add('739222936766119966')

  let channel = await bot.channels.cache.get("741886617417154601");
  let emoji = await member.guild.emojis.cache.find(emoji => emoji.name === `girano`);
  if (guild != member.guild) {
    return console.log(`Sem boas-vindas pra você! Sai daqui saco pela.`);
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor(`#4B0082`)
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(`${emoji} Boas-vindas ${emoji}`)
      .setImage(`https://thumbs.gfycat.com/CommonGlamorousAnteater-small.gif`)
      .setDescription(`${member.user}, bem-vindo(a) ao servidor ${guild.name}! Nosso servidor já possui ${member.guild.memberCount} membros, fique a vontade para tirar suas dúvidas!`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter('ID do Usuário:' + member.user.id)
      .setTimestamp();

    channel.send(embed);
    
  }
}