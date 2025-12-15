/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
        const stack = [];

    for (let a of asteroids) {
        let destroyed = false;

        while (
            stack.length &&
            a < 0 &&
            stack[stack.length - 1] > 0
        ) {
            const top = stack[stack.length - 1];

            if (Math.abs(top) < Math.abs(a)) {
                stack.pop();
                continue;
            } else if (Math.abs(top) === Math.abs(a)) {
                stack.pop();
            }
            destroyed = true;
            break;
        }

        if (!destroyed) stack.push(a);
    }

    return stack;
};