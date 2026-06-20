function fizzBuzz(num) {
    let arr = [];

    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizz buzz");
        } else if (i % 3 === 0) {
            console.log((num[i] = "fizz"));
        } else if (i % 5 === 0) {
            console.log((num[i] = "buzz"));
        } else {
            console.log(i);
        }
    }

}

console.log(fizzBuzz(15));
