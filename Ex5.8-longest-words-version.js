function longestWord(str) {
    let strArr = str.split(' ');
    let longest = strArr.reduce((a, b) => a.length > b.length ? a : b);
    console.log(longest)
}
let s = "hey there hows it going";
longestWord(s);