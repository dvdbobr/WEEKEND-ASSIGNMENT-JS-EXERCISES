function forFilter(arr, func) {
    let filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]))
            filterArr.push(arr[i])
    }
    return filterArr;
}
const arr = [1, 3, 4]
let ff = forFilter(arr, num => num % 2 == 0)
console.log(ff)
function forMap(arr, func) {
    let filterArr = [];
    for (let i = 0; i < arr.length; i++) {
        filterArr.push(func(arr[i]));
    }
    return filterArr;
}
let doubledArr = forMap(arr, num => num * 2)
console.log(doubledArr)
function myForEach(arr, func) {
    for (let i = 0; i < arr.length; i += 1) {
        func(arr[i]);
    }
}
const arr2 = [1, 'david', 3,"bob", 4]
myForEach(arr2, el => console.log(el))