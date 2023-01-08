const caesar = function(str, key) {

    if (key < 0) {
        return caesar(str, key + 26)
    }
    var converted = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase() && str[i] != str[i].toUpperCase()) {
            converted += String.fromCharCode((((str.charCodeAt(i) - 97 + key) % 26) + 97));
        }
        else if (str[i] == str[i].toUpperCase() && str[i] != str[i].toLowerCase()) {
            converted += String.fromCharCode((((str.charCodeAt(i) - 65 + key) % 26) + 65));
        }
        else {
            converted += str[i];
        }
    }

    return converted;
};

// Do not edit below this line
module.exports = caesar;
