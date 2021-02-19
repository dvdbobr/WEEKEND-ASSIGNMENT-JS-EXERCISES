function repeat_str(num, str) {
    let repeatedStr = '';
    for (let i = 0; i < num; i++) {
        repeatedStr += str;
    }
    console.log(repeatedStr);
}
repeat_str(6,"^")