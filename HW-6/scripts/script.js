// Code (with only a few minor changes) is taken from Professor Cassen's example for homework 5


// addStartImageArray();

var startImage = ["image1", "image2", "image3", "image4", "image5", "image6","image7", "image8", "image9", "image10", "image11", "image12"];

var startImagePath = 'img/reveal-image.jpg';

// JSON declaration
var player = {"firstName": "", "lastName":"", "age":""};

var hiddenImages = [];

/* addStartCard function populates array with 'blank image.'*/
function addStartCard() {

    for (var i = 0; i < startImage.length; i ++) {        

    document.getElementById(startImage[i]).src=startImagePath;
    }
}

// var count = [0,0,0,0,0]; Need 5 slots. 2 for each picture. 
// function that populates array of hidden images
function createHiddenImageArray() {
    
    // create an array of hidden images
    var hiddenImagePath = ["img/city.jpg", "img/desert.jpg", "img/forest.jpg", "img/mountains.jpg", "img/ocean.jpg", "img/snow.jpg"]
    
    // create another array to make sure the images only get added twice
    var count = [0, 0, 0, 0, 0, 0];

    // create a while statement to check to see if our hidden image array is full
    while(hiddenImages.length < 12) 
    {
        // get a random number between 0 and the number total number of images that we can choose from
        var randomNumber = Math.floor(Math.random() * hiddenImagePath.length)

        // create an if statement that says if the total number added is less than 2, then
        // add the image to the actual image array
        if(count[randomNumber] < 2) {

            hiddenImages.push(hiddenImagePath[randomNumber]);
            // then add one to the array that makes sure only two images can be added
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number) {
    document.getElementById(startImage[number]).src= hiddenImages[number];
        // this should be a quick function that just changes
        // the image based on what number was pressed
}

// Add to the JSON fromt the textboxes
function addToPlayer() {
    var firstName = document.getElementById("name-input").value;
    var lastName = document.getElementById("last-name-input").value;
    var age = document.getElementById("age-input").value;
    
    // Add input values to JSON object
    player.firstName = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "player_resutls.html";

    // console.log(firstName);
    // console.log(lastName);
    // console.log(age);
}