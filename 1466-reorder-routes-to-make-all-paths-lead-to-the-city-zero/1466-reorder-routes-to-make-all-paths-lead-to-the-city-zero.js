/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
       const graph = Array.from({ length: n }, () => []);

    for (const [from, to] of connections) {
        graph[from].push([to, 1]);
        graph[to].push([from, 0]);
    }

    let changes = 0;
    const visited = new Array(n).fill(false);

    function dfs(city) {
        visited[city] = true;

        for (const [next, needsChange] of graph[city]) {
            if (!visited[next]) {
                changes += needsChange;
                dfs(next);
            }
        }
    }

    dfs(0);
    return changes; 
};