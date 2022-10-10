

module.exports = async (senderNumber, prefix,command) => {


global.mess = {
wait: 'Tunggu deck!',
search: 'Waittt...',
scrap: '*Memproses...*',
success: 'Sukses',
limit: `Limit lu abis deck!`,
claimOn: `Sabar deck!`,
wrongFormat: 'Cari apa luu deck?',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},

block:{
Bowner: `Maaf kak command 「 *${command}* 」 telah di block oleh owner`,
Bsystem: `Command 「 *${command}* 」telah di block oleh owner`
},

 only: {
prem : 'Beli premium dulu ke owner!',
group: 'Fitur untuk Group!',
ownerB: 'Siapa lu? ini bukan bot luu!',
owner: 'Siapa lu? ini bukan bot luu!',
admin: 'Jn sok berkuasa, luu bukan admin deck!',
Badmin: 'Bot bukan admin!'
 }
  
 }

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
