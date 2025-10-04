import type Planet from "./Planet.js";
import type Bullet from "./Bullet.js";
declare class Screen {
    width_pixels: number;
    height_pixels: number;
    framerate: number;
    canvas_element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(width_pixels: number, height_pixels: number, framerate: number, canvas_element: HTMLCanvasElement, game_objects: Array<(Planet | Bullet)>, ctx: CanvasRenderingContext2D);
    RefreshCanvasDrawing(game_objects: Array<(Planet | Bullet)>): void;
}
export default Screen;
//# sourceMappingURL=Screen.d.ts.map