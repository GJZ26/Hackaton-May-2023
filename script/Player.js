export default class Player{
    constructor(canvas, x , y ,speed, width, height, color){
        this.canvas = canvas;
        this.speed = speed;
        this.width = width;
        this.height = height;
        this.color = color;
        this.position = {
            x: x,
            y : y
        };
    /**
     * @type {CanvasRenderingContext2D}
     */
        this.context = this.canvas.getContext("2d");
    }

    draw(){
        this.context.fillStyle = this.color
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    gravity(){
        this.position.y += 1.9
    }
    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    move(x,y){  

    }
    

}

