import { Player } from "./player";
import { Vector2D } from "./vector";
import { Blob } from "./blob";
export class Game {
    constructor(canvas) {
        this.interval = 0;
        this.mousedown = false;
        this.iterationCount = 0;
        this.canvas = canvas;
        this.player = new Player(200, 200);
        this.blobs = [];
        this.canvas.elm.onmousemove = e => {
            let mx = e.clientX;
            let my = e.clientY;
            let x = this.player.x;
            let y = this.player.y;
            let direction = new Vector2D(mx - x, my - y);
            direction.normalize();
            this.player.direction = direction;
        };
        this.canvas.elm.onmousedown = () => {
            this.mousedown = true;
        };
        this.canvas.elm.onmouseup = () => {
            this.mousedown = false;
        };
        this.canvas.elm.oncontextmenu = e => {
            e.preventDefault();
            this.blobs.push(new Blob(this.player.x, this.player.y, this.player.direction.getOpposite().scale(5), "red"));
        };
    }
    start() {
        this.interval = setInterval(() => this.update(), 1000 / 60);
    }
    stop() {
        clearInterval(this.interval);
    }
    listenToMouse() {
    }
    update() {
        this.iterationCount++;
        this.listenToMouse();
        if (this.mousedown) {
            this.player.push();
            if (this.iterationCount % 4 == 0) {
                this.blobs.push(new Blob(this.player.x, this.player.y, this.player.direction, "green"));
            }
        }
        this.player.update();
        this.canvas.clear();
        this.canvas.drawPlayer(this.player);
        for (let blob of this.blobs) {
            blob.update();
            this.canvas.drawBlob(blob);
        }
    }
}
