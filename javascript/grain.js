class Grain {
    constructor() {
        this.x;
        this.y;
        this.c; //colour

    }

    show(x,y,r,c) {
        this.x = x;
        this.y = y;
        this.c = c;
        this.r = r
        strokeWeight(0.5)
        fill(this.c);
        stroke(0);
        circle(this.x, this.y, r);
    }
}