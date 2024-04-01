function getTimeDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const timeDifference = Math.abs(end - start);

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44));//avergare number of days in a month
    const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(timeDifference / (1000 * 60));

    // Construct the output string
    let output = '';
    if (years > 0) {
        output += years + (years === 1 ? ' year ' : ' years ');
    }
    if (months > 0) {
        output += months + (months === 1 ? ' month ' : ' months ');
    }
    if (weeks > 0) {
        output += weeks + (weeks === 1 ? ' week ' : ' weeks ');
    }
    if (days > 0) {
        output += days + (days === 1 ? ' day ' : ' days ');
    }
    if (hours > 0) {
        output += hours + (hours === 1 ? ' hour ' : ' hours ');
    }
    if (minutes > 0) {
        output += minutes + (minutes === 1 ? ' minute ' : ' minutes ');
    }

    return output.trim(); 
}

const startDate = '01-07-2018';
const endDate = '03/05/2020';
const difference = getTimeDifference(startDate, endDate);
console.log(difference);
