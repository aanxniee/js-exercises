const sumAll = function(beginning, end) {
    var sum = 0;
    if (!Number.isFinite(beginning) || !Number.isFinite(end)) {
        return "ERROR";
    }
    
    if (beginning < 0 || end < 0) {
        return "ERROR";
    }

    if (beginning < end) {
        for (i = beginning; i <= end; i++) {
            sum = sum + i;
        }
    }
    else {
        for (i = end; i <= beginning; i++) {
            sum = sum + i;
        }
    }

    return sum;
};
console.log(sumAll('0', 1));
// Do not edit below this line
module.exports = sumAll;
