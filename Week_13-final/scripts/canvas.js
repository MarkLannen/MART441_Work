var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var squareArray = [];
var collectibleArray = [];
var lives = 5;
var points = 0;
$(document).ready(function(){

    setup();

    $(this).keydown(function(event){
        getKey(event);
        // console.log(event.keyCode);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create main player object
    square1 = new Square(400,300,50,50,"#ffffff");


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

    for(var j = 0; j < collectibleArray.length; j ++)
    {
        test2 = hasCollided(square1, collectibleArray[j]);
        if (test2 == true)
        {
            collectibleArray.pop(j);
            break;
        }
    }




    console.log(collectibleArray.length);
    // console.log(test2);

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
    square1.y-=50;
}
function moveDown()
{
    square1.y+=50;
}
function moveRight()
{
    square1.x+=50;
}
function moveLeft()
{
    square1.x-=50;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);

    //Creates main player square
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
    ctx.fillText("Points: " + points, 10, 90);

    if(collectibleArray.length == 0)
    {
        gameOver();
    }

    function gameOver()
    {
        ctx.font = "60px Arial";
        // Changes text color to white.
        ctx.fillStyle = "#fff";
        ctx.fillText("GAME OVER!", 200, 200);
        ctx.font = "30px Arial";
        ctx.fillText("You scored " + points + " points.", 200, 300);
        ctx.fillText("And have " + lives + " lives remaining.", 200, 350);
    }
    if(lives <= 0)
    {
        youareDead();
    }

    function youareDead()
    {
        ctx.font = "60px Arial";
        // Changes text color to white.
        ctx.fillStyle = "#fff";
        ctx.fillText("GAME OVER!", 200, 200);
        ctx.font = "30px Arial";
        ctx.fillText("You have lost all your lives", 200, 300);
    }

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
