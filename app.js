
//const Platform = require("nasim-bot");
/*
Name: Saebot
Creator: Saeb Khanzadeh http://skhanzadeh.ir saeb.bnam@gmail.com 
description: this is a Nodejs app for Bale.ai to Create bot
Update: Jan/21 2017
Version 0.22.0
https://libraries.io/npm/nasim-bot
https://www.npmjs.com/package/nasim-bot
*/
const Platform = require("./index");
 
const NasimBot = Platform.NasimBot;
const TextMessage = Platform.TextMessage;
const FileMessage = Platform.FileMessage;
const User = Platform.User; 
const Conversation = Platform.Conversation;
let bot = new NasimBot("BOT TOKEN");
bot.hears(['whats your name', 'name', 'name?'], (message, responder) => {
    responder.reply("نام من «بات صائب» است!");
}); 
bot.hears(['@', 'http', '.com', '.ir', '.net', '.org'], (message, responder) => {
    responder.reply("خواهشن اسپم نکنيد \n @saebkhanzadeh"); 
}); 
bot.hears(['!کانال مرجع'], (message, responder) => {
    responder.reply("نشانی کانال مرجع: @gacnasim"); 
}); 
bot.hears(['!راهنما'], (message, responder) => {
    responder.reply("سلام\nشما درخواست راهنما کردید\n[!کانال مرجع](send:!کانال مرجع) = نشانی های کانال مرجع\n[!قوانین](send:!قوانین) = قوانین گروه هایی که بات در آن حضور دارد\n[!سازنده بات](send:!سازنده بات) = درباره سازنده بات\n[/start](send:/start) = آغاز بات\n@saebot"); 
}); 
bot.hears(['!سازنده بات'], (message, responder) => {
    responder.reply("کسی نیست جز:  \n @saebkhanzadeh  \n http://skhanzadeh.ir  \n* عمر این بات تا 27 ژانویه می باشد*"); 
}); 
bot.hears(['/start'], (message, responder) => {
    responder.reply("سلام \n *بات صائب* آغاز شده است. \n این بات بر رو سرور های رایگان ساخته شده است. \n امیدواریم با پیشرفت «بله» بات های بهتری بسازیم. \n سازنده:  \n @saebkhanzadeh  \n http://skhanzadeh.ir  \n عمر این بات تا 27 ژانویه می باشد\n\ *راهنما* \n[!کانال مرجع](send:!کانال مرجع) = نشانی های کانال مرجع\n[!قوانین](send:!قوانین) = قوانین گروه هایی که بات در آن حضور دارد\n[!سازنده بات](send:!سازنده بات) = درباره سازنده بات\n[/start](send:/start) = آغاز بات\n[!راهنما](send:!راهنما) = آغاز بات\n@saebot"); 
}); 
bot.hears(['!قوانین', '!قوانين'], (message, responder) => {
    responder.reply("1. لینک به اشتراک نگذارید  \n 2. اگر می خواهید با کسی صحبت کنید پاسخ بدهید و از منشن کردن بپرهیزید  \n 3. توهین نکنید  \n 4. صحبت های سیاسی نکنید"); 
}); 
bot.hears(["سلام", "سلام علیکم"], (message,responder) => {
    // Short version 
    responder.reply("علیکم السلام، خوش آمدید. از گفتگو در شرایط مناسب لذت ببرید");
 
    // Standard version 
    let msg = new TextMessage("علیکم السلام، خوش آمدید. از گفتگو در شرایط مناسب لذت ببرید", responder.peer);
    bot.send(msg);
});
var http = require('http');
var server = http.createServer(function(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('This bot is special for Bale.ai! Zenede Bod Iran.change22');  
}); 
server.listen(process.env.PORT); 
