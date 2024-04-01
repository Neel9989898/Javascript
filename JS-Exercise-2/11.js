function insertString(originalString, insertString, position = 1) {
    if (position < 1 || position > originalString.length + 1) {
        console.error("Invalid position");
        return originalString;
    }
    
    const firstPart = originalString.slice(0, position - 1);
    const secondPart = originalString.slice(position - 1);
    
    return firstPart + insertString + secondPart;
}

// Example usage:
const staticString = "This is a sample string";
const inputString = "Insert Me";
const inputPosition = 3;
const output = insertString(staticString, inputString, inputPosition);
console.log(output);
