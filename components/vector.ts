export class Vector2D {
    x: number;
    y: number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }
    magnitude() {
        return Math.sqrt(this.x**2 + this.y ** 2)
    }
    normalize() {
        let mag = this.magnitude();
        this.x /= mag;
        this.y /= mag;
    }
    scaleInPlace(n: number) {
        this.x *= n;
        this.y *= n;
    }
    scale(n: number) {
        return new Vector2D(this.x * n, this.y * n);
    }
    getOpposite() {
        return new Vector2D(-this.x, -this.y);
    }
}