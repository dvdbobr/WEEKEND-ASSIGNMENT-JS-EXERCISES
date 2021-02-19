function tribonacci(iterations) {
    let a = 0, b = 1, c = 1,temp;
    for (let i = 0; i < iterations; i++) {
        
        c = a + b + c;
        a = b
        b = temp;
    }
    return console.log(a);//0,1,1,2,4,7
}
tribonacci(5)