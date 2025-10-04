import type { Coordinate } from "../types/Coordinate.js";
declare class Planet {
    position: Coordinate;
    radius: number;
    mass: number;
    color: string;
    constructor(position: Coordinate, radius: number, mass: number, color: string);
    drawToScreen(ctx: CanvasRenderingContext2D): void;
}
export default Planet;
//# sourceMappingURL=Planet.d.ts.map