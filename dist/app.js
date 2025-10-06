// import Color, { type ColorInstance } from "color";
import Planet from "./classes/Planet.js";
import Bullet from "./classes/Bullet.js";
import Screen from "./classes/Screen.js";
import Playfield from "./classes/World.js";
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
const Viewport = new Screen(1620, //px width
1080, //px height
100, // frames per second
canvas, ctx, inGameplayLoop);
const Mars = new Planet({ "x": Viewport.width_pixels / 2, "y": 540 }, // position
(Viewport.height_pixels / 5 * 3 / 2), // radius
620, // mass
"red" // color
);
const Cassiopeia = new Bullet({ "x": 1920 - 700, "y": 540 }, // position
{ "x": 100, "y": 1000 }, // velocity
10, // radius
20, // mass
"blue", // color
Viewport.frames_per_second // framerate
);
const World = new Playfield([Mars, Cassiopeia]);
Viewport.RefreshCanvasDrawing(World.game_objects);
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
const handleCollision = (bullet, game_objects) => {
    let non_bullet_objects = [...game_objects];
    for (let i = 0; i < non_bullet_objects.length; i++) {
        if (non_bullet_objects[i] === bullet) {
            non_bullet_objects.splice(i, 1);
            break;
        }
    }
    for (let i = 0; i < non_bullet_objects.length; i++) {
        let obstacle = non_bullet_objects[i];
        if (obstacle === undefined) {
            throw new Error(`Obstacle object ${obstacle} is undefined.`);
        }
        let isColliding = false;
        if (obstacle instanceof Planet) {
            isColliding = (distanceBetweenCenters(bullet, obstacle).distance <= (bullet.radius + obstacle.radius));
        }
        // Convert bullet's velocity from Cartesian to polar coordinates
        let x_init = bullet.position.x - obstacle.position.x;
        let y_init = bullet.position.y - obstacle.position.y;
        let v_x_init = bullet.velocity_pixels_per_frame.x - 0; // obstacle's velocity is 0 because it's the basis of the reference frame;
        let v_y_init = bullet.velocity_pixels_per_frame.y - 0; // obstacle's velocity is 0 because it's the basis of the reference frame;
        let v_x_final = v_x_init;
        let v_y_final = v_y_init;
        let r_init = Math.sqrt((x_init ** 2) + (y_init ** 2));
        let r_final = r_init;
        let theta = Math.atan(y_init / x_init);
        let dr_dt_init = (1 / 2) * (((x_init ** 2) + (y_init ** 2)) ** (-1 / 2)) * (2 * x_init * v_x_init + 2 * y_init * v_y_init); // Derivative of r
        let dtheta_dt_init = (1 / (1 + ((y_init / x_init) ** 2))) * (v_y_init * (x_init ** (-1)) + (-1) * (x_init ** (-2)) * y_init * v_x_init); // Derivative of theta
        let dr_dt_final = -dr_dt_init;
        let dtheta_dt_final = dtheta_dt_init;
        if (isColliding) {
            // bullet.color = "orange"
            let r_uncorrected = r_init;
            let x_uncorrected = bullet.position.x;
            let y_uncorrected = bullet.position.y;
            if (r_init - bullet.radius < obstacle.radius) {
                // bullet.color = "yellow";
                let r_corrected = obstacle.radius + bullet.radius;
                let x_corrected = Math.sqrt((r_corrected ** 2) / (1 + ((Math.tan(theta)) ** 2)));
                let y_corrected = x_corrected * Math.tan(theta);
                x_corrected += obstacle.position.x;
                y_corrected += obstacle.position.y;
                bullet.position.x = x_corrected;
                bullet.position.y = y_corrected;
            }
            v_x_final = (dr_dt_final * Math.sqrt((x_init ** 2) + (y_init ** 2)) - (y_init / x_init) * dtheta_dt_final * (1 + ((y_init / x_init) ** 2))) / (((y_init ** 2) / x_init) + x_init);
            v_y_final = (1 / x_init) * dtheta_dt_final * (1 + ((y_init / x_init) ** 2)) + (x_init ** (-1)) * y_init * v_x_final;
            // bullet.position.y = y_final;
            bullet.velocity_pixels_per_frame.x = v_x_final;
            bullet.velocity_pixels_per_frame.y = v_y_final;
            break;
        }
        else {
            // bullet.color = "blue"
        }
    }
};
const GameplayLoop = setInterval(() => {
    if (!Viewport.inGameplayLoop) {
        clearInterval(GameplayLoop);
    }
    ;
    frame_number += 1;
    milliseconds += Viewport.milliseconds_per_frame;
    Cassiopeia.updatePosition();
    // HANDLE BORDER COLLISION
    if (!isWithinBounds(Cassiopeia, Viewport).x) {
        Cassiopeia.velocity_pixels_per_frame.x *= -1;
    }
    if (!isWithinBounds(Cassiopeia, Viewport).y) {
        Cassiopeia.velocity_pixels_per_frame.y *= -1;
    }
    // HANDLE COLLISION WITH OTHER OBJECTS
    handleCollision(Cassiopeia, World.game_objects);
    // HANDLE GRAVITY
    Cassiopeia.velocity_pixels_per_frame.x += gravitationalForce(Cassiopeia, Mars).x;
    Cassiopeia.velocity_pixels_per_frame.y += gravitationalForce(Cassiopeia, Mars).y;
    // REDRAW WORLD WITH UPDATED PARAMETERS
    Viewport.RefreshCanvasDrawing(World.game_objects);
}, Viewport.milliseconds_per_frame);
/*const Timer = setInterval(() => {
                                    if (!Viewport.inGameplayLoop) {
                                        clearInterval(Timer)
                                    }
                                    milliseconds += 1;
                                    console.clear();
}, 1);
Mars.drawToScreen(ctx);
Cassiopeia.drawToScreen(ctx);*/
//# sourceMappingURL=app.js.map