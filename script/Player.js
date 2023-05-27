import { Bullet } from "./Bullet.js";

export default class Player {
    gravitySpeed = 0.5;

    bullets = []
    constructor(canvas, x, y, speed, width, height, color, path) {
        this.sprite = document.createElement("img")
        this.sprite.src = path
        this.canvas = canvas;
        this.speed = {
            x: 0,
            y: 0.1
        }
        this.width = width;
        this.height = height;
        this.color = color;
        this.position = {
            x: x,
            y: y
        };
        /**
         * @type {CanvasRenderingContext2D}
         */
        this.context = this.canvas.getContext("2d");

    }

    draw() {
        this.context.fillStyle = this.color
        this.context.fillRect(this.position.x, this.position.y, this.width, this.height); 
        this.context.drawImage(this.sprite, this.position.x, this.position.y,)
    }
    gravity() {
        this.position.y += this.speed.y;
        this.position.x += this.speed.x;
        if (this.position.y + this.height + this.speed.y < this.canvas.height) {
            this.speed.y += this.gravitySpeed;
        }
        else {
            this.speed.y = 0;
        }

    }
    clear() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    keys = {
        ArrowRight: {
            pressed: false,
        },
        ArrowLeft: {
            pressed: false,
        },
        d: {
            pressed: false,
        },
        a: {
            pressed: false,
        }
    }
    move() {
        this.speed.x = 0
        if (this.keys.ArrowRight.pressed) this.speed.x = -10
        else if (this.keys.ArrowLeft.pressed) this.speed.x = 10

        if (this.keys.d.pressed) this.speed.x = 10
        else if (this.keys.a.pressed) this.speed.x = -10
    }

    pressKey(keydow) {
        switch (keydow) {
            case "ArrowRight":
                this.keys.ArrowLeft.pressed = true;
                break;
            case "ArrowLeft":
                this.keys.ArrowRight.pressed = true;
                break;
            case "ArrowUp":

                this.audio = new AudioContext();
                this.os = this.audio.createOscillator();
                this.os.frequency.value = 300;
                this.os.type = "square";
                this.os.connect(this.audio.destination);
                this.os.start(this.audio.currentTime);
                this.os.stop(this.audio.currentTime + 0.1);
                this.speed.y = -15
                break;
        }
    }
    unpressKey(keydow) {
        switch (keydow) {
            case "ArrowRight":
                this.keys.ArrowLeft.pressed = false;
                break;
            case "ArrowLeft":
                this.keys.ArrowRight.pressed = false;
                break;
        }
    }
    pressKey2(keydow) {
        console.log(keydow)
        switch (keydow) {
            case "a":
                this.keys.a.pressed = true;
                break;
            case "d":
                this.keys.d.pressed = true;
                break;
            case "w":
                this.audio = new AudioContext();
                this.os = this.audio.createOscillator();
                this.os.frequency.value = 400;
                this.os.type = "square";
                this.os.connect(this.audio.destination);
                this.os.start(this.audio.currentTime);
                this.os.stop(this.audio.currentTime + 0.1);
                this.speed.y = -15
                break;
        }
    }
    unpressKey2(keydow) {
        switch (keydow) {
            case "a":
                this.keys.a.pressed = false;
                break;
            case "d":
                this.keys.d.pressed = false;
                break;
        }
    }

    shoot(...args) {
        // if (Object.keys(this.bullets).length >= this.max_bullet) {
        //     return
        // }
        // this.turn(args)
        this.bullets[performance.now()] = new Bullet(this.context, performance.now(), { x: this.x_center, y: this.y_center }, this.angle, this.bodyColor)
    }

}


