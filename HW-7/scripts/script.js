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

    // get theTitle()
    // { 
    //     return this.title;
    // }

}

function initializeArray()
{
    var myViewFinder1 = new ViewFinderObjects('img/2BisonHorizon-750px.jpg', "2 Bison", "Black and white photograph of 2 bison", "Mark Lannen", "2014");
    var myViewFinder2 = new ViewFinderObjects();
    myViewFinderArray.push(myViewFinder1);
    // myViewFinderArray.push(myViewFinder2);
}

function getInformation()
{
    document.getElementById("image").source = myViewFinderArray[0].image;
    document.getElementById("title").innerHTML = myViewFinderArray[0].toStringTitle();
    document.getElementById("description").innerHTML = myViewFinderArray[0].toStringDescription();
    document.getElementById("photographer").innerHTML = myViewFinderArray[0].toStringPhotographer();
    document.getElementById("year").innerHTML = myViewFinderArray[0].toStringYear();
}