import Player from './Player.js';
const canvas = document.createElement("canvas")
document.body.appendChild(canvas)
canvas.style.backgroundColor = "gray"

const player1 = new Player(canvas, 0,0, 3.8, 100, 100, "red")


function config() {
    canvas.width = window.innerWidth - 1
    canvas.height = window.innerHeight - 1
    requestAnimationFrame(update)
}

function update() {
    // Animation loop
    requestAnimationFrame(update)
    player1.gravity();
    player1.clear();
    player1.draw();

}

config()