
var square = new Square(100, 100, 5, 5);

imgSource = ["argentina.png", "australia.png", "brazil.png", "china.png", "egypt.png",
"france.png", "germany.png", "india.png", "italy.png", "australia.png", "south-korea.png",
"spain.png", "syria.png", "thailand.png", "turkey.png"];

countries = ["argentina", "australia", "brazil", "china", "egypt",
"france", "germany", "india", "italy", "australia", "south-korea",
"spain", "syria", "thailand", "turkey"];
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

imgArray = [];

for (var i = 0; i < imgSource.length; i ++){
    var newImage = new Image();
    // Randomize x, y coords
    newImage.src = "./img/" + imgSource[i];
    x = getRandomX(0, canvas.width - newImage.width);
    y = getRandomY(0, canvas.height - newImage.height);
    //Create a countries class and this will instantiate and add to imgArray.
    imgArray.push(new Countries(x, y, newImage, countries[i]));

    console.log(imgArray);
}
function getRandomX(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomY(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(update, 1000/10);
drawSquare();

function update()

//update coordinates to create animation and canvas edge detection
{
    for (i = 0; i < imgArray.length; i ++){

        if (imgArray[i].x_coord <= 0 || imgArray[i].x_coord >= 725) {
            imgArray[i].x_step = imgArray[i].x_step *-1;
        }
        imgArray[i].x = imgArray[i].x + imgArray[i].x_step;
    }


    for (i = 0; i < imgArray.length; i ++){
        if (imgArray[i].y_coord <= 0 || imgArray[i].y_coord >= 525) {
            imgArray[i].y_step = imgArray[i].y_step *-1;
        }
        imgArray[i].y = imgArray[i].y + imgArray[i].y_step;
    }
    drawSquare();
}
function drawSquare()
{
    ctx.clearRect(0,0,800,600);

    for (var i = 0; i < imgArray.length; i ++) {
        ctx.drawImage(imgArray[i].get_path, imgArray[i].x_coord, imgArray[i].y_coord);
    }
}

$(document).ready(function(){
    $(this).click(function(event){
        square.x = event.clientX;
        square.y = event.clientY;
        console.log(event);
        for (i = 0; i < imgArray.length; i ++) {
            if (hasCollided(square, imgArray[i])){
                imgArray[i].x_step = 0;
                imgArray[i].y_step = 0;
                console.log(imgArray[i].get_countryName);
                var answer = window.prompt("What is the name of this country?");
                if (answer == imgArray[i].get_countryName) {
                    // Add success here.
                    imgArray.splice(i,1);

                }

                break;

            }
        }

    });
});

//Collision detection function. Called in the click event to determine where the
// on the coordinate plane the mouse click occurred.

    function hasCollided(square, country) {
        return !(
            ((square.y + square.height) < (imgArray[i].y)) ||
            (square.y > (imgArray[i].y + imgArray[i].get_path.height)) ||
            ((square.x + square.width) < imgArray[i].x) ||
            (square.x > (imgArray[i].x + imgArray[i].get_path.width))
        );
}
