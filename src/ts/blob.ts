import { Vector2D } from "./vector";
import {Settings} from "./settings";

export class Blob {
    x: number;
    y: number;
    direction: Vector2D;
    speed: Vector2D;
    drag = 0.001;
    width = 20;
    weight = 2;
    color: string;
    constructor(x:number, y:number, direction: Vector2D, color: string) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = this.direction;
        this.speed.scale(1);
        this.color = color;
    }
    update() {
        this.checkCollisions();
        this.speed.x -= this.drag * this.speed.x;
        this.speed.y -= this.drag * this.speed.y;
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    checkCollisions() {
        if (this.x <= this.width / 2) {
            this.speed.x = -1 * this.speed.x;
        }
        if (this.y <= this.width / 2) {
            this.speed.y = -1 * this.speed.y;
        }
        if (this.x >= Settings.CANVAS_WIDTH - this.width / 2) {
            this.speed.x = -1 * this.speed.x;
        }
        if (this.y >= Settings.CANVAS_HEIGHT - this.width / 2) {
            this.speed.y = -1 * this.speed.y;
        }
    }
}