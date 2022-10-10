global.language = "id"
global.nomerOwner ="6283851929130"
global.nomerOwner2 = "6285748890504"
global.runWith = "Replit"
global.ownerName = "Margareta"
global.botName = "RettXD" 
global.sessionName ="session"
global.setmenu ="gif"
global.docType = "docx"
global.Qoted = "ftoko"
global.baileysMd = true
global.multi = true
global.nopref = false
global.allpref = false
global.prefa = ".","/","#","!"
global.fake = "jn liatt, entr naksir!"
global.Console = false
global.autorespon = false
global.copyright = "© Margareta_" 
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Affah liat-liat??"
global.packName = "punya MARGARETA"
global.authorName = "⁉️"
global.replyType = "web"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = false
global.autoSticker = false
global.gamewaktu = 60
global.limitCount = 10
global.gcount = {
prem : 1000000,
user : 8
} 





const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






