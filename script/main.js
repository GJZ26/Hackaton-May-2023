import Player from './Player.js';
import { Floor } from "./Floor.js"
import { Performance } from "./Performance.js";


const canvas = document.createElement("canvas")

const floor=new Floor(canvas,"green")
const player1 = new Player(canvas, 0,0, 3.8, 100, 100, "red")

let obstacles=[]

document.body.appendChild(canvas)

canvas.style.backgroundColor = "gray"


const frame=new Performance()

function config() {
    canvas.width = window.innerWidth - 1
    canvas.height = window.innerHeight - 1
    requestAnimationFrame(update)
}

function update() {
    requestAnimationFrame(update)
    player1.clear();
    player1.gravity();
    floor.render(0,floor.y);
    player1.draw();
    floor.y+=1
    console.log(player1.colition(floor))
}

config()    