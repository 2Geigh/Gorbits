// import Color, { type ColorInstance } from "color";

class Planet {
    position: Record<("x" | "y"), number>;

    radius: number;
    mass: number;

    // color: ColorInstance;

    constructor(position:Record<("x" | "y"), number>, radius:number, mass:number/*, color:ColorInstance*/) {
        this.position = position;
        this.radius = radius;
        this.mass = mass;
        // this.color = color;
    }
}

const canvas = document.querySelector("canvas");
const ctx = canvas?.getContext("2d");

const Mars = new Planet(
                            {"x": 50, "y": 50},
                            50,
                            50,
                            // Color.rgb([0,0,0])
                        )

if ((ctx != null) || (ctx != undefined)) {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(Mars.position.x, Mars.position.y, Mars.radius, 0, 2 * Math.PI)
    ctx.fill();
    ctx.stroke(); 
}