const fibonacci = function(a) {
    a = parseFloat(a);
    if (a<0) {
        return "OOPS";
    }
    let dp = [0, 1];
    for (let i = 2; i <= a; i++) {
        dp.push(dp[i-1] + dp[i-2]);
    }
    return dp[a];
};

// Do not edit below this line
module.exports = fibonacci;
