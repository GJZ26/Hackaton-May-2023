export class Obstacles{
    x;y;color;width;height;localcontext;
        /**
     * @type {CanvasRenderingContext2D}
     */
    constructor(canvas,color,x,y,width, height){
        this.canvas=canvas
        this.x=x
        this.y=y
        this.color=color
        this.speedX=0
        this.speedY=0
        this.width=width
        this.height=height

    }

     render(x, y, render = true) {
        const x_render = x
        const y_render = y

        const width_render = this.width
        const heigh_render = this.height

        this.localContext.save()
        this.localContext.fillStyle = this.bodyColor
        this.localContext.fillRect(x_render, y_render, width_render, heigh_render)
        this.localContext.restore()
    }

    crashWith(playerObject){
        let myleft = this.x;
        let myright = this.x + (this.width);
        let mytop = this.y;
        let mybottom = this.y + (this.height);
        let otherleft = playerObject.x;
        let otherright = playerObject.x + (playerObject.width);
        let othertop = playerObject.y;
        let otherbottom = playerObject.y + (playerObject.height);
        let crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
    }
    
     setContext(context) {
        this.localContext = context;
    }

    
}