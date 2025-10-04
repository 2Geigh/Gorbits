import type Planet from "./Planet.js";
import type Bullet from "./Bullet.js";

class Screen {
    width_pixels: number;
    height_pixels: number;
    framerate: number;
    canvas_element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    // game_objects: Array<(Planet | Bullet)>;

    constructor(width_pixels: number, height_pixels: number, framerate: number, canvas_element: HTMLCanvasElement, game_objects: Array<(Planet | Bullet)>, ctx: CanvasRenderingContext2D) {
        this.width_pixels = width_pixels;
        this.height_pixels = height_pixels;
        this.framerate = framerate;
        this.canvas_element = canvas_element;
        // this.game_objects = game_objects;
        this.ctx = ctx;
    }

    RefreshCanvasDrawing(game_objects: Array<(Planet | Bullet)>) {
        for (let i=0; i < game_objects.length; i++) {
            // if (game_objects[i] == undefined) {
            //     throw new Error(`Undefined game object`);
            // }

            // if (!('drawToScreen' in game_objects[i])) {
                game_objects[i]?.drawToScreen(this.ctx);
            // }

            
        }
    }
};

export default Screen;