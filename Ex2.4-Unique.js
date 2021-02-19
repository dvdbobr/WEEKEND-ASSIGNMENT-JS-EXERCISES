function findUnique(arr) {
    let notUnique = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != notUnique)
            console.log(arr[i])
    }
}
findUnique([1,1,1,0.3,1,1,1,1])