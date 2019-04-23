
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
    //Create a countries class and this will instantiate and add to imgArray.
    imgArray.push(new Countries(x, y, newImage));

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
    // countries.x_coord -= x_steps;
    // imgArray[i].x_coord -= x_steps;
    for (i = 0; i < imgArray.length; i ++){
        imgArray[i].x_coord -= 10;
        if (imgArray[i].x_coord <= 0 || imgArray[i].x_coord >= 725) {
            x_steps *= -1;
        }
    }


    for (i = 0; i < imgArray.length; i ++){
        imgArray[i].y_coord -= 10;
        if (imgArray[i].y_coord <= 0 || imgArray[i].y_coord >= 525) {
            y_steps *= -1;
        }
    }


    drawSquare();
}
function drawSquare()
{
    ctx.clearRect(0,0,800,600);

    for (var i = 0; i < imgSource.length; i ++) {
            ctx.drawImage(imgArray[i].get_path, imgArray[i].x_coord, imgArray[i].y_coord);
    }
}

// $(document).ready(function(){
//     $(this).keypress(function(event){
//         getKey(event);
//     });
// });
//
// function hasCollided(square1, square2) {
//     return !(
//         ((square1.y + square1.height) < (square2.y)) ||
//         (square1.y > (square2.y + square2.height)) ||
//         ((square1.x + square1.width) < square2.x) ||
//         (square1.x > (square2.x + square2.width))
//     );
// }
