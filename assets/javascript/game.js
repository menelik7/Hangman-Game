var options = ["discover", "dream", "stretch", "risk", "explore", "dive", "dance", "climb", "melt"];

var win = 0;
var loss = 0;
var chance = 9;
var guess = [];


var html = "<p>Cool Stuff</p>";
       document.querySelector("#place").innerHTML = html;

var html = "<p>Pending...</p>";
       document.querySelector("#game").innerHTML = html;

var html = "<p>Welcome!</p>";
       document.querySelector("#instructions").innerHTML = html;

var html = "<p>Would you like to play a word game?  The objective is to uncover the hidden word by guessing the correct letters.  If you decide to play, refer to the Score box for important stats.<p>" +
           "<p>Press any key to start!</p>";
       document.querySelector("#intro").innerHTML = html;


// This function is run whenever the user presses any key.
document.onkeyup = function(event) {
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        var word = options[Math.floor(Math.random() * options.length)];
        // Records underscores for the letters in "word".
        var wordLength = word.length;
        var underscores = "";
        for(i=0; i<wordLength; i++) {
            underscores = underscores + "_ "
        }

        // Update displays.
        var html = "<p></p>";
              document.querySelector("#intro").innerHTML = html;

        var html = "<p>Pick a letter!</p>";
               document.querySelector("#instructions").innerHTML = html;

        var html = "<p><strong>wins: " + win + "</strong></p>" +
           "<p><strong>losses: " + loss + "</strong></p>" +
           "<p><strong>Chances remaining: " + chance + "</strong></p>";
               document.querySelector("#game").innerHTML = html;

        var html = "<p>" + underscores + "</p>";
               document.querySelector("#word").innerHTML = html;


                    // This function is run whenever the user picks a letter.
                    document.onkeyup = function(event) {
                    // Determines which key was pressed
                    var letter = String.fromCharCode(event.keyCode).toLowerCase();
                    if (guess.indexOf(letter) <0) {
                    guess.push(letter.toUpperCase());
                    }
                    else {
                      return;
                    }
                    // Displays the letters the user has guessed thus far.
                    var html = "<p>Letters already guessed: </p>" +
                                "<p><strong><span style='color:#ff0000'>" + guess + "</span><strong></p>";
                            document.querySelector("#guess").innerHTML = html;

                    var correct = word.indexOf(letter);
                    var display = word.charAt(correct);
                    var replace = underscores.replace(/_/g, display);

                    }
}

