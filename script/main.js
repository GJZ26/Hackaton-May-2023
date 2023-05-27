import { Floor } from "./Floor.js"
import { Performance } from "./Performance.js";


const canvas = document.createElement("canvas")
const floor=new Floor("#edadf1")
const frame=new Performance()
let obstacles=[];
floor.setContext(canvas.getContext('2d'));

document.body.appendChild(canvas)

canvas.style.backgroundColor = "gray"

window.addEventListener("resize",()=>{
    canvas.width = window.innerWidth - 1
    canvas.height = window.innerHeight - 1
})

function config() {
    canvas.width = window.innerWidth - 1
    canvas.height = window.innerHeight - 1
    requestAnimationFrame(update)
}

function update() {
    floor.render(0,floor.y,100)
    obstacles.forEach(obstacle => {
        obstacle.crashWith();
    });
    requestAnimationFrame(update)
}

config()    