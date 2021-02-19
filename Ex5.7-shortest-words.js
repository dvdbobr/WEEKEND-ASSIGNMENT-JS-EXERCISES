function shortestWord(str) {
    let strArr = str.split(' ');
    let shortest = strArr.reduce((a, b) => a.length < b.length ? a : b);
    console.log(shortest)
}
let s = "hey there hows it going";
shortestWord(s);