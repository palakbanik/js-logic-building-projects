function countOfChar(inpStr) {
    console.log(inpStr);

    let output = {};

    for (let i = 0; i < inpStr.length; i++) {
        const char = inpStr[i];

        if (inpStr[i] === " ") continue;
        if (output[char]) {
            output[char]++;
        } else {
            output[char] = 1;
        }
    }

    return output;
}

console.log(countOfChar("Palak Banik"));
