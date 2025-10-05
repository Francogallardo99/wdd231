function handleVisitMessage() {
    const LAST_VISIT_KEY = 'lastVisitTimestamp';

    const messageElement = document.getElementById('visit-message'); 

    const currentTime = Date.now();
    const lastVisitString = localStorage.getItem(LAST_VISIT_KEY);
    
    let messageToShow = '';
    const MS_PER_DAY = 1000 * 60 * 60 * 24;

    if (!lastVisitString) {
        messageToShow = "Welcome! If you have any questions, let us know.";
    } else {
        const lastVisitTimestamp = parseInt(lastVisitString, 10);
        const differenceMs = currentTime - lastVisitTimestamp;
        const daysElapsed = Math.floor(differenceMs / MS_PER_DAY);

        if (daysElapsed < 1) {
            messageToShow = "Come back soon! Great!";
        } else {
            const timeUnit = daysElapsed === 1 ? 'day' : 'days';
            messageToShow = `Your last visit was ${daysElapsed} ${timeUnit} ago.`;
        }
    }

    if (messageElement) {
        messageElement.textContent = messageToShow;
    }

    localStorage.setItem(LAST_VISIT_KEY, currentTime.toString());
}

export { handleVisitMessage };