const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class TestCommand extends BaseCommand {
    constructor() {
    super('botstate', 'testing', []);
    }

    async run(client, message, args) {
    message.channel.send('El bot esta actualmente online');
    }
}