import type { Coordinate } from "../types/Coordinate.js";

class Bullet {
    position: Coordinate;
    velocity_pixels_per_frame: Coordinate;
    // velocity_percentage_of_viewport_per_second: Coordinate;
    radius: number;
    mass: number;
    color: string;
    frames_per_second: number;

    constructor(position: Coordinate, velocity_pixels_per_frame: Coordinate, radius: number, mass: number, color: string, frames_per_second: number) {
        this.position = position;
        this.velocity_pixels_per_frame = velocity_pixels_per_frame;
        this.frames_per_second = frames_per_second;

        // velocity_percentage_of_viewport_per_second_X = velocity_pixels_per_frame

        // this.velocity_percentage_of_viewport_per_second = {"x": velocity_pixels_per_frame}
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }

    updatePosition() {

        const seconds_per_frame = (1 / this.frames_per_second);

        this.position.x += (this.velocity_pixels_per_frame.x * seconds_per_frame);
        this.position.y += (this.velocity_pixels_per_frame.y * seconds_per_frame);
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