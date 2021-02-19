function Abbreviate(str) {
    let strArr = str.split(' ');
    let output = strArr[0][0].toUpperCase()+"."+strArr[1][0].toUpperCase();
    console.log(output)
}
let s = 'Sam Garris';
Abbreviate(s);