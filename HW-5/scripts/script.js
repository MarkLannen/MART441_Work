var startImage = ["image1", "image2", "image3", "image4", "image5", "image6","image7", "image8", "image9", "image10"];

var startImagePath = 'img/blank-image.jpg';



function addStartCard() {

    for (var i =0; i < startImage.length; i ++) {
        

    document.getElementById(startImage[i]).src=startImagePath;
    }
}