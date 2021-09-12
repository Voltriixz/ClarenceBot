const BaseCommand = require('../../utils/structures/BaseCommand');
const Disdord = require('discord.js');

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }
  
//ONLY ONE WORD
  async run(client, message, args) {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No puedes usar este comando.")
    const messageToSay = args.join("");
    const sayEmbed = new Disdord.MessageEmbed()
      .setTitle(`${message.author.tag} says:`)
      .setDescription(`${messageToSay}`)
      .setFooter(message.author.tag ,message.author.displayAvatarURL())
      .setColor("#03ad75")
      .setTimestamp()
      //.setURL('twitter.com/Voltriixz_') //
    try {
      await message.channel.send(sayEmbed);
    } catch (err) {
      console.log(err);
      message.channel.send('No soy capaz de enviar ese mensaje.');
    }
  }
}