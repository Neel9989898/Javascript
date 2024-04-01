function getDateDifference(dateString1, dateString2) {
    const date1 = new Date(dateString1);
    const date2 = new Date(dateString2);

    let yearDiff = date2.getFullYear() - date1.getFullYear();
    let monthDiff = date2.getMonth() - date1.getMonth();
    let dayDiff = date2.getDate() - date1.getDate();


    if (dayDiff < 0) {
        monthDiff--;
        dayDiff += new Date(date2.getFullYear(), date2.getMonth(), 0).getDate();
    }

    if (monthDiff < 0) {
        yearDiff--;
        monthDiff += 12;
    }

    let result = '';
    if (yearDiff > 0) {
        result += `${yearDiff} year${yearDiff > 1 ? 's' : ''} `;
    }
    if (monthDiff > 0) {
        result += `${monthDiff} month${monthDiff > 1 ? 's' : ''} `;
    }
    if (dayDiff > 0) {
        result += `${dayDiff} day${dayDiff > 1 ? 's' : ''} `;
    }

    return result.trim(); 
}

const inputDate1 = '01/07/2018';
const inputDate2 = '03/05/2020';
const difference = getDateDifference(inputDate1, inputDate2);
console.log(difference);
