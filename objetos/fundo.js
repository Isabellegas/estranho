class Fundo {
    constructor() {
        this.w = width;
        this.h = height;
        this.x = 0;
        this.y = height - this.h;;
    }

    show() {
        image(imgfundo, this.x, this.y, this.w, this.h)
    }
    move() {
        this.x -= 16;
    }
}