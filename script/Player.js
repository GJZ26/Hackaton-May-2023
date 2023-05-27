export default class Player{
    gravitySpeed = 0.5;
    constructor(canvas, x , y ,speed, width, height, color){
        this.canvas = canvas;
        this.speed ={
            x: 0,
            y: 0.1
        }
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
        this.position.y += this.speed.y;
        if(this.position.y + this.height +this.speed.y < this.canvas.height){
            this.speed.y += this.gravitySpeed;
        }
        else{
            this.speed.y = 0;
        }
        
    }
    clear(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    move(x,y){  

    }
    

}

