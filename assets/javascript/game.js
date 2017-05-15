var options = ["discover", "dream", "stretch", "risk", "explore", "dive", "dance", "climb", "melt"];

var win = 0;
var loss = 0;
var chance = 9;
var underScores = [];
var guessedLetter = [];


var html = "<p>Cool Stuff</p>";
       document.querySelector("#place").innerHTML = html;

var html = "<p>Pending...</p>";
       document.querySelector("#game").innerHTML = html;

var html = "<p>Welcome!</p>";
       document.querySelector("#intro").innerHTML = html;

var html = "<p>Would you like to play a word game?  The objective is to uncover the hidden word by guessing the correct letters.  If you decide to play, refer to the Score box for important stats.<p>" +
           "<p>Press any key to start!</p>";
       document.querySelector("#instructions").innerHTML = html;


// This function is run whenever the user presses any key.
document.onkeyup = function(event) {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var word = options[Math.floor(Math.random() * options.length)];
        // Displays underscores for the letters in "word".
        for(i=0; i<word.length; i++) {
            underScores[i] = "_ ";
        }
        var correctGuess = word.length;

        // Update displays.
        var html = "<p></p>";
              document.querySelector("#instructions").innerHTML = html;

        var html = "<p>Pick a letter!</p>";
               document.querySelector("#intro").innerHTML = html;

        var html = "<p><strong>wins: " + win + "</strong></p>" +
           "<p><strong>losses: " + loss + "</strong></p>" +
           "<p><strong>Chances remaining: " + chance + "</strong></p>";
               document.querySelector("#game").innerHTML = html;

        var html = "<p>" + underScores + "</p>";
                document.querySelector("#word").innerHTML = html;


                    // This function is run whenever the user picks a letter.
                    document.onkeyup = function(event) {
                        // Determines which key was pressed
                        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

                        for (var a=0;a<word.length;a++){
                          if (word[a] === userGuess){
                            underScores[a] = userGuess;
                            correctGuess--;
                          }
                        }

                        while (correctGuess >= 0){
                          document.querySelector("#word").innerHTML = underScores.join("");
                          break;

                        }










                         // Displays the letters the user has guessed thus far.
                        var html = "<p>Letters already guessed: </p>" +
                                    "<p><strong><span style='color:#ff0000'>" + guessedLetter + "</span><strong></p>";
                                document.querySelector("#guess").innerHTML = html;

}
};



