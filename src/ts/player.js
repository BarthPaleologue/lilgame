import { Vector2D } from "./vector";
import { Blob } from "./blob";
export class Player extends Blob {
    constructor(x, y) {
        super(x, y, new Vector2D(1, 1), "grey");
    }
    push() {
        this.speed.x -= this.direction.x / this.weight;
        this.speed.y -= this.direction.y / this.weight;
    }
}
