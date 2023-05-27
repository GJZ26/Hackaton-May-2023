import Player from './Player.js';
import Block from './Blocks.js';

const canvas = document.createElement("canvas")
document.body.appendChild(canvas)
canvas.style.backgroundColor = "gray"

const player1 = new Player(canvas, 0,0, 0, 100, 100, "red","./sprite2.png")
const player2 = new Player(canvas, 300,200, 0, 100, 100, "red","./sprite.png")
const bg = document.createElement('img')
bg.src = "./algo.jpg"

const platform = new Block(canvas,player1,player2)
const platform1 = new Block(canvas,player1,player2)
const platform2 = new Block(canvas,player1,player2)
const platform3 = new Block(canvas,player1,player2)

function config() {
    canvas.width = window.innerWidth - 1
    canvas.height = window.innerHeight - 1
    requestAnimationFrame(update)
}

function update() {
    // Animation loop
    requestAnimationFrame(update)
    player1.clear();

    platform.checkCollider()
    platform1.checkCollider()
    platform2.checkCollider()
    platform3.checkCollider()

    player1.context.drawImage(bg,0,0, window.innerWidth,window.innerHeight)
    platform.render()
    platform1.render()
    platform2.render()
    platform3.render()
    player1.gravity();
    player1.draw();
    player2.draw();
    player2.gravity();
    player1.move();
    player2.move();
}

config()

window.addEventListener("keydown", (e)=>{
    player1.pressKey(e.key)
})

window.addEventListener("keyup", (e)=>{
    player1.unpressKey(e.key)
})

window.addEventListener("keydown", (e)=>{
    player2.pressKey2(e.key)
})

window.addEventListener("keyup", (e)=>{
    player2.unpressKey2(e.key)
})

window.addEventListener('click', (e) => {
    player1.shoot(e.clientX, e.clientY)
})