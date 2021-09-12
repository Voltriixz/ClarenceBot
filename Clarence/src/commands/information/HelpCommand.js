const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'information', []);
  };

  run(client, message, args) {
    const helpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('¡Hey! Soy Clarence y estoy para ayudarte a moderar y hacer mas ameno el servidor')
	.setURL('https://discord.com/api/oauth2/authorize?client_id=886025142893936711&permissions=8&scope=bot')
	.setAuthor('Voltriixz', 'https://instagram.fmad7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120373987_122004562771833_1626784336163721931_n.jpg?_nc_ht=instagram.fmad7-1.fna.fbcdn.net&_nc_ohc=0YkMJ0PgPtIAX977Wx1&edm=ABfd0MgBAAAA&ccb=7-4&oh=50c44fdfbaa5055102731a0d20950210&oe=61436D32&_nc_sid=7bff83')
	.setDescription('Menu de Ayuda')
	.setThumbnail('https://www.zjuegosgratis.com/wp-content/uploads/2019/03/Clarence.jpg')
	.addFields(
		{ name: 'Prefix', value: 'Mi prefijo actual es .' },
		{ name: 'Website', value: 'Actualmentestoy trabajando en ella', inline: false },
		{ name: 'Comandos', value: 'Para ver todos los comandos usa .commands', inline: false },
		{ name: 'Developer', value: 'Coded by <@391593061723144193>', inline: false },
		{ name: 'Links', value: 'Twitter: https://twitter.com/Voltriixz_ \n \n Support: ', inline: false },
	)
	.setImage('https://media.giphy.com/media/29HRgUQPdKBFQaOGbF/giphy.gif?cid=ecf05e47ztbktl8d7cp8q1vcn5ng1ri9khouebo9u6oinlah&rid=giphy.gif&ct=g')
	.setTimestamp()
	.setFooter('Clarence v1.0.1', 'https://www.zjuegosgratis.com/wp-content/uploads/2019/03/Clarence.jpg');

  message.channel.send(helpEmbed).catch(err => console.log(err));
    }
  } 
