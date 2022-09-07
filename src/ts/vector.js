export class Vector2D {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
    normalize() {
        let mag = this.magnitude();
        this.x /= mag;
        this.y /= mag;
    }
    scaleInPlace(n) {
        this.x *= n;
        this.y *= n;
    }
    scale(n) {
        return new Vector2D(this.x * n, this.y * n);
    }
    getOpposite() {
        return new Vector2D(-this.x, -this.y);
    }
}
