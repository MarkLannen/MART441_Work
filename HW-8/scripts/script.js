
// Image class
var imageArray = new Array();

class Images {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    // makes this.etc. read only. When calling a get function you don't need ()'

    get theImageSelector() {
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
    }

    // set allows properties of a class to be change.
    set theImagePath(value){
        this.imagePath = value;
    }
}

function initializeArray() {
    var image1 = new Images("#image-Id", "img/cloud-1.jpg");
    var image2 = new Images("#image-Id", "img/milkyWay-1.jpg");
    var image3 = new Images("#image-Id", "img/nebula-1.jpg");
    var image4 = new Images("#image-Id", "img/universe-1.jpg");

    imageArray.push(image1);
    imageArray.push(image2);
    imageArray.push(image3);
    imageArray.push(image4);
}

function getRandomIndex(){
    return Math.floor(Math.random() * 4);
}

class Squares {
    constructor (width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
}

// Jquery
$(document).ready(function() {

    // Set getRandomIndex() to a variable and use that instead of the function itself - ensures same image is being used.

    $("button").click(function(){
        $(imageArray[getRandomIndex()].theImageSelector).attr("src", imageArray[getRandomIndex()].theImagePath).fadeIn().fadeOut();

    });
});

function moveSquare(){
    for (var i = 0; i < 3; i ++) {
        $("#square1").animate({left:150}).animate({top:500}).animate({left:400}).animate({top:200});
    }

    for (var j = 0; j < 5; j ++) {
        $("#square2").animate({left:550}).animate({top:500}).animate({left:250}).animate({top:150});
    }

    for (var k = 0; k < 7; k ++) {
    $("#square3").animate({left:250}).animate({top:500}).animate({left:50}).animate({top:150});
    }
}
