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
        ctx.fillStyle = this.color;
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
    color: string;

    constructor(position: Coordinate, velocity: Coordinate, radius: number, mass: number, color: string) {
        this.position = position;
        this.velocity = velocity;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }

    updatePosition(position: Coordinate, velocity: Coordinate) {
        position.x += velocity.x;
        position.y += velocity.y;
    }

    drawToScreen(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
        ctx.fill();
        ctx.stroke(); 
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
if ((ctx == null) || (ctx == undefined)) { throw new Error("No 2D rendering context found."); }

// const Viewport = new Screen(500, 500, false, canvas)


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