function toCamelCase(str) {
    let strArr = '';
    if (str.indexOf("-") != -1) {
        strArr = str.split("-");
        if (strArr[0][0] == strArr[0][0].toLowerCase()) {
            for (let i = 1; i < strArr.length; i++) {
                strArr[i] = strArr[i].charAt(0).toUpperCase()+strArr[i].slice(1);
            }
            console.log(strArr.join(''));
        }
    }
    else if (str.indexOf("_")) {
        strArr = str.split("_");
        if (strArr[0][0] == strArr[0][0].toUpperCase()) {
            for (let i = 0; i < strArr.length; i++) {
                strArr[i] = strArr[i].charAt(0).toUpperCase()+strArr[i].slice(1);
            }
            console.log(strArr.join(''));
        }
    }
}
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"