var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
// var questions;
var squareArray = [];
var collectibleArray = [];
var lives = 3;
var Points = 0;
$(document).ready(function(){

    setup();

    $(this).keydown(function(event){
        getKey(event);
        console.log(event.keyCode);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create main player object
    square1 = new Square(600,520,50,50,"#ffffff");
    // square2 = new Square(500,200,50,50,"#ff0000"); Removed Square2 from game

    $.getJSON("data/squares.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });

    $.getJSON("data/collectible.json", function(data) {
        for(var i = 0; i < data.collectible.length; i++)
        {
            collectibleArray.push(new Square(data.collectible[i].x,data.collectible[i].y, data.collectible[i].h, data.collectible[i].w, data.collectible[i].color));
        }
        drawSquare();
    });



}

function getKey(event)
{
    var char = event.which || event.keyCode;
    // console.log(event.keyCode);
        // var actualLetter = String.fromCharCode(char);
        // console.log(event.keyCode);
    if(char == 38)
    {
        moveUp();
        direction = "up";
    }
    if(char == 40)
    {
        moveDown();
        direction = "down";
    }
    if(char == 37)
    {
        moveLeft();
        direction = "left";
    }
    if(char == 39)
    {
        moveRight();
        direction = "right";
    }
    // var test = hasCollided(square1,square2); - Removed because we're not
    // checking for collision between square1 and square2 anymore.
    var test1 = false;
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {
        test1 = hasCollided(square1,squareArray[i]);
        if(test1 == true)
        {
            break;
        }
    }

    for(var j = 0; j < collectibleArray.lenght; j ++)
    {
        test2 = hasCollided(square1, collectibleArray[j]);
        if (test2 == true)
        {
            break;
        }
    }
    console.log(test2);

    if(test1 == true)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
            square1.x +=30;
        }
        else if(direction == "right")
        {
            moveLeft();
            square1.x -=30;
        }
        else if(direction == "up")
        {
            moveDown();
            square1.y +=30;
        }
        else if(direction == "down")
        {
            moveUp();
            square1.y -=30;
        }

    }

    if(test2 == true)
    {
        points ++;
    }
    drawSquare();

}

function moveUp()
{
    square1.y-=10;
}
function moveDown()
{
    square1.y+=10;
}
function moveRight()
{
    square1.x+=10;
}
function moveLeft()
{
    square1.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);

    //Creates main player square
    // ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    // ctx.fillStyle = "#f00";
    // ctx.fillRect(square2.x, square2.y, square2.width, square2.height);


    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    for(var j = 0; j < collectibleArray.length; j++)
    {
        ctx.fillStyle = collectibleArray[j].mainColor;
        ctx.fillRect(collectibleArray[j].x, collectibleArray[j].y, collectibleArray[j].width, collectibleArray[j].height);
    }


    ctx.font = "30px Arial";
    // Changes text color to white.
    ctx.fillStyle = "#fff";
    ctx.fillText("Lives: " + lives, 10, 50);
    ctx.fillText("Points: " + Points, 10, 90);

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
