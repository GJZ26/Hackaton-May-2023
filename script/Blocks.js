export default class Block {
    constructor(canvas,player1,player2) {
        this.canvas = canvas;
        /** @type {CanvasRenderingContext2D}*/
        this.context = this.canvas.getContext("2d");

        this.width = 200
        this.x = this.randomIntFromInterval(0, window.innerWidth - 1)
        this.y = this.randomIntFromInterval(100, 500)
        this.sprite = document.createElement("img")
        this.sprite.src = "./platform.png"
        this.player1 = player1;
        this.player2 = player2
    }

    render() {
        // this.context.fillStyle = "red"
        // this.context.fillRect(
        //     this.x,
        //     this.y,
        //     this.width,
        //     30
        // )
        this.context.shadowBlur = 1
        this.context.shadowColor = "black"
        this.context.shadowOffsetX = 5
        this.context.shadowOffsetY = 5
        this.context.drawImage(this.sprite, this.x, this.y)
    }

    randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    checkCollider(){
    }
}