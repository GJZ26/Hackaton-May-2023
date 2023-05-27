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
        this.position.x += this.speed.x;
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

    keys={
        ArrowRight:{
            pressed:false,
        },
        ArrowLeft:{
            pressed:false,
        }
    }
    move(){
        this.speed.x = 0
        if(this.keys.ArrowRight.pressed) this.speed.x = -10
        else if (this.keys.ArrowLeft.pressed) this.speed.x = 10
    }

    pressKey(keydow){  
        switch(keydow){
            case "ArrowRight":
               this.keys.ArrowLeft.pressed = true;
            break;
            case "ArrowLeft":
                this.keys.ArrowRight.pressed = true;
            break;
            case "ArrowUp":
                this.speed.y = -20
            break;
        }
    }
    unpressKey(keydow){  
        switch(keydow){
            case "ArrowRight":
               this.keys.ArrowLeft.pressed = false;
            break;
            case "ArrowLeft":
                this.keys.ArrowRight.pressed = false;
            break;
        }
    }
    

}


