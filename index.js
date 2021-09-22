var readlineSync = require("readline-sync");

var score = 0;
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer){
    console.log("you were right!");
    score = score + 1; 
  } else{
    console.log("you were wrong!");
    score = score - 1;
  }

}

//calling the function
play("where do i work? " , "microsoft");
play("where do i live? ","bangalore");
play("where is my fav icecream flavour? ", "chocolate");
console.log("your score is: ", score);



 
 