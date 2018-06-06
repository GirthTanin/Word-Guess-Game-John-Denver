// imitating the gandalf thing, day 3, exercise 30, can I make a searchabel array of strings, that need to operate as arrays to search for each letter?
var songTitles = {
    songA:"Fly Away",
    songB:"The Eagle and the Hawk",
    songC:"Leaving on an Airplane",
    songD:"Poems, Prayers and Promises",
    songE:"I'm Sorry",
    songF:"Love is Everywhere",
    songG:"Calypso",
    songH:"Song of Wyoming",
    songI:"The Music is You",
    songJ:"Matthew",
    songK:"Annie's Song",
    songL:"Farewell Andromeda (Welcome to My Morning)",
    songM:"Sweet Surrender",
    songN:"Rocky Mountain Suite (Cold Nights in Canada)",
    songO:"Sunshine on My Shoulders",
    songP:"Goodbye Again", 
    songQ:"For Baby (For Bobbie)",
    songR:"Take Me Home Country Roads",
    songS:"Follow Me",
    songT:"Starwood in Aspen",
    songU:"My Sweet Lady",
    songV:"Annie's Other Song",
    songW:"Rocky Mountain High",
    songX:"Thank God I'm a Country Boy",
    songY:"Today",
    songZ:"Boy from the Country"
}
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

    songChoice = songTitles[Math.floor(Math.random() * songTitles.length)];
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


// This code below I may have incorporated already in the top...
document.onkeyup = function(start) {
    var begin = document.getElementById("start");
    if (begin.style.display === "block") {
    begin.style.display = "none";
    } 
    if (begin.style.display = "none") {
    document.getElementById("directions"); directions.style.display = "block";
    }
}

document.onkeyup = function (event) {}

// This next section is to have a song title chosen when the first key is pressed.

document.onkeyup = function(event) {
    songChoice = songTitles[Math.floor(Math.random() * songTitles.length)];
}

if (start.display === "none") {
document.writeln(directions);
}


// when the user guesses a letter..I'll need this and more code.
