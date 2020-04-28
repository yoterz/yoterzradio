const Discord = require("discord.js")
const translate = require('translate-google')

var bot = new Discord.Client()

var channelName = "general"
var channelID = '574551663474507777'



bot.on("ready",function(){
    console.log('List GUilds : '+bot.guilds.array())
    console.log('Name Channel : '+channelName)
    console.log("Ready.....................")
})

setInterval(()=>status(), 60000);


bot.on("message", (msg) => {

  
     
  if (msg.content.startsWith("!")){
       if (msg.channel.id === channelID){ 
        text = msg.content.slice(1).split('$')
  
                      translate(text, {to: 'en'}).then(engtext => {
                          
                            translate(text, {to: 'th'}).then(thtext => {
                             
                                  translate(text, {to: 'ko'}).then(kotext => {

                                       msg.channel.send("```\n"+engtext+"\n"+thtext+"\n"+kotext+"```")

                                  }).catch(err => { console.error(err)})

                            }).catch(err => {console.error(err)})

                      }).catch(err => {console.error(err)})

                      

                      
                      
        
        }
    }   


    
})

function status(){     
    bot.user.setGame("แปลภาษา")
 
}

bot.login(process.env.BOT_TOKEN)
