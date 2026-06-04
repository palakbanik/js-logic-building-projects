function sumOfDigits(num) {
    if (typeof num === "string") throw new Error("enter number");
    if (num < 1) {
        throw new Error("enter number above of 1");
    }
    const floorNum = Math.floor(num);
    const covertStr = floorNum.toString();
    const splittedStr = covertStr.split("");
    let result = 0;
    splittedStr.forEach((num) => (result += parseInt(num)));

    return result;
}
console.log(sumOfDigits(2134));
console.log(sumOfDigits(103.339023));
// console.log(sumOfDigits(-103.339023));
// console.log(sumOfDigits("-103.339023"));
