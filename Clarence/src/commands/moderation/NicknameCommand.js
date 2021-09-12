const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class NicknameCommand extends BaseCommand {
  constructor() {
    super('nickname', 'moderation', []);
  }

  async run(client, message, args) {
  //.nickname @member nickName
  //Permission Checking:
    if (!message.member.hasPermission("CHANGE_NICKNAME")) return message.channel.send("No puedes usar este comando");
    if (!message.guild.me.hasPermission("MANAGE_NICKNAME")) return message.channel.send("Necesito \`MANAGE_PERMISSIONS\` permisos.");

  //Variables:
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const nickName = args.slice(1).join(" ");

  //Input Checking:
    if (!args[0]) return message.channel.send("Debes mencionar a un miembro para cambiarle el apodo.");
    if (!mentionedMember) return message.channel.send("EL miembro mencionado no esta en el servidor");
    if (!nickName) return message.channel.send("Debes mencionar a alguien para cambiarle el apodo.");
    if (!mentionedMember.kickable) return message.channel.send("No puedo cambiar el apodo de este usuario debido a que su rol es mayor al mio.");

  //Executing:
    await mentionedMember.setNickname(nickName).catch(err => console.log(err).then(message.channel.send("No puedo establecer el apodo debido a un error")));
    message.channel.send("Apodo cambiado con exito");
  }
}