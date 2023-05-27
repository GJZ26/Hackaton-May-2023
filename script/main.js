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
    player1.gravity(floor.height);
    player1.clear();
    frame.frames+=1
    if(frame.frames==1 || setInterval){
        y=canvas.height;
        minWidth=20;
        maxWidth=200;
        width=Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
        minGap=50;
        maxGap=200;
        gap=Math.floor(Math.random()*(minGap-maxGap+1)+minGap)

        context=canvas.getContext("2d")
        obstacles.push(new obstacles(canvas, "#eb8b1f",0, y, width, 10))
        obstacles.push(new obstacles(canvas, "#eb8b1f",0, y-width-gap, width, gap))
    }

    obstacles.forEach(obstacle => {
        obstacle.y+=1
        obstacle.render(0,0)
    });
    floor.render(0,floor.y);
    floor.y+=1
    player1.draw();

}

config()    