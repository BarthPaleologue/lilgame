import {Canvas} from "./canvas";
import {Game} from "./game";
import "../scss/index.scss";

const canvasElement = document.getElementById("renderCanvas") as HTMLCanvasElement;
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

const canvas = new Canvas(canvasElement);
const game = new Game(canvas);
game.start();

