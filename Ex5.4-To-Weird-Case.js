function toWeirdCase(str) {
    var output = "";
    for(let i = 0; i < str.length; i++){
        if (i % 2 != 0) {
            output += str[i].toUpperCase();
        }
        else {
            output += str[i].toLowerCase();
         }   
    }
    return console.log(output);
    // let strArr = str.split('');
    // let output = '';
    // strArr.map(letter => {
    //     output += strArr.indexOf(letter) % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase();
    // })
    // console.log(output)
}
toWeirdCase("abab abab")