// Create object class
class Object{
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

let object1 = new Object(20, 20, 100, 100, "#3EC8FF");
console.log(object1);

let object2 = new Object(700, 500, 75, 75, "#97C800");
console.log(object2);

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");


setInterval(update, 1000/60);
drawSquare();

function update()
{
    object2.x -= 10;
    console.log(object2.x);
    if (object2.x <= 0 || object2.x >= 600) {
        object2.x *= -10;
    }

    object2.y -= 10;
    if (object2.y <= 0 || object2.y >= 800) {
        object2.y *= -10;
    }
    drawSquare();
}
function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = object1.color;
    ctx.fillRect(object1.x, object1.y, object1.width, object1.height);
    ctx2.fillStyle = object2.color;
    ctx2.fillRect(object2.x, object2.y, object2.width, object2.height);
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
    drawSquare();
}

function moveUp()
{
    object1.y -= 50;
}

function moveLeft()
{
    object1.x -= 50;
}

function moveRight()
{
    object1.x += 50;
}

function moveDown()
{
    object1.y += 50;
}
