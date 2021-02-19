function basicOp(operator, num1, num2) {
    switch (operator) {
        case '+':
            return console.log(num1 + num2);
        case '-':
            return console.log(num1 - num2);
        case '*':
            return console.log(num1 * num2);
        case '/':
            return console.log(num1 / num2);
    }
}
basicOp('*', 2, 3)