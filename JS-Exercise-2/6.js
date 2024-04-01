function fn(start, end, step) {
    const array = [];
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
        array.push(String.fromCharCode(i));
    }
    return array;
}
const result = fn('a', 'z', 2);
console.log(result);
