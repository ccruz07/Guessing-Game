var answerCount = 0;
//var userName = prompt ("Hey who you!");
alert ("Hey " + userName + "! How you livin !");

function playGame(){
  askQuestion("Hey who you!", "userName");
  askQuestion("How long have I been teaching?", 10);
  askQuestion("What school did I attend?", "Nova" );
  askQuestion("What is my favorite date?", "July 24");
  askQuestion("Name my hobbies", "Sewing,Jewelry,Shopping");
  var finalCount = alert("Good job you guessed " + answerCount + " correct");
}

function askQuestion(question, answer){
  var response = prompt (question);
  if (response == answer){
    alert("CORRECT!");
    answerCount++;
  }else{
    alert("Sorry Charlie!");
  }
}
