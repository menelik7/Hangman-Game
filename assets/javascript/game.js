var options = ["discover", "dream", "stretch", "risk", "explore", "dive", "dance", "climb", "melt"];
var tracker = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var chance = 12;
var underScores = [];
var guessedLetter = [];
var correctGuess = 0;


//Initial display.
var html = "<p>Win to display new images</p>";
        document.querySelector("#place").innerHTML = html;

var html = "<p>Pending...</p>";
        document.querySelector("#game").innerHTML = html;

var html = "<p>Welcome!</p>";
        document.querySelector("#intro").innerHTML = html;

var html = "<p>Would you like to play a word game?  The objective is to uncover the hidden word by guessing the correct letters.  If you decide to play, refer to the Score box for important stats.<p>" +
           "<p><strong><center><span style='color:#ff0000'>Press any key to start!</span></center></strong></p>";
        document.querySelector("#instructions").innerHTML = html;


      
        document.onkeyup = function(event) {
              var word = options[Math.floor(Math.random() * options.length)];

              for(i=0; i<word.length; i++) {
                  underScores[i] = "_ ";
              }

              var html = "<p></p>";
                    document.querySelector("#instructions").innerHTML = html;

              var html = "<p>Pick a letter!</p>";
                     document.querySelector("#intro").innerHTML = html;

              var html = "<p><strong>wins: " + win + "</strong></p>" +
                 "<p><strong>losses: " + loss + "</strong></p>" +
                 "<p><strong>Guesses remaining: " + chance + "</strong></p>";
                     document.querySelector("#game").innerHTML = html;

              var html = "<p>" + underScores + "</p>";
                      document.querySelector("#word").innerHTML = html;


                      document.onkeyup = function(event) {
                          // Determines which key was pressed
                          var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
                          var pos = guessedLetter.indexOf(userGuess);
                          var pos2 = underScores.indexOf(userGuess);
                          var trk = tracker.indexOf(userGuess);

                          if (trk === -1){
                            alert("Please make a valid selection");
                            return;
                          }

                          for (var a=0;a<word.length;a++){
                            if ((word[a] === userGuess) && (pos2 === -1)){
                              underScores[a] = userGuess;
                              correctGuess++;
                            }
                          }

                              if (correctGuess <= word.length){
                                document.querySelector("#word").innerHTML = underScores.join("");
                                  if (pos === -1){
                                    guessedLetter.push(userGuess);
                                    chance--;
                                    var html = "<p>Letters already guessed: </p>" +
                                               "<p><strong><span style='color:#ff0000'>" + guessedLetter + "</span><strong></p>";
                                            document.querySelector("#guess").innerHTML = html;
                                   
                                    var html = "<p><strong>wins: " + win + "</strong></p>" +
                                               "<p><strong>losses: " + loss + "</strong></p>" +
                                               "<p><strong>Guesses remaining: " + chance + "</strong></p>" +
                                               "<p><strong>Correct guesses: " + correctGuess + "</strong></p>" +
                                               "<p><strong>Word length: " + word.length + "</strong></p>";
                                            document.querySelector("#game").innerHTML = html;
                                  }
                                  else {
                                    alert("This letter has already been picked.  PLease pick another letter!");
                                  }
                              }


                              if (correctGuess === word.length) {
                                win++;
                                    var html = "<p>Letters already guessed: </p>" +
                                              "<p><strong><span style='color:#ff0000'>" + guessedLetter + "</span><strong></p>";
                                            document.querySelector("#guess").innerHTML = html;

                                    var html = "<p><strong>wins: " + win + "</strong></p>" +
                                                 "<p><strong>losses: " + loss + "</strong></p>" +
                                                 "<p><strong>Guesses remaining: " + chance + "</strong></p>" +
                                                 "<p><strong>Correct guesses: " + correctGuess + "</strong></p>" +
                                                 "<p><strong>Word length: " + word.length + "</strong></p>";
                                            document.querySelector("#game").innerHTML = html;
                                            document.querySelector("#intro").innerHTML = ("Congratulations!  You win!")
                                            document.querySelector("#reset").innerHTML = ("Keep playing");
                              }

                              if (chance === 1){
                                document.querySelector("#intro").innerHTML = ("You have one guess remaining!");
                              }
                           

                              if ((chance <= 0) && (correctGuess < word.length)){
                                loss++;
                                            document.querySelector("#intro").innerHTML = ("Oops!  You ran out of guesses!  Click the button below to try again.");
                                            document.querySelector("#reset").innerHTML = ("Try again");
                                    var html = "<p>Letters already guessed: </p>" +
                                              "<p><strong><span style='color:#ff0000'>" + guessedLetter + "</span><strong></p>";
                                            document.querySelector("#guess").innerHTML = html;

                                       
                                    var html = "<p><strong>wins: " + win + "</strong></p>" +
                                                 "<p><strong>losses: " + loss + "</strong></p>" +
                                                 "<p><strong>Guesses remaining: " + chance + "</strong></p>" +
                                                 "<p><strong>Correct guesses: " + correctGuess + "</strong></p>" +
                                                 "<p><strong>Word length: " + word.length + "</strong></p>";
                                            document.querySelector("#game").innerHTML = html;
                              }
                              
                      }
                       
      }



