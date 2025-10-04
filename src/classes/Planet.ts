import type { Coordinate } from "../types/Coordinate.js";

class Planet {
    position: Coordinate;

    radius: number;
    mass: number;

    color: string;

    constructor(position:Coordinate, radius:number, mass:number, color: string) {
        this.position = position;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }

    drawToScreen(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        ctx.fill();
        ctx.stroke(); 
    }
}

export default Planet;