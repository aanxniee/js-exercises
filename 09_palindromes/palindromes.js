const palindromes = function (str) {
    let newStr = str.replace(/\s/g, "").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();

    let start = 0;
    let end = newStr.length - 1;
    while (start < end) {
        if (newStr[start++] != newStr[end--]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
