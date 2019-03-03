var myViewFinderArray = new Array();

class ViewFinderObjects
{
    constructor(image, title, description, photographer, year)
    {
        this.image = image;
        this.title = title;
        this.description = description;
        this.photographer = photographer;
        this.year = year;
    }
 
    toStringImage()
    {
        return this.image;
    }
    
    toStringTitle()
    {
        return "Title: " + this.title;
    }

    toStringDescription()
    {
        return "Description: " + this.description;
    }

    toStringPhotographer()
    {
        return "Photographer: " + this.photographer;
    }

    toStringYear()
    {
        return "Year: " + this.year;
    }

    get theTitle()
    { 
        return this.title;
    }

}

function initializeArray()
{
    var myViewFinder1 = new ViewFinderObjects("img/2BisonHorizon-750px.jpg", "2 Bison", "Black and white photograph of 2 bison", "Mark Lannen", "2014");
    var myViewFinder2 = new ViewFinderObjects("img/Bitterroots-750px.jpg", "Bitterroot macro", "Macro photograph of bitterroot flowers", "Mark Lannen", "2015");
    var myViewFinder3 = new ViewFinderObjects("img/FlatheadLake-750px.jpg", "Flathead B&W", "Black and white long exposure from south shore of Flathead Lake", "Mark Lannen", "2012");
    var myViewFinder4 = new ViewFinderObjects("img/NorthCrowBarn-750px.jpg", "North Crow barn timestack", "Timestack of barn near North Crow Creek - Mission Mountains", "Mark Lannen", "2013");
    var myViewFinder5 = new ViewFinderObjects("img/SonyokMtn-750px.jpg", "Sonyok Mountain timestack", "Timestack of sunset from Sonyok Mountain", "Mark Lannen", "2014");


    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
    myViewFinderArray.push(myViewFinder5);
}

function getInformation()
{
    document.getElementById("image").src = myViewFinderArray[4].toStringImage();
    document.getElementById("title").innerHTML = myViewFinderArray[4].toStringTitle();
    document.getElementById("description").innerHTML = myViewFinderArray[4].toStringDescription();
    document.getElementById("photographer").innerHTML = myViewFinderArray[4].toStringPhotographer();
    document.getElementById("year").innerHTML = myViewFinderArray[4].toStringYear();
}