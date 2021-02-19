function longest(str1, str2) {
    let objCount = {};
    let combined = str1 + str2;
    let longestString = '';
    for (let i = 0; i < combined.length; i++) {
        objCount[combined[i].toLowerCase()] = objCount[combined[i].toLowerCase()] ? ++objCount[combined[i].toLowerCase()] : 1
    }
    for (letter in objCount) {
        longestString += letter;
    }
    console.log(longestString.split('').sort().join(''))
}
let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
longest(a, b)