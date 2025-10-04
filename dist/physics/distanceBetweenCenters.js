// Newton's law of universal gravitation is descrbined in the equation F = G*m1*m2/(r**2)
// This function is for computing r in PIXELS
const distanceBetweenCenters = (object1, object2) => {
    let to_return = { distance: 0, distance_x: 0, distance_y: 0 };
    // object1.position.x - object2.position.x
    to_return.distance_x = Math.abs(object1.position.x - object2.position.x);
    to_return.distance_y = Math.abs(object1.position.y - object2.position.y);
    to_return.distance = Math.sqrt((to_return.distance_x ** 2) + (to_return.distance_y ** 2));
    return to_return;
};
export default distanceBetweenCenters;
//# sourceMappingURL=distanceBetweenCenters.js.map