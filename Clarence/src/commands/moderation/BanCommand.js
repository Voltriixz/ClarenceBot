const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permisos para banear.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Mi rol no me permite banear.");

    //Variables:
    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();

    //Input Checking:
    if (!reason) reason = 'No se especifico ningun motivo';
    if (!args[0]) return message.channel.send('Debes mencionar a alguien para banearlo `\`.ban @user reason\`');
    if (!mentionedMember) return message.channel.send('El miembro mencionado no esta en el servidor.');
    if (!mentionedMember.bannable) return message.channel.send('No puedo banear a ese miembro.');

    //Executing:
    const banEmbed = new Discord.MessageEmbed()
      .setTitle(`Has sido baneado de ${message.guild.name}`)
      .setDescription(`El motivo de ser baneado es: ${reason}`)
      .setColor("#039c31")
      .setTimestamp();

      await mentionedMember.send(banEmbed).catch(err => console.log(err));
      await mentionedMember.ban({
        days: 7,
        reason: reason
      }).catch(err => console.log(err)).then(() => message.channel.send("Baneado con exito" + mentionedMember.user.tag));

  }
} 
