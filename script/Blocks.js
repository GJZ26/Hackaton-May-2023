export default class Block{
    constructor(canvas){
        this.canvas = canvas;
        /** @type {CanvasRenderingContext2D}*/
        this.context = this.canvas.getContext("2d");

        this.width = this.randomIntFromInterval(30,200)
        this.x = this.randomIntFromInterval(0,window.innerWidth-1)
    }

    render(){
        this.context.fillStyle = "red"
        this.context.fillRect(
            this.x,
            0,
            this.width,
            30
        )
    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
}