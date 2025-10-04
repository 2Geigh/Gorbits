// import Color, { type ColorInstance } from "color";
import Planet from "./classes/Planet.js";
import Bullet from "./classes/Bullet.js";
import Screen from "./classes/Screen.js";
import distanceBetweenCenters from "./physics/distanceBetweenCenters.js";
import gravitationalForce from "./physics/gravitationalForce.js";
const canvas = document.querySelector("canvas");
if (canvas == null) {
    throw new Error("No canvas element found");
}
const ctx = canvas?.getContext("2d");
if ((ctx == null) || (ctx == undefined)) {
    throw new Error("No 2D rendering context found.");
}
// GAME SETUP
let inGameplayLoop = true;
const Viewport = new Screen(1920, //px width
1080, //px height
100, // frames per second
canvas, ctx, inGameplayLoop);
const Mars = new Planet({ "x": 960, "y": 540 }, // position
50, // radius
1000, // mass
"red" // color
);
const Cassiopeia = new Bullet({ "x": 1920 - 300, "y": 540 }, // position
{ "x": 100, "y": 100 }, // velocity
10, // radius
20, // mass
"blue", // color
Viewport.frames_per_second // framerate
);
let game_objects = [Mars, Cassiopeia];
Viewport.RefreshCanvasDrawing(game_objects);
// GAMEPLAY LOOP
// while (Viewport.inGameplayLoop) {
// Cassiopeia.updatePosition();
// Viewport.RefreshCanvasDrawing();
// }
let frame_number = 0;
let milliseconds = 0;
const isWithinBounds = (bullet, viewport) => {
    let isWithinBounds = { x: true, y: true };
    if (bullet.position.x + bullet.radius >= viewport.width_pixels) {
        isWithinBounds.x = false;
    }
    else if (bullet.position.x - bullet.radius <= 0) {
        isWithinBounds.x = false;
    }
    if (bullet.position.y + bullet.radius >= viewport.height_pixels) {
        isWithinBounds.y = false;
    }
    else if (bullet.position.y - bullet.radius <= 0) {
        isWithinBounds.y = false;
    }
    return isWithinBounds;
};
const GameplayLoop = setInterval(() => {
    // console.clear();
    if (!Viewport.inGameplayLoop) {
        clearInterval(GameplayLoop);
        // console.log(`We've exited the gameplay loop`);
    }
    frame_number += 1;
    milliseconds += Viewport.milliseconds_per_frame;
    console.clear();
    console.log(`
                                                    Time: ${milliseconds / 1000} seconds\n
                                                    Frame: ${frame_number}\n
                                                    dx: ${distanceBetweenCenters(Cassiopeia, Mars).distance_x.toFixed(2)}px\n
                                                    dy: ${distanceBetweenCenters(Cassiopeia, Mars).distance_y.toFixed(2)}px\n
                                                    Fg_x: ${gravitationalForce(Cassiopeia, Mars).x.toFixed(2)}\n
                                                    Fg_y: ${gravitationalForce(Cassiopeia, Mars).y.toFixed(2)}\n
                                                    Fg: ${gravitationalForce(Cassiopeia, Mars).scalar}
                                                `);
    Cassiopeia.updatePosition();
    // HANDLE COLLISION
    if (!isWithinBounds(Cassiopeia, Viewport).x) {
        Cassiopeia.velocity_pixels_per_frame.x *= -1;
    }
    if (!isWithinBounds(Cassiopeia, Viewport).y) {
        Cassiopeia.velocity_pixels_per_frame.y *= -1;
    }
    Viewport.RefreshCanvasDrawing(game_objects);
    // console.log(/*`We're in the gameplay loop\nViewport.inGameplayLoop: ${Viewport.inGameplayLoop}\n*/`Frame: ${frame_number}`);
    // HANDLE GRAVITY
    Cassiopeia.velocity_pixels_per_frame.x += gravitationalForce(Cassiopeia, Mars).x;
    Cassiopeia.velocity_pixels_per_frame.y += gravitationalForce(Cassiopeia, Mars).y;
}, Viewport.milliseconds_per_frame);
// const Timer = setInterval(() => {
//                                     if (!Viewport.inGameplayLoop) {
//                                         clearInterval(Timer)
//                                     }
//                                     milliseconds += 1;
//                                     console.clear();
// }, 1);
// Mars.drawToScreen(ctx);
// Cassiopeia.drawToScreen(ctx);
//# sourceMappingURL=app.js.map