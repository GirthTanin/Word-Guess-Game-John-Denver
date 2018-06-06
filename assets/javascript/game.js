// imitating the gandalf thing, day 3, exercise 30, can I make a searchabel array of strings, that need to operate as arrays to search for each letter?
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
var letterAttempts = 0;
var wrongLetters = [];
var lettersGuessed = "";
var titlesCorrect = 0;
var titlesMissed = 0;
// here is where i fake a var to find out what song the JS chose
var songCheat=songChoice;

console.log("Hey, you got the page attached!");


// I want the "Press any key to start" to change the display when a "key" is pressed.
// This function is run whenever the user presses a key.  It used to work, but when I added the code starting at line 17, it no longer does anything.

function start() {
    
    // this should bring the score for letters chosen back to zero
    letterAttempts = 10;
    console.log("letters chosen back to zero");


    var begin = document.getElementById("start");
    if (begin.style.display === "block") {
    begin.style.display = "none";
    }

    songChoice = songTitles[Math.floor(Math.random()*songTitles.length)];
    console.log("song title is chosen");

    lettersSongChoice = songChoice.split("");
    console.log("title is split up into its parts");

    lettersEmpty = lettersSongChoice.length;

    // this var will need to reset each round, I'm not sure why it's stated outside and also in the function
    blanksAndSuccesses = [];

    wrongLetters = [];

    for (var i=0; i<lettersEmpty; i++) {
        blanksAndSuccesses.push ("_");
    }
console.log(blanksAndSuccesses);


document.getElementById("triesLeft").innerHTML = letterAttempts;

document.getElementById("lettersNotInTitle").innerHTML = wrongLetters.join(" ");

document.getElementById("blankTitle").innerHTML=blanksAndSuccesses.join(" ");

}

function letterPresent(letter) {
    var letterInTitle = false;
    for (var i = 0; i < lettersEmpty; i++) {
        if (songChoice[i] === letter) {
            letterInTitle = true;
        }
    }
        if (letterInTitle === true) {
            for (var x = 0; x < lettersEmpty; x++); {
                if (songChoice[x] === letter) {
                    blanksAndSuccesses[x] = letter;
                }
            }
            console.log (blanksAndSuccesses);
        }
        else {
            wrongLetters.push(letter);
            letterAttempts--;
        }
        console.log("letterPresent actually worked");


}

function goodTry() {
    document.getElementById("triesLeft").innerHTML = letterAttempts;

    document.getElementById("lettersNotInTitle").innerHTML = wrongLetters.join(" ");

    document.getElementById("blankTitle").innerHTML=blanksAndSuccesses.join(" ");

    if (lettersSongChoice.toString()===blanksAndSuccesses.toString()) {
        titlesCorrect++;
        document.getElementById("titlesDeduced").innerHTML = titlesCorrect;
        start();
    }
    else if (letterAttempts === 0) {
        titlesMissed++;
        document.getElementById("titlesMissed").innerHTML = titlesMissed;
        start();
    }
}


// This is where everything is controlled and started...

start ();

document.onkeyup = function(event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    letterPresent(lettersGuessed);
    goodTry ();
}




// This code below I may have incorporated already in the top...
// document.onkeyup = function(start) {
//     var begin = document.getElementById("start");
//     if (begin.style.display === "block") {
//     begin.style.display = "none";
//     } 
//     if (begin.style.display = "none") {
//     document.getElementById("directions"); directions.style.display = "block";
//     }
// }

// document.onkeyup = function (event) {}

// This next section is to have a song title chosen when the first key is pressed.

// document.onkeyup = function(event) {
//     songChoice = songTitles[Math.floor(Math.random() * songTitles.length)];
// }

// if (start.display === "none") {
// document.writeln(directions);
// }


// when the user guesses a letter..I'll need this and more code.
