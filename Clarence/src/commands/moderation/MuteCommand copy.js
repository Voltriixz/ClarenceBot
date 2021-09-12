/* const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('No tienes permiso para realizar esta accion.');
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('Necesito \`MANAGE_ROLES\`');

    let reason = args.slice(1).join(" ");
    const muteRole = message.guild.roles.cache.get('886344078709637232');
    const memberRole = message.guild.roles.cache.get('878366402858348625');
    const mentionedMember = message.mentions.members.first || message.guild.members.cache.get(args[0]);
    const muteEmbed = new Discord.MessageEmbed()
      .setTitle(`Has sido muteado de ${message.guild.name}`)
      .setDescription(`El motivo del muteo es: ${reason}`)
      .setColor('GREEN')
      .setTimestamp();

    if (!args[0]) return message.channel.send(`\`.mute @member reason\``);
    if (!mentionedMember) return message.channel.send('El miembro mencionado no esta en el servidor');
    if (mentionedMember.user.id == message.author.id) return message.channel.send('No puedes mutearte a ti mismo');
    if (mentionedMember.user.id == client.user.id) return message.channel.send('No puedes mutearme a mi con mi propio comando:stuck_out_tongue_winking_eye:');
    if (!reason) reason = 'No se especifico el motivo.';
    if (mentionedMember.roles.cahe.has(muteRole.id)) return message.channel.send('Este miembro ya esta muteado.');
    if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('No puedes mutear a alguien con un rol mas alto que el tuyo.');

    await mentionedMember.send(muteEmbed).catch(err => console.log(err));
    await mentionedMember.roles.add(muteRole.id).catch(err).then(message.channel.send('Hubo un problema otorgando el rol.'));
    await mentionedMember.roles.remove(memberRole.id).catch(err).then(message.channel.send('Hubo un problema eliminando el rol.'));
  }
} */