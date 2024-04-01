function fn(dateString) {
    const dateParts = dateString.split(/[\s/,-]+/);
    const monthIndex = parseInt(dateParts[1]) - 1; 
    const date = new Date(dateParts[2], monthIndex, dateParts[0]); 
    const options = { month: 'long' };
    return new Intl.DateTimeFormat('en-US', options).format(date); 
}

const inputDate = '01-07-2020';
const month = fn(inputDate);
console.log(month);
