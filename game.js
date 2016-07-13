var answerCount = 0;

function playGame(){
  var userName = prompt ("Hey who you!");
  alert ("Hey " + userName + "! How you livin !");
  askQuestion("How long have I been teaching?", 20);
  askQuestion("What school did I attend?", "NOVA" );
  askQuestion("What is my favorite date?", "JULY 24");
  askQuestion("Name my hobbies", "SEWING, JEWELRY, SHOPPING");
  document.getElementById("results").innerHTML += "<br><br>" + " You guessed " + answerCount + " Correct!";
  var DOM_img = document.createElement("img");
        DOM_img.src = "http://pix.iemoji.com/lg33/0528.png";
          document.getElementById("results").appendChild(DOM_img);

}

function askQuestion(question, answer){
  var response = prompt (question);
  if (response.toUpperCase() == answer){
    document.getElementById("results").innerHTML += "<br><br>" + question + " You guessed " + answer + "<br>Congratulations you got it!";
    document.getElementById("results").className= "results" ;
    answerCount++;
  }else{
    document.getElementById("results1").innerHTML += "<br><br>" + question + " You guessed " + response + "<br>Sorry Charlie you missed it!";
    document.getElementById("results1").className = "results1";
}
}
    //document.getElementById("results").style.color = "turquoise";





//emoji w/smiling-face-with-sunglasses
//http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-sunglasses.png

//<a href="http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-sunglasses.png">
//emoji w/ x eyes
//http://pix.iemoji.com/images/emoji/apple/ios-9/256/astonished-face.png
