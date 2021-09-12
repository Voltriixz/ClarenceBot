const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permisos para banear.");
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Mi rol no me permite banear.");

    //Variables:
    let reason = args.slice(1).join(" ");
    let userID = args[0];

    //Input Checking:
    if (!reason) reason = 'No se especifico ningun motivo';
    if (!args[0]) return message.channel.send('Debes mencionar a alguien para banearlo `\`.ban @user reason\`');
    if (isNaN(args[0])) return message.channel.send('El ID mencionado no es un numero. \`.unban ID reason\`');

    //Executing:
    message.guild.fetchBans().then(async bans => {
      if (bans.size == 0) return message.channel.send('Este servidor no tiene a nadie baneado.');
      let bUser = bans.find(b => b.user.id == userID);
      if (!bUser) return message.channel.send('El ID de usuario no esta baneado.');
    await message.guild.members.unban(bUser.user, reason).catch(err => {
      console.log(err);
      return message.channel.send('Algo fue mal desbaneando el ID...')
    }).then(() => {
        message.channel.send(`Usuario desbaneado con exito ${args[0]}`);
      });
    });
  }
}
