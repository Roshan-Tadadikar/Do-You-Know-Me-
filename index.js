var readlineSync = require("readline-sync"); 

var score =0;

var userName = readlineSync.question("What's your name ");
console.log("Welcome " + userName + " Do you know Roshan? ");

var highscore =[
  {
    name:"Roshan",
    score:10,
  },

  {
    name: "Ash",
      score:9,
  },
]

function play(question, answer){
  var myans  = readlineSync.question(question);

  if(myans.toLowerCase === answer){
    console.log("right!!")
    score++;
  }
  else{
    console.log("you're wrong!!!")
  }

  console.log("current score: ", score);
  console.log("----------------------")
}



function myfavFood(question, answer){
  var myfood  = readlineSync.question(question);

  if(myfood === answer){
    console.log("you're right, Roshan loves chicken biryani, if you make some on someday please invite him!!")
    score++;
  }
  else{
    console.log("you're wrong mate!!!")
  }

  console.log("current score: ", score);
  console.log("----------------------")
}


var quest1 = {
  quest: "Where do I live?",
  ans: "Goa",
}

var quest2 = {
   quest: "My fav car?",
  ans: "range rover",
}

var list = [quest1,quest2];

for(var i=0;i<list.length;i++){
  play(list[i].quest, list[i].ans);
}

myfavFood("What's Roshan's fav food?", "chicken biryani");


console.log("YAY!!, you scored : ", score)
console.log("The best score till now are: ");
for(var i=0;i<highscore.length;i++){
  console.log(highscore[i].name + ": " + highscore[i].score);
}

console.log("------------------------");
console.log("If you're sore is the best, then send me the screenshot");
