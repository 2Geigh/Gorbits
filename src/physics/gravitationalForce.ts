import type Planet from "../classes/Planet.js"
import type Bullet from "../classes/Bullet.js"

import { GRAVITATIONAL_CONSTANT } from "./constants.js"

import distanceBetweenCenters from "./distanceBetweenCenters.js";

const gravitationalForce = (object1: (Planet|Bullet), object2: (Planet|Bullet)) => {
    let gravitational_force = {scalar: 0, x: 0, y:0}

    let angle = Math.atan(distanceBetweenCenters(object1, object2).distance_y/distanceBetweenCenters(object1, object2).distance_x)

    let r_scalar = (distanceBetweenCenters(object1, object2).distance)
    let r_x = (distanceBetweenCenters(object1, object2).distance_x)
    let r_y = (distanceBetweenCenters(object1, object2).distance_y)

    gravitational_force.scalar = object1.mass * object2.mass / (r_scalar);
    gravitational_force.x = gravitational_force.scalar * Math.cos(angle);
    gravitational_force.y = gravitational_force.scalar * Math.sin(angle);


    if (object1.position.x < object2.position.x) {
        gravitational_force.x = Math.abs(gravitational_force.x) * (1);
    }
    else {
        gravitational_force.x = Math.abs(gravitational_force.x) * (-1);
    }

    if (object1.position.y < object2.position.y) {
        gravitational_force.y = Math.abs(gravitational_force.y) * (1);
    }
    else {
        gravitational_force.y = Math.abs(gravitational_force.y) * (-1);
    }

    return gravitational_force;
};

export default gravitationalForce;