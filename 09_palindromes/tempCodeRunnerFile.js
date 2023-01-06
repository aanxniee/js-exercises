const palindromes = function (str) {
    let newStr = str.replace(/\s/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();

    let start = 0;
    let end = newStr.length - 1;
    while (newStr[start++] != newStr[end--]) {
        return false;
    }
    return true;
};

console.log('ZZZZ car, a man, a maracaz.'.replace(/\s/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase());
console.log(palindromes('ZZZZ car, a man, a maracaz.'));
// Do not edit below this line
module.exports = palindromes;
