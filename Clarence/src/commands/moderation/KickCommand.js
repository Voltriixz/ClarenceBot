const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("No puedes usar este comando.")
    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if (!reason) reason = "No reason Given";
    const kickEmbed = new Discord.MessageEmbed()
      .setTitle(`Fuiste expulsado de ${message.guild.name}`)
      .setDescription(`Motivo: ${reason}`)
      .setColor("#08c8cf")
      .setTimestamp()
      .setFooter(client.user.tag, client.user.displayAvatarURL());

      // .kick @user motivo
      if (!args[0]) return message.channel.send("Necesitas indicar a un usuario para expulsarlo. \`.kick @user reason\`")
      if (!mentionedMember ) return message.channel.send("Este usuario no esta en el servidor.");
      if (!mentionedMember.kickable) return message.channel.send('No puedo expulsar a ese miembro.');
      try {
        await mentionedMember.send(kickEmbed)
      }
      catch (err) {
        console.log('No he podido enviar el mensaje a este miembro.');
      }
      try {
        await mentionedMember.kick(reason) 
        message.channel.send("Usuario expulsado con exito.")
      } 
      catch (err){
          console.log(err)
          return message.channel.send("No pude expulsar al usuario mencionado.")

        }
      
    }
}