function bus(arr) {
    let arrivers = 0;
    let leavers = 1;
    let totalStayed = 0;
    if (arr[arr.length - 1][arrivers] == 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][arrivers] >= 0 && arr[i][leavers] >= 0) {
                totalStayed += arr[i][arrivers];
                totalStayed -= arr[i][leavers];
            }
            else
                return console.log("invalid array")
        }
        console.log(arr, "->", totalStayed)
    }
    else
        console.log("invalid array");

}
let arr = [[0, 0], [10, 0], [5, 5], [0, 5]]
bus(arr)