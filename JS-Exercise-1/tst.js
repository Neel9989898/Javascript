let num = 5;
let result = '';

for (let i = 0; i < num; i++) {
    if (i === 0 || i === num - 1) {
        result += ' * '.repeat(num) + '\n';
    } else {
        result += ' * '.repeat(1) + ' '.repeat((2*(num-2))+(num-1)) + '* ' + '\n';
    }
}

console.log(result);