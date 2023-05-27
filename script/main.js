import Player from './Player.js';
const canvas = document.createElement("canvas")
document.body.appendChild(canvas)
canvas.style.backgroundColor = "gray"

const player1 = new Player(canvas, 0,0, 0, 100, 100, "red")
const player2 = new Player(canvas, 300,200, 0, 100, 100, "red")


function config() {
    canvas.width = window.innerWidth - 1
    canvas.height = window.innerHeight - 1
    requestAnimationFrame(update)
}

function update() {
    // Animation loop
    requestAnimationFrame(update)
    player1.clear();
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