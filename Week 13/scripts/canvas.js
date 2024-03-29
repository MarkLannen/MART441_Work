var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var collectibleArray = [];
var lives = 3;
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

    // create two objects
    square1 = new Square(30,520,50,50,"#ffffFF");
    square2 = new Square(500,200,50,50,"#ff0000");

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
    var actualLetter = String.fromCharCode(char);
    console.log(event.keyCode);
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
    var test = hasCollided(square1,square2);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(square1,squareArray[i]);
        if(test2 == true)
        {
            break;
        }

        //console.log(test2);
    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }

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
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, square2.y, square2.width, square2.height);

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
    ctx.fillText("Lives: " + lives, 10, 50);

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
