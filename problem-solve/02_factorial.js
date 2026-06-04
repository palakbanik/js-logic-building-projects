// practice -> 1

function factorial(num) {
    if (typeof num === "string") throw new Error("enter number not character");
    if (num < 0) throw new Error("enter positive number");

    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1 => this is called factorial
// console.log(factorial(-5)); // throw err
console.log(factorial(10));
// console.log(factorial(-3)); // throw err
// console.log(factorial("hello")); // throw err
