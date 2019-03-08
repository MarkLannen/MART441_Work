console.log("World!")

$(document).ready(function() {
    
    $("button").click(function(){
        
        moveSquare();
        
    });

});

function moveSquare(){
    
    $("#square1").animate({left:250}).animate({top:500}).animate({left:50}).animate({top:150});
    
}
