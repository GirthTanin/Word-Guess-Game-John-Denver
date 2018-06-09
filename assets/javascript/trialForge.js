window.onkeydown = function(e) {
    if(e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
        return false;
    }
};

var songTitles = [
    "Fly Away",
    "The Eagle and the Hawk",
    "Leaving on an Airplane",
    "Poems, Prayers and Promises",
    "I'm Sorry",
    "Love is Everywhere",
    "Calypso",
    "Song of Wyoming",
    "The Music is You",
    "Matthew",
    "Annie's Song",
    "Farewell Andromeda (Welcome to My Morning)",
    "Sweet Surrender",
    "Rocky Mountain Suite (Cold Nights in Canada)",
    "Sunshine on My Shoulders",
    "Goodbye Again", 
    "For Baby (For Bobbie)",
    "Take Me Home Country Roads",
    "Follow Me",
    "Starwood in Aspen",
    "My Sweet Lady",
    "Annie's Other Song",
    "Rocky Mountain High",
    "Thank God I'm a Country Boy",
    "Today",
    "Boy from the Country"];

    
// From day 1 of the 05-timers I found a logic.js that helped me see MANY steps I didn't see.
var spaceBegin ="";
var songChoice ="";
var songChosen = false;
var titleCompleted = false;
var lettersSongChoice =[];
var lettersEmpty = 0;
var blanksAndSuccesses = [];
var letterAttempts = 11;
var wrongLetters = [];
var lettersGuessed = "";
var titlesCorrect = 0;
var titlesMissed = 0;
var titlesUnknown = 26;



console.log("Hey, you got the page attached!");


// I want the "Press any key to start" to change the display when a "key" is pressed.
// This function is run whenever the user presses a key.  It used to work, but when I added the code starting at line 17, it no longer does anything.

function start() {
    
    // this should bring the score for letters chosen back to zero
    letterAttempts = 11;
    console.log("letters chosen back to zero");


    var begin = document.getElementById("start");
    if (begin.style.display === "block") {
    begin.style.display = "none";
    console.log("It's Magic!");
    }
//regurlar expression magic
    songChoice = songTitles[Math.floor(Math.random()*songTitles.length)].toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');

    //just above I learned to make all the titles lowercase, but now I can't make sense of them.  Does it have to spit back the lowercase array, or can it kick back to the original title, and what to do about these spaces... idea, do I need to end the "Welcome"&nbsp;"to"&nbsp:"my"&nbsp"morning"?

    console.log("song title is chosen");

    songChoiceLowerCase = songChoice.toLowerCase();
    //reg expression here?

    lettersSongChoice = songChoice.split("");
    console.log("title is split up into its parts");

    lettersEmpty = lettersSongChoice.length;
    console.log("lettersEmpty");

    // this var will need to reset each round, I'm not sure why it's stated outside and also in the function
    blanksAndSuccesses = [];
    console.log("blanksAndSuccesses inner restating");

    wrongLetters = [];
    console.log("wrongLetters inner restating");

    for (var i=0; i<lettersEmpty; i++) {
        blanksAndSuccesses.push ("_");
    }
console.log(blanksAndSuccesses);


document.getElementById("triesLeft").innerHTML = letterAttempts;

document.getElementById("lettersNotInTitle").innerHTML = wrongLetters.join(" ");

document.getElementById("blankTitle").innerHTML=blanksAndSuccesses.join(" ");


    function newFunction() {
        songChoice.toLowerCase();
    }
}

function letterPresent(letter) {
    var letterInTitle = false;

    for (var i = 0; i < lettersEmpty; i++) {
        if (songChoice[i] === letter) {
            letterInTitle = true;
        }
    }
        if (letterInTitle) {
            for (var d = 0; d < lettersEmpty; d++) {
                if (songChoice[d] === letter) {
                    blanksAndSuccesses[d] = letter;
                }
            }
            console.log ("You guessed a letter in the title!");
            console.log (blanksAndSuccesses);
        }
        else {
            wrongLetters.push(letter);
            letterAttempts--;
            console.log ("You didn't guess the right letter.");
        }
        console.log("letterPresent actually worked");


}

function goodTry() {
    document.getElementById("triesLeft").innerHTML = letterAttempts;

    document.getElementById("lettersNotInTitle").innerHTML = wrongLetters.join(" ");
    

    document.getElementById("blankTitle").innerHTML=blanksAndSuccesses.join(" ");
    

    if (lettersSongChoice.toString()===blanksAndSuccesses.toString()) {
        titlesCorrect++;
        alert("You're a John Denver fan!")
        document.getElementById("titlesDeduced").innerHTML = titlesCorrect;
        document.getElementById("titlesUnknown").innerHTML = --titlesUnknown + (" Titles Unknown!");
        start();
    }
    // something here isn't working.
    else if (letterAttempts === 0) {
        // titlesMissed++;

        alert("Keep trying! You won't regret learning these!");
        document.getElementById("titlesMissed").innerHTML = ++titlesMissed + (" titles you have yet to learn.");
        start();
    }
}


// This is where everything is controlled and started...

start();
// perhaps onmouseover??? or onclick of #start
// document.getElementById("start").onclick = function (event) {
document.onkeyup = function(event) {
    lettersGuessed = String.fromCharCode(event.which).toLowerCase();
    //regurlar expression magic above!
    letterPresent(lettersGuessed);
    var begin = document.getElementById("start");
    if (begin.style.display === "block") {
    begin.style.display = "none";
    } 
    if (begin.style.display = "none") {
    document.getElementById("directions"); directions.style.display = "block";
        
    }

    goodTry ();
}
