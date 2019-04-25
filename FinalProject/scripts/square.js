class Square{

    constructor(xCoord,yCoord,objectHeight,objectWidth)
    {
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        this.objectHeight = objectHeight;
        this.objectWidth = objectWidth;
    }

    get x()
    {
        return this.xCoord;
    }

    set x(value)
    {
        this.xCoord = value;
    }
    get y()
    {
        return this.yCoord;
    }
    set y(value)
    {
        this.yCoord = value;
    }

    get height()
    {
        return this.objectHeight;
    }

    get width()
    {
        return this.objectWidth;
    }
    
}
