const sumAll = function(a, b) {
    if (a < 0 || b < 0 || Math.floor(a) !== a || Math.floor(b) !== b) {
        return "ERROR";
    }

    return (a + b) * (Math.abs(b - a) + 1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
