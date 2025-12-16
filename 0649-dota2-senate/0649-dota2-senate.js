/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const radiant = [];
    const dire = [];
    const n = senate.length;

    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') radiant.push(i);
        else dire.push(i);
    }

    while (radiant.length && dire.length) {
        const r = radiant.shift();
        const d = dire.shift();

        if (r < d) {
            radiant.push(r + n); 
        } else {
            dire.push(d + n);
        }
    }

    return radiant.length ? "Radiant" : "Dire";
};