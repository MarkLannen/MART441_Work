
var square2 = new Squares(700, 500, 75, 75, "#97C800");

imgSource = ["argentina.png", "australia.png", "brazil.png", "china.png", "egypt.png",
"france.png", "germany.png", "india.png", "italy.png", "australia.png", "south-korea.png",
"spain.png", "syria.png", "thailand.png", "turkey.png"];
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

imgArray = [];

for (var i = 0; i < imgSource.length; i ++){
    var newImage = new Image();
    // Randomize x, y coords
    newImage.src = "./img/" + imgSource[i];
    x = getRandomX(0, canvas.width - newImage.width);
    y = getRandomY(0, canvas.height - newImage.height);
    imgArray.push([x, y, newImage]);

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

var x_steps = 10;
var y_steps = 10;

setInterval(update, 1000/60);
drawSquare();

function update()

//update coordinates to create animation
{
    square2.xcoord -= x_steps;
    if (square2.xcoord <= 0 || square2.xcoord >= 725) {
        x_steps *= -1;
    }

    square2.ycoord -= y_steps;
    if (square2.ycoord <= 0 || square2.ycoord >= 525) {
        y_steps *= -1;
    }
    drawSquare();
}
function drawSquare()
{
    ctx.clearRect(0,0,800,600);

    for (var i = 0; i < imgSource.length; i ++) {
            ctx.drawImage(imgArray[i][2], imgArray[i][0], imgArray[i][1]);
    }
}

$(document).ready(function(){
    $(this).keypress(function(event){
        getKey(event);
    });
});

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
    }
    else if(actualLetter == "a")
    {
        moveLeft();
    }
    else if(actualLetter == "s")
    {
        moveRight();
    }
    else if(actualLetter == "d")
    {
        moveDown();
    }
    if (hasCollided(square1, square2))
    {
        square2.color = "#ff0000";
        square2.w *= 1.5;
        square2.h *= 1.5;
        var canvasColor = document.getElementById("myCanvas");
        canvasColor.style.background = "#00ff00";
    }


    drawSquare();
}

function hasCollided(square1, square2) {
    return !(
        ((square1.y + square1.height) < (square2.y)) ||
        (square1.y > (square2.y + square2.height)) ||
        ((square1.x + square1.width) < square2.x) ||
        (square1.x > (square2.x + square2.width))
    );
}

function moveUp()
{
    square1.ycoord -= 50;
}

function moveLeft()
{
    square1.xcoord -= 50;
}

function moveRight()
{
    square1.xcoord += 50;
}

function moveDown()
{
    square1.ycoord += 50;
}
