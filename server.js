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
      // msg.reply('เปิดวิทยุ..');
       msg.channel.send('@here เปิดวิทยุ..สถานี RequestRadio.in.th');
        playradio()
        
function playradio(){  
      var voiceChannel = msg.member.voiceChannel
      if (voiceChannel) {
            voiceChannel.join()
        
          .then(connection => {
          
                
             var stream = 'http://27.254.142.208:8100/stream'
             // var stream = ytdl('https://www.youtube.com/watch?v=JGwWNGJdvx8',{ filter: 'audioonly' })
             // var stream = '/home/discord/audio.mp3'
            const dispatcher = connection.playStream(stream)
                                   
          dispatcher.on("end", end => {
                  playradio()
                  console.log('เริ่มเล่นใหม่...')
            });
                
          })
          .catch(console.log);
      } else {
        msg.reply('คุณไม่ได้อยู่ในห้อง Voice Channel');
      }
     }
}
    if (msg.content ==="end"){
          var voiceChannel = msg.member.voiceChannel
        if (voiceChannel) {
          voiceChannel.leave()
            msg.channel.send('@here ปิดวิทยุ..');
          //msg.reply('ปิดวิทยุ..');
        }
    }

})

bot.login(process.env.BOT_TOKEN)

