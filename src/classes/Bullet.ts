import type { Coordinate } from "../types/Coordinate.js";

class Bullet {
    position: Coordinate;
    velocity: Coordinate;
    radius: number;
    mass: number;
    color: string;

    constructor(position: Coordinate, velocity: Coordinate, radius: number, mass: number, color: string) {
        this.position = position;
        this.velocity = velocity;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }

    updatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    drawToScreen(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        ctx.fill();
        ctx.stroke(); 
    }
}

export default Bullet;