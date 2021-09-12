const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js");

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('socials', 'information', []);
  }

  async run(client, message, args) {
    
    //TWITTER
    const twitterEmbed = new Discord.MessageEmbed()
    .setTitle('Voltriixz_ Twitter')
    .setURL('https://twitter.com/Voltriixz_')
    .setThumbnail("http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png")
    .setColor("#07a8ed")
    .addField("Sigue a Voltriixz en Twitter", "Tweets de Voltriixz_ (Click the link above :arrow_up:)")
    .setTimestamp()
    .setFooter("Voltriixz", "https://pbs.twimg.com/profile_images/1427040289437462534/1HnK9Bsg_400x400.jpg")
    
    //INSTAGRAM
    const instagramEmbed = new Discord.MessageEmbed()
    .setTitle('Adrian \'Voltriixz\' Lopez Instagram')
    .setURL('https://instagram.com/aadriiianlopezz_/')
    .setThumbnail("http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png")
    .setColor("#f55f02")
    .addField("Sigue a Voltriixz en Instagram", "Feed Instagram de Adrian Lopez (Click the link above :arrow_up:)")
    .setTimestamp()
    .setFooter("Voltriixz", "https://instagram.fmad7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120373987_122004562771833_1626784336163721931_n.jpg?_nc_ht=instagram.fmad7-1.fna.fbcdn.net&_nc_ohc=0YkMJ0PgPtIAX977Wx1&edm=ABfd0MgBAAAA&ccb=7-4&oh=50c44fdfbaa5055102731a0d20950210&oe=61436D32&_nc_sid=7bff83")
    
    //YOUTUBE
    const youtubeEmbed = new Discord.MessageEmbed()
      .setTitle('Voltriixz Youtube')
      .setURL('https://www.youtube.com/c/Voltriixz')
      .setThumbnail('https://pngimg.com/uploads/youtube/youtube_PNG102356.png')
      .setColor("#f70202")
      .addField('Check out Voltriixz\'s Youtube Channel.','NEW Voltriixz\'s Highlights (Click the link above :arrow_up:)')
      .setTimestamp()
      .setFooter("Voltriixz", "https://yt3.ggpht.com/J8hGJ9hpK2LJSU5N9hM0orWaT48H0We3gsNQRtNZJfxHd63lAb563gvK2IUmLqCteBqCZ_kk1Q=s600-c-k-c0x00ffffff-no-rj-rp-mo")
    
      //DISCORD SERVER
      const discordEmbed = new Discord.MessageEmbed()
      .setTitle('Join Viva Ello')
      .setURL('https://discord.gg/JcFnaWJ8Rk')
      .setThumbnail("https://toppng.com/uploads/preview/discord-logo-png-discord-ico-11562937135cilktsftux.png")
      .setColor("#5404cc")
      .addField("Unete Viva Ello", "Comunidad para jugar, programar, etc. (Click the link above :arrow_up:)")
      .setTimestamp()
      .setFooter("Viva Ello", "https://upload.wikimedia.org/wikipedia/commons/7/76/Ello-logo.png")
    
    message.channel.send(twitterEmbed).catch(err => console.log(err));
    message.channel.send(instagramEmbed).catch(err => console.log(err));
    message.channel.send(youtubeEmbed).catch(err => console.log(err));
    message.channel.send(discordEmbed).catch(err => console.log(err));
    }
}