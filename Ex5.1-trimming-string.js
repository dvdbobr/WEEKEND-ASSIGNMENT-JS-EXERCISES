function trim(str) {
    let strArr = str.split('');
    strArr.shift();
    strArr.pop();
    return console.log(strArr.join(''))
}
let str = "abcde"
trim(str)