function accum(str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        newStr.push(str[i].toUpperCase());
        for (let j = 0; j < i; j++) {
            newStr[i]+=str[i].toLowerCase();
        }
    }
    console.log(newStr.join("-"))
}
accum("abcd") // "A-Bb-Ccc-Dddd"
accum("RqaEzty")// "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") // "C-Ww-Aaa-Tttt"