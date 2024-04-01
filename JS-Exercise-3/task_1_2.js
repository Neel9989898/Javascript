function hideEmailAddress(email) {
    const idx = email.indexOf('@');
    if (idx <= 3) {
        return email.slice(0, idx) + '*'.repeat(idx) + email.slice(idx);
    } else {
        return email.slice(0, 3) + '*'.repeat(idx - 4) + email.slice(idx-1);
        
    }
    
}

const email = 'neel.patel@rapidops.co';
const hiddenEmail = hideEmailAddress(email);
console.log(hiddenEmail);
