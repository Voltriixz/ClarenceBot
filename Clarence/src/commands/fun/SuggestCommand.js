const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord =require('discord.js');

module.exports = class SuggestCommand extends BaseCommand {
  constructor() {
    super('suggest', 'fun', ['suggestion']);
  }

  run(client, message, args) {
    let suggestion = args.join(' ');
    if (!args[0]) return message.channel.send('Debes mencionar algo para sugerir');
    const embed = new Discord.MessageEmbed()
      .setTitle("Suggestion: ")
      .addField(`${suggestion}`, `Sugerido por ${message.author.tag}. \n`);


      let channel = message.guild.channels.cache.get('886382703467954187')
      channel.send(embed).then(sentMessage => sentMessage.react('👍')).then(reaction => reaction.message.react('👎'));
      channel.send('||@everyone||') .then(msg => { msg.delete({ timeout: 20}) }) .catch(console.error);
    }
} 