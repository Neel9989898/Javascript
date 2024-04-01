const text = "Send your email to user@example.com or neel.patel@rapidops.co";
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
const emails = text.match(emailPattern);
console.log(emails);
