import type Planet from "./Planet.js";
import type Bullet from "./Bullet.js";
declare class Playfield {
    game_objects: Array<(Planet | Bullet)>;
    constructor(game_objects: Array<(Planet | Bullet)>);
}
export default Playfield;
//# sourceMappingURL=World.d.ts.map