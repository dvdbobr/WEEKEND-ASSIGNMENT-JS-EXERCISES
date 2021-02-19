function isIsogram(str) {
    let objCount = {};
    str=str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        objCount[str[i]] = objCount[str[i]] ? ++objCount[str[i]] : 1
        if (objCount[str[i]]>=2)
            return console.log(false)
    }
    return console.log(true)
}
isIsogram("Dermatoglyphics");
isIsogram("aba");
isIsogram("moOse");