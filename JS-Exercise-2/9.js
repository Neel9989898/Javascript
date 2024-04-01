function convertUnixTimestampToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZoneName: 'short'
    };
    return date.toLocaleString('en-US', options);
}

const unixTimestamp = 1607518718;
const timeString = convertUnixTimestampToTime(unixTimestamp);
console.log(timeString);
