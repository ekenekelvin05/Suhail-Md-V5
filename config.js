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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347083725176";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347083725176";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_00_09_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDU5LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNixcbiAgICAgICAgNjAsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDY5LFxuICAgICAgICAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICA0MixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM4LFxuICAgICAgICA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA4OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NixcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMixcbiAgICAgICAgMjIwLFxuICAgICAgICA4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTd1ZnakExb1pkVkRMV1RyTzlvMHlaVjVmczR3Ym8rVmx3RFRVaHBJVEtJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODM3MjUxNzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBRDlDRkU2NDZGMEE2OTlCMzAyXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTgxODQ0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODM3MjUxNzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQTBBREFGMDFBMkQxMDNFMzQ4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyNTgxODQ1M1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEU0JKbDhUZVQwT3djTFlYeGl1NGJnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmMjBiNjNiLWFmZDktNDIyZC05YmZjLWM5ZTVlZjJkNGYzMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDAsXG4gICAgICAzMCxcbiAgICAgIDUwLFxuICAgICAgMTAsXG4gICAgICAxMjksXG4gICAgICA0NixcbiAgICAgIDE0NixcbiAgICAgIDE2OCxcbiAgICAgIDE1NyxcbiAgICAgIDE2OSxcbiAgICAgIDIwMyxcbiAgICAgIDE3OSxcbiAgICAgIDM4LFxuICAgICAgMjQ3LFxuICAgICAgMjQzLFxuICAgICAgMjQyLFxuICAgICAgMTcxLFxuICAgICAgMzgsXG4gICAgICAxLFxuICAgICAgMTEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNSxcbiAgICAgIDE5MCxcbiAgICAgIDYyLFxuICAgICAgNzksXG4gICAgICAxNjIsXG4gICAgICAxMjEsXG4gICAgICAxNzcsXG4gICAgICA4MSxcbiAgICAgIDE4MyxcbiAgICAgIDIxMyxcbiAgICAgIDIxLFxuICAgICAgMTYxLFxuICAgICAgNTMsXG4gICAgICAyNDksXG4gICAgICA3MixcbiAgICAgIDE0NixcbiAgICAgIDEzNSxcbiAgICAgIDIyMixcbiAgICAgIDE2LFxuICAgICAgNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFg0NjlOSjVcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODM3MjUxNzY6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1ODEwNjMzNjE0MTMzNToyMUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJSYW1vbmHwn5OcXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS1NvK3NzS0VNdk05N1lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQeVFVa0pGLy91MmZOMVlWUkVkYS9NaWdpV3FScVVsRVVzS3ZOd2k2V1RzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjEwWHVZb3YrUk4zQ3V5elBkbS9QNk1GZzJtODFrRE9RcG0vYXRTbXFLSWlXUkwwOHVLbE9FVVZib0FSd0Ntc0NBUXIyZnJWQVZ5K1pxOGM2czlPSkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjNNY3BncmFSOVdTbHV3UDM3YUdkeEpzekk4cDdmWHU3ZE9GUVFweW9qck1wRk9kMGhaeGZiaDZDbmh5dVdBZktER0lNTzFmY1V6MTFIL1Ixc21EQmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODM3MjUxNzY6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU4MTg0NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIVnlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhWeS5qc29uIjogIntcImtleURhdGFcIjpcIjVrKy9qeFEraHduM2FEOVVaNklhT0NBTGhncUtLdTZ1WmNRWGxaVDhKbUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjg0MzY0NDk2NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzI1ODE4NDQ3NjU1XCJ9Igp9"


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "$",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "HOT PENIS😈💀",
  packname: process.env.PACK_NAME || "Corizo",
  botname : process.env.BOT_NAME  || "CORIBOT,
  ownername:process.env.OWNER_NAME|| "Corizo",


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
