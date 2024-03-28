let num = 5;
let result = '';

// for (let i = 0; i < num; i++) {
//     if (i === 0 || i === num - 1) {
//         result += ' * '.repeat(num) + '\n';
//     } else {
//         result += ' * '.repeat(1) + ' '.repeat((2*(num-2))+(num-1)) + '* ' + '\n';
//     }
// }

// console.log(result);
const size = 6; // Define the size of the cross

for (let i = 0; i < size; i++) {
    let row = '';
    for (let j = 0; j < size; j++) {
        if (i === j || i + j === size - 1) {
            row += 'x';
        } else {
            row += ' ';
        }
    }
    console.log(row);
}
