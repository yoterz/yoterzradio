const ytdl = require('ytdl-core');
const Discord = require("discord.js")
const bot = new Discord.Client()
             var stream = 'http://27.254.142.208:8100/stream'
             var clash = 'https://www.youtube.com/watch?v=3CzIsRw74Kc'
          
bot.on("ready",() => {
    console.log('Ready...')

})

bot.on ("message", (msg) => {
    if (msg.content === "radio"){
        playradio(stream,"เปิดวิทยุ..สถานี RequestRadio.in.th")
    }  

    if (msg.content === "ใจเย็นเย็น"){
        console.log(clash)
        playsong(clash)
    }  
  
    if (msg.content.startsWith(".p")){
        let args = msg.content.split(' ').slice(1)
        console.log(args[0])
        playsong(args[0])
    }
    
    if (msg.content ==="end"){
          var voiceChannel = msg.member.voiceChannel
        if (voiceChannel) {
          voiceChannel.leave()
          sendEmbed("ปิดวิทยุ..")
        }
    }

 function sendEmbed(msgz){
        const embed = new Discord.RichEmbed()
        .setTitle(msgz)  //หัวข้อ
        .setColor(0x008000)   //ใส่สี
        .setTimestamp()  //เวลาด้านล่างสุดผ
         msg.channel.send({embed})
}


 function playradio(stream,msgz){        
    var voiceChannel = msg.member.voiceChannel
    if (voiceChannel) {
           voiceChannel.join()
           .then(connection => {
               let dispatcher = connection.playStream(stream)
               sendEmbed(msgz)
            })
          .catch(console.log);
      } else {
        msg.reply('คุณไม่ได้อยู่ในห้อง Voice Channel');
    }
}
     
function playsong(url){        
  var voiceChannel = msg.member.voiceChannel
    if (voiceChannel) {
           voiceChannel.join()

          .then(connection => {
               let stream = ytdl(url, { filter: 'audioonly' });
               let dispatcher = connection.playStream(stream)
               ytdl.getInfo(url, function(err, info) {
                    console.log(info.title) // "Adele - Hello"
                    sendEmbed(info.title)
                  });
            })
          .catch(console.log);
      } else {
        msg.reply('คุณไม่ได้อยู่ในห้อง Voice Channel');
    }
}
    
})

bot.login(process.env.BOT_TOKEN)

