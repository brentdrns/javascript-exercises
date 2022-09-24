const palindromes = function (str) {
    let myPalindrome = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            myPalindrome.push(str[i]);
        }
    }
    console.log(myPalindrome)
    y = 0;
    x = 0;
    for (let n = 0; n < myPalindrome.length / 2; n++) {
        if (myPalindrome[n].toLowerCase() == myPalindrome[myPalindrome.length - 1 - n].toLowerCase()) {
            x = 1;
            console.log((myPalindrome[n] + ' matches ' + myPalindrome[myPalindrome.length - 1 - n]))
        }
        else {
            return false;
            break;
        }
    }
    return true;
};

console.log(palindromes('ZZZZ car, a man, a maracaz.'))