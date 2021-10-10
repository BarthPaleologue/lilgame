import { Canvas } from "./canvas";
import { Game } from "./game";

export function start(canvasElement: HTMLElement) {
    let canvas = new Canvas(canvasElement);
    let game = new Game(canvas);
    game.start();
}

