// Code (with only a few minor changes) is taken from Professor Cassen's example for homework 5


// addStartImageArray();

var startImage = ["image1", "image2", "image3", "image4", "image5", "image6","image7", "image8", "image9", "image10", "image11", "image12"];
var startImagePath = 'img/reveal-image.jpg';
var firstNumber = -1;
var secondNumber = -1;


// JSON declaration
var player = {"firstName": "", "lastName":"", "age":"", "numGuesses":""};

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
    // firstNumber = number;
    if(firstNumber >= 0) 
    {
        secondNumber = number; //makes second image appear
        document.getElementById(startImage[number]).src = hiddenImages[secondNumber];
        setTimeout(imagesDisappear, 1000);
    }

    else if(firstNumber < 0) 
    {
        firstNumber = number; // makes first image appear
        document.getElementById(startImage[firstNumber]).src = hiddenImages[firstNumber];
    }

    // Check to see if images do not match
    if (hiddenImages[secondNumber] != hiddenImages[firstNumber] && firstNumber >=0 && secondNumber >=0) 
    {
        setTimeout(imagesDisappear, 1000);
    }

    // Check to see if images not match
    else if(hiddenImages[secondNumber] == hiddenImages[firstNumber] && firstNumber >=0 && secondNumber >=0)
    {
        firstNumber = -1;
        secondNumber = -1;
    }

    // document.getElementById(startImage[firstNumber]).src= hiddenImages[firstNumber];   
}

function imagesDisappear() {
    console.log(firstNumber);
    document.getElementById(startImage[firstNumber]).src= startImagePath;
    document.getElementById(startImage[secondNumber]).src= startImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

// Add to the JSON object from the textboxes
function addToPlayer() {
    var firstName = document.getElementById("name-input").value;
    // var lastName = document.getElementById("last-name-input").value;
    // var age = document.getElementById("age-input").value;
    
    // Add first name input values to JSON object
    player.firstName = firstName;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "index.html";

    // Add last name input values to JSON object
    // player.lastName = lastName;
    // localStorage.setItem("playerInfo", JSON.stringify(player));  
    
    // // Add age input values to JSON object
    // player.age = age;
    // localStorage.setItem("playerInfo", JSON.stringify(player));       
    // window.location = "index.html";

    console.log(firstName);
   
}

// Get information out of JSON
function playerInfo(){
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    console.log(player.firstName);
}