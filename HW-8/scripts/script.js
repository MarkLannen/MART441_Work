console.log("World!")

class Images {
    constructor(image) {
        this.image = image;
    }
}

$(document).ready(function() {
    
    $("button").click(function(){
        
        setInterval(moveSquare, 2000);
    });

});

function moveSquare(){
    
    $("#square1").animate({left:250}).animate({top:500}).animate({left:50}).animate({top:150});
    
}
