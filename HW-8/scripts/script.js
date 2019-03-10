
// Image class
var imageArray = new Array();

class Images {
    constructor(selector, imagePath) {
        this.selector = selector;
        this.imagePath = imagePath;
    }

    get theImageSelector() {
        return this.selector;
    }

    get theImagePath() {
        return this.imagePath;
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

console.log(imageArray);

// Jquery
$(document).ready(function() {
    $(imageArray[0].theImageSelector).attr("src", imageArray[0].theImagePath);
    $("button").click(function(){        
        $(imageArray[0].theImageSelector).fadeOut().fadeIn();
    });

});

// function moveSquare(){
    
//     $("#square1").animate({left:250}).animate({top:500}).animate({left:50}).animate({top:150});
    
// }
