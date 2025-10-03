import Color from "color";

const canvas = document.querySelector("canvas")?.getContext("2d");
const h1 = document.querySelector("h1")

console.log(h1?.innerHTML);
// console.log("Hello world");

class Planet {

    position: Record<("x" | "y"), number>;

    radius: number;
    mass: number;

    color: typeof Color;

    constructor(position:Record<("x" | "y"), number>, radius:number, mass:number, color:(typeof Color)) {
        this.position = position;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }
}