class Images{
    constructor(x, y, w, h, imgPath) {
        this.xcoord = x;
        this.ycoord = y;
        this.w = w;
        this.h = h;
        this.imgPath = imgPath;
    }

    get x()
    {
        return this.xcoord;
    }

    get y()
    {
        return this.ycoord;
    }

    get path()
    {
        return this.imgPath;
    }

    get height()
    {
        return this.h;
    }

}
