// import Color, { type ColorInstance } from "color";
import Planet from "./classes/Planet.js";
import Bullet from "./classes/Bullet.js";

const canvas = document.querySelector("canvas");
if (canvas == null) { throw new Error("No canvas element found"); }

const ctx = canvas?.getContext("2d");
if ((ctx == null) || (ctx == undefined)) { throw new Error("No 2D rendering context found."); }


const Mars = new Planet(
                            {"x": 100, "y": 600},
                            50,
                            50,
                            "red"
                        );

const Cassiopeia = new Bullet(
                            {"x": 300, "y": 720},
                            {"x": 0, "y": 0},
                            10,
                            20,
                            "blue"

);

Mars.drawToScreen(ctx);
Cassiopeia.drawToScreen(ctx);
