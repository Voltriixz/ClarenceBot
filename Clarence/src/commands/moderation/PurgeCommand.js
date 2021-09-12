const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('clear', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('No puedes usar este comando.');
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No tengo \`MANAGE_MESSAGES\` permisos.");
    if (!args[0]) return message.channel.send("Debes indicar el numero de mensajes a borrar. \`.clear number\`");
    const amountToDelete = Number(args[0], 10);

    if (isNaN(amountToDelete)) return message.channel.send("El numero indicado no es valido.");
    if (!Number.isInteger(amountToDelete)) return message.channel.send("El numero indicado debe ser un numero entero.");
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 100) return message.channel.send('El numero indicado debe estar entre 2 y 100');
    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    });

    try{
      await message.channel.bulkDelete(fetched)
        .then(messages => message.channel.send(`${messages.size} borrados con exito :broom:`));
    } catch (err) {
      console.log(err);
      message.channel.send('No puedo borrar mensajes mas antiguos a 14 dias.');
    }
  }
}