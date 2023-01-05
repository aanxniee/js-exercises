const removeFromArray = function(...args) {
    const arr = args[0];
    const newArr = [];
    arr.forEach((ele) => {
        if (!args.includes(ele)) {
            newArr.push(ele);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
