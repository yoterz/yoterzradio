const Discord = require("discord.js")
const translate = require("google-translate-api")

var bot = new Discord.Client()




bot.on("ready",function(){
    console.log('List GUilds : '+bot.guilds.array())
    
    console.log("Ready.....................")
})

setInterval(()=>status(), 60000);


bot.on("message", (msg) => {

  
     
    if (msg.content.startsWith("!")){
      
        text = msg.content.slice(1).split('$')
  
                      translate(text, {to: 'en'}).then(eng => {
                          
                            //translate(text, {to: 'th'}).then(thtext => {
                             
                                 // translate(text, {to: 'ko'}).then(kotext => {

                                       msg.channel.send("```\n"+eng.text+"\n"+thtext+"\n"+kotext+"```")

                                 // }).catch(err => { console.error(err)})

                           // }).catch(err => {console.error(err)})

                      }).catch(err => {console.error(err)})


    }   


    
})

function status(){     
    bot.user.setGame("แปลภาษา")
 
}

bot.login(process.env.BOT_TOKEN)
