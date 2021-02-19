function findNextSquare(num) {
    if (Math.sqrt(num) % 1 == 0)
        return console.log("the next perfect square is:",Math.pow(Math.sqrt(num) + 1,2));
    else
        return console.log(-1)
}
findNextSquare(625)