var answerCount = 0;

function playGame(){
  var userName = prompt ("Hey who you!");
  alert ("Hey " + userName + "! How you livin !");
  askQuestion("How long have I been teaching?", 10);
  askQuestion("What school did I attend?", "NOVA" );
  askQuestion("What is my favorite date?", "JULY 24");
  askQuestion("Name my hobbies", "SEWING, JEWELRY, SHOPPING");
  document.getElementById("results").innerHTML += "<br><br>" + " You guessed " + answerCount + " Correct!";
}

function askQuestion(question, answer){
  var response = prompt (question);
  if (response.toUpperCase() == answer){
    document.getElementById("results").innerHTML += "<br><br>" + question + " You guessed " + answer + "<br>Congratulations you got it!";
    answerCount++;
  }else{
    document.getElementById("results").innerHTML += "<br><br>" + question + " You guessed " + answer + "<br>Sorry Charlie you missed it!";
  }
}
