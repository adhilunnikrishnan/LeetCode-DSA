/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
     const m = maze.length;
    const n = maze[0].length;
    const [sr, sc] = entrance;

    const queue = [[sr, sc, 0]];
    maze[sr][sc] = '+';

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length) {
        const [r, c, steps] = queue.shift();

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                maze[nr][nc] === '.'
            ) {
                if (nr === 0 || nc === 0 || nr === m - 1 || nc === n - 1) {
                    return steps + 1;
                }

                maze[nr][nc] = '+';
                queue.push([nr, nc, steps + 1]);
            }
        }
    }

    return -1;
};