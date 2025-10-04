import type { Coordinate } from "../types/Coordinate.js";
declare class Bullet {
    position: Coordinate;
    velocity: Coordinate;
    radius: number;
    mass: number;
    color: string;
    constructor(position: Coordinate, velocity: Coordinate, radius: number, mass: number, color: string);
    updatePosition(position: Coordinate, velocity: Coordinate): void;
    drawToScreen(ctx: CanvasRenderingContext2D): void;
}
export default Bullet;
//# sourceMappingURL=Bullet.d.ts.map