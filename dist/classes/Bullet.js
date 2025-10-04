class Bullet {
    position;
    velocity;
    radius;
    mass;
    color;
    constructor(position, velocity, radius, mass, color) {
        this.position = position;
        this.velocity = velocity;
        this.radius = radius;
        this.mass = mass;
        this.color = color;
    }
    updatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    drawToScreen(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
}
export default Bullet;
//# sourceMappingURL=Bullet.js.map