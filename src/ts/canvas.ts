import { Player } from "./player";
import { Blob } from "./blob";

export class Canvas {
    elm: HTMLCanvasElement
    ctx: CanvasRenderingContext2D
    constructor(canvas: HTMLCanvasElement) {
        this.elm = canvas;
        this.ctx = this.elm.getContext("2d")!;
    }
    clear() {
        this.ctx.fillStyle = "black";
        this.ctx.rect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fill();
    }
    drawPlayer(player: Player) {
        this.ctx.beginPath();
        this.ctx.fillStyle = "grey";
        this.ctx.arc(player.x, player.y, player.width, 0, 2 * Math.PI);
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.moveTo(player.x, player.y);
        this.ctx.strokeStyle = "red";
        this.ctx.lineTo(player.x + player.direction.x * 100, player.y + player.direction.y * 100);
        this.ctx.stroke();
    }
    drawBlob(blob: Blob) {
        this.ctx.beginPath();
        this.ctx.fillStyle = blob.color;
        this.ctx.arc(blob.x, blob.y, 7, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}