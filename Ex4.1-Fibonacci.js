function fibonacci(num) {
    let a = 1, b = 0, temp;

    for (let i = 0; i <= num; i++) {
        temp = a;
        a = a + b;
        b = temp;
    }
    return console.log(b);//0,1,1,2,3
}
fibonacci(10)