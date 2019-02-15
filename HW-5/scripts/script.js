var startImage = ["image1", "image2", "image3", "image4", "image5", "image6","image7", "image8", "image9", "image10", "image11", "image12"];

var startImagePath = 'img/hidden-image.jpg';

/* addStartCard function populates array with 'blank image.'*/
function addStartCard() {

    for (var i =0; i < startImage.length; i ++) {        

    document.getElementById(startImage[i]).src=startImagePath;
    }
}

// var count = [0,0,0,0,0,0]; Need 6 slots. 2 for each picture. 