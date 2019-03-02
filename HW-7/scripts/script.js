var myViewFinderArray = new Array();

class ViewFinderObjects
{
    constructor(title, image, description, author, year)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
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

    get theTitle()
    { 
        return this.title;
    }

    get theImage()
    { 
        return this.image;
    }
}

function initializeArray()
{
    var myViewFinderTitle = new ViewFinderObjects("2 Bison");
    var myViewFinderDescription = new ViewFinderObjects("Black and white photograph of 2 bison");
    myViewFinderArray.push(myViewFinderTitle);
    myViewFinderArray.push(myViewFinderDescription);
}

function getInformation()
{
    // console.log(myViewFinder.theTitle);
    // console.log(myViewFinder.toString());
    document.getElementById("title").innerHTML = myViewFinderArray[0].toStringTitle();
    document.getElementById("description").innerHTML = myViewFinderArray[0].toStringDescription();
    
}