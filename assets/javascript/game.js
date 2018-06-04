
var songTitles = ["Fly Away", "The Eagle and the Hawk", "Leaving on an Airplane", "Poems, Prayers and Promises","I'm Sorry", "Love is Everywhere", "Calypso", "Song of Wyoming", "The Music is You", "Matthew", "Annie's Song", "Farewell Andromeda (Welcome to My Morning)", "Sweet Surrender", "Rocky Mountain Suite (Cold Nights in Canada)", "Sunshine on My Shoulders", "Rocky Mountain High","Goodbye Again", "For Baby (For Bobbie)", "Take Me Home Country Roads", "Follow Me", "Starwood in Aspen", "My Sweet Lady", "Annie's Other Song", "Thank God I'm a Country Boy", "Today", "Boy from the Country"];
console.log("Hey, you got the page attached!");


// I want the "Press any key to start" to change the display when a "key" is pressed.
// This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    var x = document.getElementById("start");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "none";
    }
}



