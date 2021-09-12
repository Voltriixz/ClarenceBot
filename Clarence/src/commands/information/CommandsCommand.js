const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CommandsCommand extends BaseCommand {
  constructor() {
    super('commands', 'information', []);
  }

  run(client, message, args) {
    message.channel.send('Estamos trabajando en la lista de comandos');
  }
}