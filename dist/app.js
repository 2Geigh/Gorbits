// import Color, { type ColorInstance } from "color";
import Planet from "./classes/Planet.js";
import Bullet from "./classes/Bullet.js";
import Screen from "./classes/Screen.js";
const canvas = document.querySelector("canvas");
if (canvas == null) {
    throw new Error("No canvas element found");
}
const ctx = canvas?.getContext("2d");
if ((ctx == null) || (ctx == undefined)) {
    throw new Error("No 2D rendering context found.");
}
// GAME SETUP
const Mars = new Planet({ "x": 960, "y": 540 }, 50, 50, "red");
const Cassiopeia = new Bullet({ "x": 0, "y": 540 }, { "x": 1, "y": 0 }, 10, 20, "blue");
let game_objects = [Mars, Cassiopeia];
let inGameplayLoop = true;
const Viewport = new Screen(1920, 1080, 100, canvas, game_objects, ctx, inGameplayLoop);
Viewport.RefreshCanvasDrawing();
// GAMEPLAY LOOP
// while (Viewport.inGameplayLoop) {
// Cassiopeia.updatePosition();
// Viewport.RefreshCanvasDrawing();
// }
let frame_number = 0;
const GameplayLoop = setInterval(() => {
    console.clear();
    if (!Viewport.inGameplayLoop) {
        clearInterval(GameplayLoop);
        console.log(`We've exited the gameplay loop`);
    }
    Cassiopeia.updatePosition();
    Viewport.RefreshCanvasDrawing();
    console.log(`We're in the gameplay loop\nViewport.inGameplayLoop: ${Viewport.inGameplayLoop}\nFrame: ${frame_number}`);
    frame_number += 1;
}, Viewport.milliseconds_per_frame);
// Mars.drawToScreen(ctx);
// Cassiopeia.drawToScreen(ctx);
//# sourceMappingURL=app.js.map