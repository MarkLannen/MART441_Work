class Squares{
    constructor(x, y, w, h, color) {
        this.xcoord = x;
        this.ycoord = y;
        this.w = w;
        this.h = h;
        this.color = color;
    }

    get x()
    {
        return this.xcoord;
    }

    get y()
    {
        return this.ycoord;
    }

    get width()
    {
        return this.w;
    }

    get height()
    {
        return this.h;
    }

}
