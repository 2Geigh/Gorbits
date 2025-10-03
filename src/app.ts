// import Color, { type ColorInstance } from "color";

type Coordinate = Record<("x" | "y"), number>;

class Planet {
    position: Coordinate;

    radius: number;
    mass: number;

    color: string;

    constructor(position:Coordinate, radius:number, mass:number, color: string) {
        this.position = position;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }

    drawToScreen(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        ctx.fill();
        ctx.stroke(); 
    }
}

class Bullet {
    position: Coordinate;
    velocity: Coordinate;
    radius: number;
    mass: number;

    constructor(position: Coordinate, velocity: Coordinate, radius: number, mass: number,) {
        this.position = position;
        this.velocity = velocity;
        this.radius = radius;
        this.mass = mass;
    }

    updatePosition(position: Coordinate, velocity: Coordinate) {
        position.x += velocity.x;
        position.y += velocity.y;
    }
}

// class Screen {
//     width_pixels: number;
//     height_pixels: number;
//     isDarkMode: boolean;
//     canvas: HTMLCanvasElement;

//     constructor(width_pixels: number, height_pixels: number, isDarkMode: boolean, canvas: HTMLCanvasElement) {
//         this.width_pixels = width_pixels;
//         this.height_pixels = height_pixels;
//         this.isDarkMode = isDarkMode;
//         this.canvas = canvas;
//     }
// }

const canvas = document.querySelector("canvas");
if (canvas == null) { throw new Error("No canvas element found"); }
const ctx = canvas?.getContext("2d");


// const Viewport = new Screen(500, 500, false, canvas)


const Mars = new Planet(
                            {"x": 100, "y": 600},
                            50,
                            50,
                            "red"
                        );

if ((ctx == null) || (ctx == undefined)) {
    throw new Error("No 2D rendering context found.");
}


Mars.drawToScreen(ctx);