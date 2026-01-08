/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
       const graph = {};

    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i];
        const val = values[i];

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];

        graph[a].push([b, val]);
        graph[b].push([a, 1 / val]);
    }

    const dfs = (src, dest, visited) => {
        if (!graph[src]) return -1;
        if (src === dest) return 1;

        visited.add(src);

        for (const [next, weight] of graph[src]) {
            if (!visited.has(next)) {
                const result = dfs(next, dest, visited);
                if (result !== -1) {
                    return result * weight;
                }
            }
        }
        return -1;
    };

    const result = [];
    for (const [src, dest] of queries) {
        if (!graph[src] || !graph[dest]) {
            result.push(-1.0);
        } else {
            result.push(dfs(src, dest, new Set()));
        }
    }

    return result;
};