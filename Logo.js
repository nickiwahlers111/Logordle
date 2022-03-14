


var answer="McDonalds";
var game = document.getElementById('guess_game');
game.addEventListener('keypress', function(e){
  // e.preventDefault();
 
  if(e.key == 'Enter'){
   
    var blur = 25;

    while(blur > 0){
      var guess = document.getElementById("guess_input").value;
      console.log("GUESS: %s", guess); 
      e.preventDefault();
      if(guess == answer)
      {
        document.getElementById('logo').style.filter = "blur(0)";
        return;
      }
      else{
        blur -= 5;
        document.getElementById('logo').style.filter = "blur(2)";
        console.log("BLUR LESS");
      }

    }
   

  }


  

})