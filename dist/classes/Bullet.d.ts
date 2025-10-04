import type { Coordinate } from "../types/Coordinate.js";
declare class Bullet {
    position: Coordinate;
    velocity_pixels_per_frame: Coordinate;
    radius: number;
    mass: number;
    color: string;
    frames_per_second: number;
    constructor(position: Coordinate, velocity_pixels_per_frame: Coordinate, radius: number, mass: number, color: string, frames_per_second: number);
    updatePosition(): void;
    drawToScreen(ctx: CanvasRenderingContext2D): void;
}
export default Bullet;
//# sourceMappingURL=Bullet.d.ts.map