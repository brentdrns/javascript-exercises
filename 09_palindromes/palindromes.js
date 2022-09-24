const palindromes = function (str) {
    let myPalindrome = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            myPalindrome.push(str[i]);
        }
    }
    y = 0;
    x = 0;
    for (let n = 0; n < myPalindrome.length; n++) {
        if (myPalindrome[n].toLowerCase() === myPalindrome[myPalindrome.length - 1 - n].toLowerCase()) {
            x = 1;
        }
        else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
