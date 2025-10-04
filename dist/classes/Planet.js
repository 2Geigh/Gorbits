class Planet {
    position;
    radius;
    mass;
    color;
    constructor(position, radius, mass, color) {
        this.position = position;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }
    drawToScreen(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}
export default Planet;
//# sourceMappingURL=Planet.js.map