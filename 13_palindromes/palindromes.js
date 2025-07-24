const palindromes = function (string) {
    let newStr = "";
    for (let i = 0; i < string.length; i++) {
        if (string.at(i).toUpperCase() != string.at(i).toLowerCase()) {
            newStr += string.at(i).toLowerCase();
        } else if (!isNaN(parseFloat(string.at(i)))) {
            newStr += string.at(i);
        }
    }
    console.log(newStr);
    for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
        if (newStr.at(i)!=newStr.at(-(i+1))) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
