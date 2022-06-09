//opening
score=0;
console.log("Hello!")
var readlineSync=require("readline-sync");
var username=readlineSync.question("What is your name? ");
console.log("Welcome "+username+"!");
console.log("----------------------------------------");
console.log("To pass a level you need the score as 3 atleast.");
console.log("----------------------------------------");

function play(question,answer){
  var useranswer=readlineSync.question(question)
  if(useranswer.toUpperCase()===answer.toUpperCase()){
    console.log("You are right!")
    score=score+1;
    console.log("Your score is "+score+".")
  }else{
    console.log("You are wrong!")
    score=score;
    console.log("Your score is "+score+".")
  }
  console.log("----------------------------------------")
}

//level 1
console.log("LEVEL-1");
var questions1=[{
  question:"Who was the writer of the book ‘Hind Swaraj’? ",
  answer:"mahatma gandhi"
},{
  question:"Khilafat Committee was formed in 1919 in the city of? ",
    answer:"bombay"
},{
  question:"The Non-cooperation Khilafat Movement began in which year? ",
    answer:"1921"
},{
  question:"The form of demonstration used in the Non-cooperation Movement in which people block the entrance to a shop, factory or office is called? ",
    answer:"picketing"
},{
  question:"Where did Mahatma Gandhi start his famous ‘Salt March’ on 12th March 1930? ",
    answer:"sabarmati"
}]
for(i=0;i<questions1.length;i++){
  var level1=questions1[i];
  play(level1.question,level1.answer);
}


  console.log("Your final score is "+score+".")
  console.log("----------------------------------------")

if(score<3){
  console.log("You fail!");
  console.log("Retrying")
  console.log("----------------------------------------")
}else{
  console.log("You pass!");
  console.log("----------------------------------------");
}

for(i=0;i<1000;i++){
  if(score<3){
    score=0;
  for(i=0;i<questions1.length;i++){
  var level1=questions1[i];
  play(level1.question,level1.answer);
  }
}else{
}
}
  
//level-2
score=0;
console.log("LEVEL-2");
var questions2=[{
  question:"Who made the famous remark ‘When France sneezes, the rest of Europe catches cold’? ",
  answer:"metternich"
},{
  question:"The Treaty of Constantinople was signed in which year? ",
    answer:"1832"
},{
  question:"The famous Italian Revolutionary Giuseppe Mazzini was born in which place? ",
    answer:"genoa"
},{
  question:"Giuseppe Mazzini founded the secret underground society named ‘Young Europe’ in which place? ",
    answer:"berne"
},{
  question:"Which group believed that established, traditional institutions of state and society should be preserved? ",
    answer:"conservatives"
}]
for(i=0;i<questions2.length;i++){
  var level2=questions2[i];
  play(level2.question,level2.answer);
}
console.log("Your final score is "+score+".");
console.log("----------------------------------------")

if(score<3){
  console.log("You fail!");
  console.log("Retrying")
  console.log("----------------------------------------")
}else{
  console.log("You pass!");
  console.log("----------------------------------------");
}

for(i=0;i<1000;i++){
  if(score<3){
    score=0;
  for(i=0;i<questions2.length;i++){
  var level2=questions2[i];
  play(level2.question,level2.answer);
  }
}else{}
}

