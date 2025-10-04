// import Color, { type ColorInstance } from "color";
import Planet from "./classes/Planet.js";
import Bullet from "./classes/Bullet.js";
import Screen from "./classes/Screen.js";

const canvas = document.querySelector("canvas");
if (canvas == null) { throw new Error("No canvas element found"); }

const ctx = canvas?.getContext("2d");
if ((ctx == null) || (ctx == undefined)) { throw new Error("No 2D rendering context found."); }



// GAME SETUP
let inGameplayLoop = true;
const Viewport = new Screen(1920, //px width
                            1080, //px height
                            100, // frames per second
                            canvas,
                            ctx,
                            inGameplayLoop);
const Mars = new Planet(
                            {"x": 960, "y": 540},
                            50,
                            50,
                            "red"
                        );

const Cassiopeia = new Bullet(
                                {"x": 0, "y": 540},
                                {"x": 75*25, "y": 5*400},
                                10,
                                20,
                                "blue",
                                Viewport.frames_per_second
                            );

let game_objects = [Mars, Cassiopeia]
Viewport.RefreshCanvasDrawing(game_objects);



// GAMEPLAY LOOP
// while (Viewport.inGameplayLoop) {
    // Cassiopeia.updatePosition();
    // Viewport.RefreshCanvasDrawing();
// }

let frame_number = 0;
let milliseconds = 0;

const isWithinBounds = (bullet: Bullet, viewport: Screen) => {

    let isWithinBounds = {x: true, y: true};

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
    
}

const distanceBetweenCenters = (object1: (Bullet | Planet), object2: (Bullet | Planet)) => {
    let difference_x = Math.abs(object1.position.x - object2.position.x)
    let difference_y = Math.abs(object1.position.y - object2.position.y)
    let distance = Math.sqrt((difference_x ** 2) + (difference_y ** 2));

    return distance;
}

const GameplayLoop = setInterval(() => {

                                        // console.clear();
                                        if (!Viewport.inGameplayLoop) {
                                            clearInterval(GameplayLoop);
                                            // console.log(`We've exited the gameplay loop`);
                                        }

                                        frame_number += 1;
                                        milliseconds += Viewport.milliseconds_per_frame
                                        console.clear();
                                        console.log(`Time: ${milliseconds / 1000} seconds\nFrame: ${frame_number}\nDistance between bullet and planet: ${distanceBetweenCenters(Cassiopeia, Mars)}px`);




                                        Cassiopeia.updatePosition();
                                        if (!isWithinBounds(Cassiopeia, Viewport).x) {
                                            Cassiopeia.velocity_pixels_per_frame.x *= -1;
                                        }
                                        if (!isWithinBounds(Cassiopeia, Viewport).y) {
                                            Cassiopeia.velocity_pixels_per_frame.y *= -1;
                                        }
                                        Viewport.RefreshCanvasDrawing(game_objects);
                                        // console.log(/*`We're in the gameplay loop\nViewport.inGameplayLoop: ${Viewport.inGameplayLoop}\n*/`Frame: ${frame_number}`);
                                        

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

