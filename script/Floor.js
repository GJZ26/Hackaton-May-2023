
export class Floor{
    x; y; width; height; color; localcontext;
    /**
     * @type {CanvasRenderingContext2D}
     */
    constructor(canvas, color, x=0, y=0, width=(window.innerWidth - 1), height=100){
        this.canvas=canvas
        this.color=color
        this.height=height
        this.width=width
        this.x=x
        this.y=(window.innerHeight-1)-this.height
        this.localContext=this.canvas.getContext("2d");
        console.log(color)
    }

    render(x, y, render = true) {
        const x_render = x
        const y_render = y
        const width_render = this.width
        const heigh_render = this.height

        this.localContext.save()
        this.localContext.fillStyle = this.color
        this.localContext.fillRect(x_render, y_render, width_render, heigh_render)
        this.localContext.restore()
    }
    

    setContext(context) {
        this.localContext = context;
    }
}