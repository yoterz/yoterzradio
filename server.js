//const ffmpeg = require("ffmpeg-binaries");
//const opusscript = require("opusscript");
//const fs = require("fs");
const ytdl = require('ytdl-core');
const Discord = require("discord.js")
const bot = new Discord.Client()

bot.on("ready",() => {
    console.log('Ready...')

})


bot.on ("message", (msg) => {
    if (msg.content === "radio"){
      //console.log(msg.member.voiceChannel)
      var voiceChannel = msg.member.voiceChannel
      if (voiceChannel) {
            voiceChannel.join()
        
          .then(connection => {
            msg.reply('เปิดวิทยุ..');
             var stream = 'http://27.254.142.208:8100/stream'
             // var stream = ytdl('https://www.youtube.com/watch?v=JGwWNGJdvx8',{ filter: 'audioonly' })
             // var stream = '/home/discord/audio.mp3'
            const dispatcher = connection.playStream(stream);
                                   
          dispatcher.on("end", end => {
                 voiceChannel.leave();
            });
                
          })
          .catch(console.log);
      } else {
        msg.reply('คุณไม่ได้อยู่ในห้อง Voice Channel');
      }
     }
  
    if (msg.content ==="end"){
          var voiceChannel = msg.member.voiceChannel
        if (voiceChannel) {
          voiceChannel.leave()
          msg.reply('ปิดวิทยุ..');
        }
    }

})

bot.login(process.env.BOT_TOKEN)

