const array=[0,1,1,2,3,4,5,5,5,6,7,7,8,9]

let frequencyCounter = {};
// Count occurrences of each item in the array
for (let item of array) {
    frequencyCounter[item] = (frequencyCounter[item] || 0) + 1;
}
let mostFrequent;
let maxFrequency = 0;
// Find the item with the highest frequency
for (let key in frequencyCounter) {
    if (frequencyCounter[key] > maxFrequency) {
        mostFrequent = key;
        maxFrequency = frequencyCounter[key];
    }
}



console.log("Most frequent item:", mostFrequent);
