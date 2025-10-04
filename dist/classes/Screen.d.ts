import type Planet from "./Planet.js";
import Bullet from "./Bullet.js";
declare class Screen {
    width_pixels: number;
    height_pixels: number;
    frames_per_second: number;
    canvas_element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    seconds_per_frame: number;
    milliseconds_per_frame: number;
    inGameplayLoop: boolean;
    constructor(width_pixels: number, height_pixels: number, frames_per_second: number, canvas_element: HTMLCanvasElement, ctx: CanvasRenderingContext2D, inGameplayLoop: boolean);
    RefreshCanvasDrawing(game_objects: Array<Planet | Bullet>): void;
}
export default Screen;
//# sourceMappingURL=Screen.d.ts.map