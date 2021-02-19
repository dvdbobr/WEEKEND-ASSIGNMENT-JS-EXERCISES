function binary(arr) {
    exponent = 0;
    sum=0;
    for (let i = arr.length-1; i >= 0; i--) {
        sum+=Math.pow(arr[i]*2,exponent);
        exponent++;
    }
    console.log(`${arr}->${sum}`)
}
binary([1,1,1,1])