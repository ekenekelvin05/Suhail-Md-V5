const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348064953700";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348064953700";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_43_09_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODcsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTAsXG4gICAgICAgIDYzLFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODcsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOCxcbiAgICAgICAgOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMyxcbiAgICAgICAgNSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMjM2LFxuICAgICAgICA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxODIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICA0MSxcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk3LFxuICAgICAgICA0MyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMixcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGbkRQNVFNUUVwVGpPYy9zYUpUTm1ORmVpaDhMNW15Q1Q2Y0pXYkxCZEN3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjQ5NTM3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRDE3OERGMDhCRUIzNERDOUMzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTgyNDYyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgwNjQ5NTM3MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNzA1ODBEMjJEQkM2QzcxQzkyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTgyNDYyOVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyOXBNR2xrelEtTzhNdU5ZbnZhZW5nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjNmZjljYWUzLWM2NDItNGQ4YS1iNGI4LTg4OGZmYzk2OTYzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMzIsXG4gICAgICAxMTUsXG4gICAgICAyNyxcbiAgICAgIDExLFxuICAgICAgMTc1LFxuICAgICAgMjI5LFxuICAgICAgMjUzLFxuICAgICAgMjIxLFxuICAgICAgMTA3LFxuICAgICAgMTg2LFxuICAgICAgMTksXG4gICAgICAxODEsXG4gICAgICAyMTgsXG4gICAgICAyMTUsXG4gICAgICAxMTUsXG4gICAgICAxNzksXG4gICAgICAxOTYsXG4gICAgICAyNDksXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NixcbiAgICAgIDE0OSxcbiAgICAgIDE5OSxcbiAgICAgIDIxNCxcbiAgICAgIDI1MyxcbiAgICAgIDQwLFxuICAgICAgMjA5LFxuICAgICAgMjMsXG4gICAgICAxODAsXG4gICAgICAyNDAsXG4gICAgICAyNDAsXG4gICAgICAxODAsXG4gICAgICAxMzMsXG4gICAgICAyMDcsXG4gICAgICAxNTYsXG4gICAgICAxOTYsXG4gICAgICAxMzQsXG4gICAgICAxMTgsXG4gICAgICAyNixcbiAgICAgIDYzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2E2OFprSUVPdjg5N1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3c0IzYnl5S2hpUzBzOG5tcU9oZ3M3RDltY2k1SGh6amcvZzVXWWlNSkZRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklqR0taU0x4SUJhOEpuSXpncU9YVWpVd3hna3RTR1RDZHo1WFlnR1czR3BYK3oxUzYwRTdoa0Mrdm5mTjhQbzQ4c0cxVzEyS2dRUy81cmpWU09GdkJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIktVOWdiN0tSc2FUY2h6VVEwSUgvVDhvZXZoYmxnWDNuSmdaTDdsRTcvay9jeGFFckhHNVRtVmdYbWhZTVB3QmhlSTRkdDRHUHBNM01MRHhhNmJPU0J3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2NDk1MzcwMDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzM3ODAyMTE3Njk1ODQ6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJPbGFtaWRlXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDY0OTUzNzAwOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTgyNDYyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUIzZFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQjNkLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVXQ0SHYyTFhyV0R6OE9pdDlqZzRSTXVBRjN1RGhGdXU1b0h2ZEVUdTRkbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjAxNzcxMzAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjU4MjQ2MjQ0MjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
