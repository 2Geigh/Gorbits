import type Planet from "./Planet.js";
import Bullet from "./Bullet.js";

class Screen {
    width_pixels: number;
    height_pixels: number;
    frames_per_second: number;
    canvas_element: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    seconds_per_frame: number;
    milliseconds_per_frame: number;
    inGameplayLoop: boolean;
    game_objects: Array<(Planet | Bullet)>;

    constructor(width_pixels: number, height_pixels: number, frames_per_second: number, canvas_element: HTMLCanvasElement, game_objects: Array<(Planet | Bullet)>, ctx: CanvasRenderingContext2D, inGameplayLoop: boolean) {
        
        this.width_pixels = width_pixels;
        this.height_pixels = height_pixels;
        this.canvas_element = canvas_element;
        this.game_objects = game_objects;
        this.ctx = ctx;
        this.inGameplayLoop = inGameplayLoop;

        // Compute screen refresh parameters
        this.frames_per_second = frames_per_second;
        this.seconds_per_frame = (1 / frames_per_second);
        this.milliseconds_per_frame = (this.seconds_per_frame * 1000)

        // Setup canvas element
        this.canvas_element.width = width_pixels;
        this.canvas_element.height = height_pixels;
        this.canvas_element.tabIndex = 0;

        // Ensure canvas element remains in focus for key inputs
        this.canvas_element.focus();
        this.canvas_element.addEventListener("focusout", (event: FocusEvent) => {
            this.canvas_element.focus();
        } )

        // Ensure it's possible to escape the gameplay loop
        this.canvas_element.addEventListener("keydown", (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                this.inGameplayLoop = false;
                console.log("'Escape' key has been pressed");
            }
        })
        
    }

    // endGameplayLoop(event:KeyboardEvent) {
    //     if (event.type == "keyup") {
    //         this.inGameplayLoop = false;
    //     }
    // };

    RefreshCanvasDrawing() {

        setTimeout(() => {

            this.ctx.clearRect(0, 0, this.width_pixels, this.height_pixels);

            for (let i=0; i < this.game_objects.length; i++) {
                this.game_objects[i]?.drawToScreen(this.ctx);
            }

        },this.milliseconds_per_frame);

    }

};

export default Screen;