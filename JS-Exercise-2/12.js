function stringChop(inputString, length) {
    const chunks = [];
    for (let i = 0; i < inputString.length; i += length) {
        chunks.push(inputString.slice(i, i + length));
    }
    return chunks;
}
const inputString = "RapidOpsSolution";
const inputLength = 2;
const output = stringChop(inputString, inputLength);
console.log(output);
