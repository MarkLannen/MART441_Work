class ViewFinderObjects
{
    constructor(title, description, author, year)
    {
        this.title = title;
        this.description = description;
        this.author = author;
        this.year = year;
    }

    toString()
    {
        return "Title: " + this.title;
    }

    get theTitle()
    { 
        return this.title;
    }
}

function getInformation()
{
    var myViewFinder = new ViewFinderObjects("2 Bison");
    // console.log(myViewFinder.theTitle);
    // console.log(myViewFinder.toString());
    document.getElementById("title").innerHTML = myViewFinder.toString();
}