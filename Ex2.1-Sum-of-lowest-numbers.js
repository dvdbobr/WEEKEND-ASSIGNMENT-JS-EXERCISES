function findLowest(arr) {
    min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }
    return min;
}
function sum2lowest(arr) {
    let sumArr = [];
    min = findLowest(arr);
    sumArr.push(min);
    arr.splice(arr.indexOf(min, 1));
    findLowest(arr);
    sumArr.push(min);
    console.log("sum of lowest numbers:",sumArr.reduce((a, b) => a + b));
}
let arr = [19, 5, 42, 2, 77];
sum2lowest(arr)