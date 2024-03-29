//write a program to shuffle an array

let array= [0,1,2,3,4,5,6,7,8,9]

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements at i and j
    }
    return array;

}

console.log(shuffle(array));