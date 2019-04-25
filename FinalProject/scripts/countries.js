class Countries{
    constructor(x, y, path, countryName){
    this.x = x;
    this.y = y;
    this.path = path;
    this.countryName = countryName;
    this.x_step = 5;
    this.y_step = 5;
    }

    get x_coord () {
        return this.x;
    }

    get y_coord () {
        return this.y;
    }

    get get_path () {
        return this.path;
    }

    get get_countryName() {
        return this.countryName;
    }
}
