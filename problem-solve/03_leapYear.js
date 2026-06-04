function isLeapYear(year) {
    if (typeof year === "string" || year === 0)
        throw new Error("enter positive number number");

    if (year % 4 === 0) return true;
    return false;
}

console.log(isLeapYear(1));
