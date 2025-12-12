// Initial points
let totalPoints = 0;

// Referral example
function addReferralPoints(isReferrer=true) {
    if (isReferrer) {
        totalPoints += 5; // Referrer
        alert('Referral points added: +5');
    } else {
        totalPoints += 1.5; // New user
        alert('Referral points added: +1.5');
    }
}

// Task completion
function completeTask(taskName) {
    switch(taskName) {
        case 'wallet':
            totalPoints += 10;
            alert('Wallet task completed: +10 pts');
            break;
        case 'twitter':
            totalPoints += 15;
            alert('Twitter task completed: +15 pts');
            break;
        case 'discord':
            totalPoints += 10;
            alert('Discord task completed: +10 pts');
            break;
        case 'daily':
            totalPoints += 1;
            alert('Daily check-in: +1 pt');
            break;
        default:
            alert('Unknown task');
    }

    console.log('Total Points: ' + totalPoints);
}
