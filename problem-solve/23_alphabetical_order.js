function isAlphabeticOrder(str) {
    str = str.toLowerCase().replace(/ /g, "");

    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] > str[i + 1]) {
            return false;
        }
    }

    return true;
}

console.log("abcd", isAlphabeticOrder("abcd"));
console.log("abac", isAlphabeticOrder("abac"));
console.log("acimn", isAlphabeticOrder("acimn"));
console.log("aAcim n", isAlphabeticOrder("aAcim n"));
console.log("acimlm", isAlphabeticOrder("acimlm"));
