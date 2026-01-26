/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let res = [];
    let l = 0, r = products.length - 1;

    for (let i = 0; i < searchWord.length; i++) {
        let ch = searchWord[i];

        while (l <= r && (products[l][i] !== ch)) l++;
        while (l <= r && (products[r][i] !== ch)) r--;

        let suggestions = [];
        for (let j = l; j <= r && suggestions.length < 3; j++) {
            suggestions.push(products[j]);
        }
        res.push(suggestions);
    }

    return res;
};