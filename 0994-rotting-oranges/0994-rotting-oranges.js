/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
      const rows = grid.length;
    const cols = grid[0].length;

    let queue = [];
    let fresh = 0;
    let minutes = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) queue.push([r, c]);
            if (grid[r][c] === 1) fresh++;
        }
    }

    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length && fresh > 0) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;
                    fresh--;
                    queue.push([nr, nc]);
                }
            }
        }
        minutes++;
    }

    return fresh === 0 ? minutes : -1;
};