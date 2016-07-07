var answerCount = 0;
var userName = prompt ("Hey who you!");
alert ("Hey " + userName + "! How you livin !");

function playGame(){
  teaching();
  school();
  number();
  var finalCount = alert("Good job you guessed " + answerCount + " correct");
}

function teaching(){
  var years = prompt ("How long have you been teaching?");
  if (years > 10){
    alert("CORRECT!");
    answerCount++;
  }else{
    alert("Sorry Charlie!");
  }
}

function school(){
  var schoolName = prompt ("What school did you attend?");
  if (schoolName == "Nova" || school == "SUNY"){
    alert ("CORRECT");
    answerCount++;
  }else{
    alert ("Sorry Charlie!");
  }
}

function number(){
  var number = prompt ("What is my favorite number?");
  if(number == "July 24"){
    alert ("CORRECT!");
    answerCount++;
  }
}
