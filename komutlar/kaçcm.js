const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Hemen Diyorum Abi 1 Saniye..').then(message => {
   var espriler = [' **Senin Malafatın  10000000CM ** :eggplant: ' ,'**Senin Malafatın  10 ** :eggplant:' ,'**Senin Malafatın 12CM  ** :eggplant:' ,'**Senin Malafatın  15CM ** :eggplant:' ,'**Senin Malafatın  2000000CM  ** :eggplant:' ,'**Senin Malafatın  69CM  ** :eggplant:' ,'**Senin Malafatın 10CM  ** :eggplant:' ,'**Senin Malafatın 1000CM  ** :eggplant:' ,'**Senin Malafatın  sende yok mq ** :eggplant:' ,'**Senin Malafatın  10000000000M ** :eggplant:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Malafatını Söyler.',
  usage: 'kaçcm'
};