const fs = require('fs-extra');
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname + '/config.env' });

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '2347045035241';  
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Xcelsama:Xcel@xcelsama.qpklf.mongodb.net/?retryWrites=true&w=majority&appName=Xcelsama";
global.port = process.env.PORT || 5000;
global.email = 'ms.excel.amadi@gmail.com';
global.github = 'https://github.com/Excelsama/BOT-X';
global.location = 'Rivers Nigeria';
global.gurl = 'https://instagram.com/xcel_sama/'; 
global.sudo = process.env.SUDO || "2349112171078";
global.devs = '2347045035241';
global.website = 'https://github.com/Excelsama/BOT-X';
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3f3ae4aace2d012c11509.jpg';

module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05lUFRLblVWQm0zbTI2aTR2enhMZWV6clRVMndNSFlaT3Roc1JPYzhHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWthUlZIU2FuTU52S0VzOFdpTWJ0VXdneU5kaDM3a0tGbE9QbGR1ME9Ydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwRFFsRnJRcU90amZaS2Y3T25zcS9kK3RrNm9LYnBVSVZ6ZWtaZWU0OEVJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4TWFLNm5mNzMrSG1lbEtrNTQ3OEJwUGpndFd5U1pXRVJRek4xTHF4a0dzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQdVBPd2ZDQXpNNHRLaWVMQXo5bGtwMFI0dzZYUU10ZUYvWXQ4M3JGRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtzMDgyNlBZbks5QVY1VUtQY1FscVI3bmhLeE5PcHROR1JxNWtZUFFobjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdvbzlBMDBSd3pFakZ6cW12VTA2OGlyM3E2YnZoQnZoU3VqQTRNcFlYVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzVETno2aUVhNi8rVEZoZDhmN2FpTk5hcEpzdVVtUk5PenpwaVE1UXEyYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik54dUtMRXBQVDY4OHdoYlRPYjQ5UmJyQlZxdGl5RGtUMFMzaXNHSkV2dGRxUGlmZnlzNzVab2xCSzJyRjZpTytoN3dTaUpTdmNDZkJEVzdXc1FhdEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IkR0aWFGcE9WcG5rY2FEYWNPbE45MEpuMVdWUnlRQjU1UXRxelQzYWlFTlE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImlqQWZ2STlHUzV5cVllNDlRbVpVeHciLCJwaG9uZUlkIjoiYzg2YmU0N2YtN2I3OC00NWFhLThjNDEtN2Q1MjI0NjM3ZGM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkppdnhsN1ozUTBaMjF4d05QRzB4aWxzclI2ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQckV6cDU5K2ZlQmw5VEc5NlVjYzZ5MCsvMFU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNTdCN1pZVzYiLCJtZSI6eyJpZCI6IjIzNDgwNjAyOTQzMTQ6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVB2M2YwRkVLckNtYmtHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTmF1ODdPTHF4clBMQ05hZ0pOZGdScGZwTGJBeTBFSGJaUGFadVFZRmswcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiU0Z4RWJoSmJIM0ttS0dEUkd1d212K0hkQVdnZDY2ZUxIL082NUxZbFcvZGh1cS9lbkgyS3Z6OGdiRndEaTVJUGpUK0RrRzA1bUJocVBrc1ordUl2RHc9PSIsImRldmljZVNpZ25hdHVyZSI6InlTU0VtQUNxY1NUeVhRR25BeE84VlNYcHF1TkZJR2FiR1JWYnljc3RNYjZEUnFBYW1yblM4SDB5UXpqZCs0ekFmaHgwV0NsdjlRODNFZUhaZmxKSkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2MDI5NDMxNDo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRXcnZPemk2c2F6eXdqV29DVFhZRWFYNlMyd010QkIyMlQybWJrR0JaTkwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzA1Njg1MDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQkU1In0=",  // Put Your Session ID Here
  author: process.env.PACK_AUTHER || 'xcelsama',
  packname: process.env.PACK_NAME || 'BOT-X',

  botname: process.env.BOT_NAME || "BOT-X",
  ownername: process.env.OWNER_NAME || 'Excel',

  auto_read_status: process.env.AUTO_READ_STATUS || true,
  autoreaction: process.env.AUTO_REACTION || false,
  antibadword: process.env.ANTI_BAD_WORD || 'nbwoed',
  alwaysonline: process.env.ALWAYS_ONLINE || false,
  antifake: process.env.FAKE_COUNTRY_CODE || '234',
  readmessage: process.env.READ_MESSAGE || false,
  auto_status_saver: process.env.AUTO_STATUS_SAVER || false,
  HANDLERS: process.env.PREFIX || '*',
  warncount: process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || false,
  levelupmessage: process.env.LEVEL_UP_MESSAGE || false,
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',

  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
 autobio: process.env.AUTO_BIO || false,
 caption: process.env.CAPTION || "",
 OPENAI_API_KEY: process.env.OPENAI_API_KEY || false,
 heroku: process.env.heroku || false,
 HEROKU: {
 HEROKU: process.env.HEROKU || false,
 API_KEY: process.env.HEROKU_API_KEY || '',
 APP_NAME: process.env.HEROKU_APP_NAME || ''
  },

  VERSION: process.env.VERSION || 'v2.0',
  LANG: process.env.UI|| 'BOT-X',
  WORKTYPE: process.env.WORKTYPE || 'public'
};

// Watch for file changes and reload
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Updated '${__filename}'`);
  delete require.cache[file];
  require(file);
});
