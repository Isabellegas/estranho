class Fundo{
    constructor(){
        this.w = width;
        this.h = height - this.h;
        this.x = 0;
        this.y = 0;
    }
    
    show(){
        image(imgobstaculo, this.x, this.y, this.w, this.h)
    }
    move(){
        this.x -= 16;
    }
}