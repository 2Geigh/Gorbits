class Screen {
    width_pixels;
    height_pixels;
    framerate;
    canvas_element;
    ctx;
    // game_objects: Array<(Planet | Bullet)>;
    constructor(width_pixels, height_pixels, framerate, canvas_element, game_objects, ctx) {
        this.width_pixels = width_pixels;
        this.height_pixels = height_pixels;
        this.framerate = framerate;
        this.canvas_element = canvas_element;
        // this.game_objects = game_objects;
        this.ctx = ctx;
    }
    RefreshCanvasDrawing(game_objects) {
        for (let i = 0; i < game_objects.length; i++) {
            // if (game_objects[i] == undefined) {
            //     throw new Error(`Undefined game object`);
            // }
            // if (!('drawToScreen' in game_objects[i])) {
            game_objects[i]?.drawToScreen(this.ctx);
            // }
        }
    }
}
;
export default Screen;
//# sourceMappingURL=Screen.js.map