/*
Script X-Crasher
By DanuZz

Site: https://www.movanest.xyz
*/

//~~~~~Setting Global~~~~~//

global.session_id = "Ovl-MD_gXcL9yVg_SESSION-ID" //Input your session id like deploy with railway or heroku. | If you deploy with pterodactyl panel don't add session id.
global.prefix = '.' // bot prefix
global.owner = ["221785430513"] // Add Your Owner number
global.bot = "221785430513" // Add Your Bot number
global.namabot = "X-Crasher" // Add Your Bot name
global.namaown = "ZIZOU" // Add Your Bot owner name
global.workType = "privé" // public, private, groups, inbox
global.anticall = true // Anti Call Feature

//~~~~~Status Updated~~~~~//
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
