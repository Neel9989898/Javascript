function removeHTMLTags(input) {
    return input.replace(/<[^>]+>/g, '');
}

const inputString = '<p><strong><em>Javascript Exercises</em></strong></p>';
const outputString = removeHTMLTags(inputString);
console.log(outputString);
