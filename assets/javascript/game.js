//Declare Global Variables.
var options = ["discover", "dream", "stretch", "risk", "explore", "dive", "dance", "climb", "melt", "motor", "child", "thorn", "witch", "craft", "bankrupt", "hammer", "technique", "tennis", "java", "computer", "dell", "microsoft", "excel", "health", "building", "jump", "lion", "camaro", "maxima", "love", "patience", "program", "justice", "knee", "attitude", "fiesty", "kind", "karate", "football", "ikea", "horse", "tesla", "electric", "inform", "process", "algorithm", "function", "disable", "duplicate", "extract", "resize", "represent", "deny", "accept", "reject", "depose", "flight", "company", "tycoon", "empire", "wealth", "money", "greed", "happiness", "success", "mastery", "construct", "manager"];
var tracker = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var underScores = [];
var guessedLetter = [];
var winSound = document.getElementById("sound");

//Home screen display.
var html =  "<p>Pending...</p>";
            document.querySelector("#game").innerHTML = html;

//Instructions.
var html = "<p>Would you like to play a word game?  The objective is to uncover the hidden word by guessing the correct letters.  If you decide to play, refer to the Score box for important stats.<p>" +
           "<p><strong><center><span style='color:#4D9C2D'>Click the button below to start!</span></center></strong></p>";
            document.querySelector("#instructions").innerHTML = html;


//Initiate the game on click.  This button can also be used by the player to restart at will, keep playing after a win, or try again after a loss.
document.getElementById("reset").onclick = function() { myFunction() };

function myFunction(){
            //Generates random words from the options array.
            var word = options[Math.floor(Math.random() * options.length)];

            //These variables are declared here because they need to be reset every time the "Restart", "Keep playing", or "Try again" button is clicked.                
            var chance = 12; //Guesses remaining.
            var correctGuess = 0;
            underScores = [];
            guessedLetter = [];

            //Generate underscores matching the number of letters in the random hidden word.
            for(i=0; i<word.length; i++){
              underScores[i] = "_";
            }

            //Update displays once the player initiates the game.
            var html = "<p>Pick a letter!</p>";
                        document.querySelector("#intro").innerHTML = html;
                        document.querySelector("#word").innerHTML = underScores.join(" ");//Insert underscores in place of letters.
            
            var html = "<p>Letters already guessed: </p>" +
                       "<p><strong><span style='color:#ff0000'>...</span><strong></p>";//Displaying dots initially in the guessed letters div.
                        document.querySelector("#guess").innerHTML = html;
            
            var html = "<p></p>";
                        document.querySelector("#instructions").innerHTML = html;             
            
            var html = "<p><strong>wins: " + win + "</strong></p>" +
                       "<p><strong>losses: " + loss + "</strong></p>" +
                       "<p><strong>Guesses remaining: " + chance + "</strong></p>";
                        document.querySelector("#game").innerHTML = html;
                        document.querySelector("#reset").innerHTML = ("Restart");//Restart button.
               

                        //Identify the players pick.
                        document.onkeyup = function(event) {

                            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();//Record the player's guess in lower case.
                            var pos = guessedLetter.indexOf(userGuess);//Determine if the player's guess is already in the guessed letter div.
                            var pos2 = underScores.indexOf(userGuess);//Determine if the player's guess is already in the undescores (hidden word) div.
                            var trk = tracker.indexOf(userGuess);////Determine if the player's guess is a valid entry by comparing it to the alphabet array stored in the variable "tracker".

                            //Alert the player if thier selection is not a letter.
                            if (trk === -1){
                                alert("Please make a valid selection");
                                return;
                            }

                            //Identify and store all correct letters and update variables when conditions are met.
                            for (var a=0;a<word.length;a++){
                                if ((word[a] === userGuess) && (pos2 === -1) && (chance > 0)){
                                    underScores[a] = userGuess;
                                    correctGuess++;
                                    winSound.play();//Goofy sound :-)
                                }
                            }

                            //Insert correct guesses.
                            if ((correctGuess <= word.length) && (chance >0)){
                                document.querySelector("#word").innerHTML = underScores.join(" ");

                                //insert incorrect guesses in the guessedLetters div and update variables accordingly.
                                if ((pos === -1) && (chance >=0)){
                                    guessedLetter.push(userGuess);
                                    chance--;

                                    //update display.
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


                            //Update displays and corresponding variables when letter has been uncovered.
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
                                            
                                document.onkeyup = function (event) {
                                    return;
                                }

                                //Update pictures accoring to the nunmber of wins (place-holder for now to be upgraded to more interractive features.
                                if (win === 1){
                                    document.getElementById('pic').src = "assets/images/2.jpg";
                                }
                                else if (win === 2){
                                    document.getElementById('pic').src = "assets/images/3.jpg";
                                }
                                else if (win === 3){
                                    document.getElementById('pic').src = "assets/images/4.jpg";
                                }
                                else if (win === 4){
                                    document.getElementById('pic').src = "assets/images/5.jpg";
                                }
                                else if (win === 5){
                                    document.getElementById('pic').src = "assets/images/6.jpg";
                                }
                                else if (win === 6){
                                    document.getElementById('pic').src = "assets/images/7.jpg";
                                }
                                else if (win === 7){
                                    document.getElementById('pic').src = "http://www.grittv.com/wp-content/uploads/2014/08/Grit_Bluesky.png";
                                } 
                            }
                             

                            //Update displays and variables at loss.
                            if ((chance === 0) && (correctGuess < word.length)){

                                loss++;

                                var html = "<p></p>" +
                                           "<p><strong><span style='color:#ff0000'>...</span><strong></p>";
                                            document.querySelector("#guess").innerHTML = html;

                                            document.querySelector("#game").innerHTML = html;
                                            document.querySelector("#intro").innerHTML = ("Oops!  You ran out of guesses!");
                                            document.querySelector("#word").innerHTML = ('The word was "' + word.toUpperCase() + '"');
                                            document.querySelector("#reset").innerHTML = ("Try again");
                                     
                                var html = "<p><strong>wins: " + win + "</strong></p>" +
                                           "<p><strong>losses: " + loss + "</strong></p>" +
                                           "<p><strong>Guesses remaining: " + chance + "</strong></p>" +
                                           "<p><strong>Correct guesses: " + correctGuess + "</strong></p>" +
                                           "<p><strong>Word length: " + word.length + "</strong></p>";
                                           document.querySelector("#game").innerHTML = html;  
                                            
                                document.onkeyup = function (event) {
                                    return;
                                }
                            }   

                        }

        }



