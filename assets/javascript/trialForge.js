// imitating the gandalf thing, day 3, exercise 30, can I make a searchabel array of strings, that need to operate as arrays to search for each letter?
// var songTitles = {
//     1:"Fly Away",
//     2:"The Eagle and the Hawk",
//     3:"Leaving on an Airplane",
//     4:"Poems, Prayers and Promises",
//     5:"I'm Sorry",
//     6:"Love is Everywhere",
//     7:"Calypso",
//     8:"Song of Wyoming",
//     9:"The Music is You",
//     10:"Matthew",
//     11:"Annie's Song",
//     12:"Farewell Andromeda (Welcome to My Morning)",
//     13:"Sweet Surrender",
//     14:"Rocky Mountain Suite (Cold Nights in Canada)",
//     15:"Sunshine on My Shoulders",
//     16:"Goodbye Again", 
//     17:"For Baby (For Bobbie)",
//     18:"Take Me Home Country Roads",
//     19:"Follow Me",
//     20:"Starwood in Aspen",
//     21:"My Sweet Lady",
//     22:"Annie's Other Song",
//     23:"Rocky Mountain High",
//     24:"Thank God I'm a Country Boy",
//     25:"Today",
//     26:"Boy from the Country"
// }

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

// here is where i fake a var to find out what song the JS chose
var songCheat=songChoice;

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




