const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username +  ' Off, Çok sevimli dayanamıyorum!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQG_WFPyRNAvTPMrmY007Uu5gJWzoY3K75DpGa5-psjUTj5SgZw`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sevimlibak'],
  permLevel: 0
};

exports.help = {
  name: 'sevimlibak',
  description: 'Sevimli bakış atarsınız!',
  usage: 'sevimlibak'
}; 