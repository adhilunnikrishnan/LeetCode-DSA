/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let currStr = "";
    let num = 0;

    for (let ch of s) {
        if (!isNaN(ch)) {
            num = num * 10 + Number(ch);
        } else if (ch === "[") {
            stack.push([currStr, num]);
            currStr = "";
            num = 0;
        } else if (ch === "]") {
            const [prevStr, repeat] = stack.pop();
            currStr = prevStr + currStr.repeat(repeat);
        } else {
            currStr += ch;
        }
    }

    return currStr; 
};