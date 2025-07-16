const removeFromArray = function(arr) {
    let remove = [];
    for (let i = 1; i < arguments.length; i++) {
        remove.push(arguments[i]);
    }
    // console.log(arguments);
    return arr.filter(curr => !remove.includes(curr));
};
removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;
