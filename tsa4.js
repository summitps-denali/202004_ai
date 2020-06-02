var bot = require("./bot_a");   //  REQUIRED

//  Arena Server - likely these value are obsolete, check for new ones
bot.hostURL = 'http://do01.zaptech.org:8080';
bot.key = "76gryq5rk5h";        
//  Arean Server - end

/*  TEST  */
bot.isTest = false; //  false means disabled test, run against arena server
bot.testHostURL = 'http://127.0.0.1:8080';
bot.testKey = "testrun";
/*  TEST - end  */

bot.direction = function(game) {
    //  Write your code in this function!!!
    var dirs = ["north", "east", "south", "west"];
    var myDir = dirs[Math.floor(Math.random() * 4)];
    return myDir;
}

bot();  //  REQUIRED
