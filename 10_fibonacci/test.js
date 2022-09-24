const fibonacci = function(a) {
    new_num = 1;
    num_one = 0;
    num_two = 1;
    for (i = 0; i < a; i++) {
        if (i == 0) {
        }
        else {
        new_num = num_one + num_two;
        num_one = num_two;
        num_two = new_num;
        }
        if (i == a - 1) {
            return new_num;
        }
    }
};

console.log(fibonacci(4))