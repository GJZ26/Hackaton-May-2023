const canvas = document.createElement("canvas")
document.body.appendChild(canvas)
canvas.style.backgroundColor = "gray"


function config() {
    canvas.width = window.innerWidth - 1
    canvas.height = window.innerHeight - 1

    requestAnimationFrame(update)
}

function update() {
    // Animation loop

    requestAnimationFrame(update)
}

config()