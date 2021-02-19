function countingDuplicates(str) {
    let objCount = {};
    for (let i = 0; i < str.length; i++) {
        objCount[str[i].toLowerCase()] = objCount[str[i].toLowerCase()] ? ++objCount[str[i].toLowerCase()] : 1
    }
    for (letter in objCount) {
        objCount[letter] >= 2 ? console.log(letter, ":", objCount[letter]) : 0;
    }
}
countingDuplicates("aabBcde")