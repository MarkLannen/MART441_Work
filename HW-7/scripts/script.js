var myViewFinderArray = new Array();

class ViewFinderObjects
{
    constructor(title, description, author, year)
    {
        this.title = title;
        // this.image = image;
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

    get theDescription()
    { 
        return this.description;
    }
}

function initializeArray()
{
    var myViewFinder1 = new ViewFinderObjects("2 Bison", "Black and white photograph of 2 bison");
    var myViewFinder2 = new ViewFinderObjects();
    myViewFinderArray.push(myViewFinder1);
    // myViewFinderArray.push(myViewFinder2);
}

function getInformation()
{
    document.getElementById("title").innerHTML = myViewFinderArray[0].toStringTitle();
    document.getElementById("description").innerHTML = myViewFinderArray[0].toStringDescription();
}