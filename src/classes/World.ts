import type Planet from "./Planet.js";
import type Bullet from "./Bullet.js";

class Playfield {
    game_objects: Array<(Planet | Bullet)>;

    constructor (game_objects: Array<(Planet | Bullet)>) {
        this.game_objects = game_objects;
    }
}

export default Playfield;