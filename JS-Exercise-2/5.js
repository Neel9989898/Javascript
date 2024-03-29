
function union(arr1, arr2) {
    const set = new Set([...arr1, ...arr2]);
    return Array.from(set);
}

function difference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return Array.from(arr1.filter(item => !set2.has(item)));
}

function intersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return Array.from(arr1.filter(item => set2.has(item)));
}

const array1 = [0,1,2,3];
const array2 = [3,4,5];

const unionResult = union(array1, array2);
console.log("Union:", unionResult);

const differenceResult = difference(array1, array2);
console.log("Difference:", differenceResult);

const intersectionResult = intersection(array1, array2);
console.log("Intersection:", intersectionResult);
