class Fundo{
    constructor(){
        this.w = 70;
        this.h = 70;
        this.x = width;
        this.y = height - this.h;
    }
    
    show(){
        image(imgfundo, this.x, this.y, this.w, this.h)
    }
    move(){
        this.x -= 16;
    }
}