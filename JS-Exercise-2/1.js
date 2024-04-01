//Write a javascript function to get the first and last element of an array.
//Passing a parameter 'n' will return the fist 'n' elements of the last 'n' elements of the array.

const array = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];

function getFirstAndLast(array, n) {
    let result = [];

    if (n && n > 0 && n <= array.length) {
        console.log(`First 3 element : ${array.slice(0,n)}`);
        console.log(`Last 3 element: ${array.slice(-n)}`);
    } else {
        console.log(`${array[0], array[array.length - 1]}`);
    }
}
console.log(getFirstAndLast(array, 3))



