function findMaxNum(arrOfNum) {
    if (!arrOfNum || arrOfNum.length === 0)
        throw new Error("give some numbers");

    let bigNum = arrOfNum[0];
    for (let i = 1; i < arrOfNum.length; i++) {
        if (bigNum < arrOfNum[i]) {
            bigNum = arrOfNum[i];
        }
    }

    return bigNum;
}
console.log(findMaxNum([50, 10, 25, 8, 42, 17, 43]));
console.log(findMaxNum([345, 12, 789, 456, 999, 234, 678, 1000, 567]));
console.log(findMaxNum([50, -20, 180, 75, -5, 200, 150]));
// console.log(findMaxNum([])); // throw error
// console.log(findMaxNum(null)); // throw error
// console.log(findMaxNum(undefined)); // throw error

function findMaxNum2(arrOfNum) {
    return (bigNum = Math.max(...arrOfNum));
}

console.log(findMaxNum2([400, 50, -20, 180, 75, -5, 200, 150, 300]));
