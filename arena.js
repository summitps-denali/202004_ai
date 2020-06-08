var bot = require("./bot"); //Don't change this
bot.hostURL = 'http://TEACHERWORKSPACENAME-TEACHERUSERNAME.c9users.io'; //Put the server url/IP adress here!
bot.key = "0yj2g1fqugsm"; //Set your bot key to this string!
//bot.key = "ectqjm8ck3b"; //Set your bot key to this string!

/* TEST CODE */
bot.testHostURL = 'http://127.0.0.1:8080'; //Put the server url/IP adress here!
//  bot.testHostURL = 'http://STUDENTWORKSPACENAME-STUDENTUSERNAME.c9users.io';  //  stay tuned for this!
bot.testKey = "testrun"; //Do Not Change This Key!
bot.isTest = true;
/* End Test Code */
/***************************************************/
//Write your code in this function!!!

var lastFlower = -1;

bot.direction = function(game) {
    /* ~~~ Determines and Organizes Data About The Game ~~~ */
    var enemyBots = [];
    var enemyBases = [];
    var myDir = "none";

    var dirs = ["north", "east", "south", "west"];

    for (let i = 0; i < game.players.length; i++) { //Adds all other bots to the enemyBots array.
        if (game.players[i].id != game.myBot.id) {
            enemyBases.push(game.bases[i]); //Adds all other bases to the enemyBases array
            enemyBots.push(game.players[i]);
        }
    }
    
    var enemyMostPollen = enemyBots[0];
    for (let i = 0; i < enemyBots.length; i++) {
        if (enemyBots[i].pollen > enemyMostPollen) {
            enemyMostPollen = enemyBots[i];
        }
    } 
    
    var mostFlower = game.flowers[0];
    for (var i = 0; i < game.flowers.length; i++) {
        if (mostFlower.pollen < game.flowers[i].pollen) {
            mostFlower = game.flowers[i];
        }
    }
    
    var bestFlower = game.flowers[0];
    for (var i = 0; i < game.flowers.length; i++) {
        if ((bestFlower.pollen / bot.findDistance(game.myBot.pos, bestFlower.pos,true)) < (game.flowers[i].pollen / bot.findDistance(game.myBot.pos, game.flowers[i].pos,true))){
            bestFlower = game.flowers[i];
        }
    }
    
    console.log(lastFlower);
    
    for (var i = 0; i < game.flowers.length; i++) {
        if (bot.findDistance(game.myBot.pos, game.flowers[i].pos,true) < 2 && lastFlower != i && bestFlower.findDistance(game.myBot.pos, bestFlower.pos,true) > 30 && game.flower[i].pollen > 15){
            bestFlower = game.flowers[i];
            lastFlower = i;
        }
    }
    
    
    
    var stepsToBase = bot.findDistance(game.myBot.pos, game.myBase.pos);
    var turnsLeft = game.totalTurns - game.turn;

    /* ~~ This code decides what to do ~~ */
    var task = "flower"

    if (game.myBot.pollen >= 200) {
        task = "myBase";
    }
    else if (stepsToBase * game.players.length >= turnsLeft) {
        task = "myBase";
    }
    else if (game.myBot.pollen < enemyMostPollen.pollen && bot.findDistance(game.myBot.pos,enemyMostPollen.pos,true) < 5) {
        task = "steal";
    }

    /* ~~This code decides how to do it ~~ */
    if (task == "none") {
        myDir = dirs[Math.floor(Math.random() * 4)];
    }
    
    
    else if (task == "flower") {
        myDir = bot.nextStep(game.myBot.pos, bestFlower.pos);
    } 
    
    else if (task == "myBase") {
        myDir = bot.nextStep(game.myBot.pos, game.myBase.pos);
    } 
    
    else if (task == "steal") {
        myDir = bot.nextStep(game.myBot.pos, enemyMostPollen.pos);
    } 


    return myDir;
} //DO NOT CHANGE ANYTHING BELOW THIS LINE
bot();
