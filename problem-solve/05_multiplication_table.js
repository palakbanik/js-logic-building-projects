function multiplicationTbl(tableOf, tableTill) {
    if (typeof tableOf !== "number" || typeof tableTill !== "number")
        throw new Error("Please provide valid numbers");

    for (let i = 1; i <= tableTill; i++) {
        console.log(`${tableOf} * ${i} = ${tableOf * i}`);
    }
}

// multiplicationTbl("4", "10"); // throw an error
// multiplicationTbl(5, 10);

function multiplicationTbl2(tableOf, tableTill) {
    if (typeof tableOf !== "number" || typeof tableTill !== "number")
        throw new Error("Please provide valid numbers");

    for (let i = tableOf; i <= tableTill * tableTill; i = i + tableOf) {
        console.log(i);
    }
}
// multiplicationTbl2("4", "10"); // throw an error
multiplicationTbl2(5, 10);
