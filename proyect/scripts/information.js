export function processURLParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); 
    const resultsContainer = document.querySelector("#results");
    
    const userName = urlParams.get("name"); 
    
    if (!resultsContainer) {
        console.error("ID 'results' not found in the document.");
        return; 
    }

    if (userName) {
        resultsContainer.innerHTML = `
            <h2>Your Shared Story Details:</h2>
            <p><strong>Your Name:</strong> ${userName}</p>
            <p><strong>Spouse's Name:</strong> ${urlParams.get("spouse") || 'N/A'}</p>
            <p><strong>Place of the Story:</strong> ${urlParams.get("place_story") || 'Not Specified'}</p>
            <p><strong>Contact Email:</strong> ${urlParams.get("email") || 'N/A'}</p>
            <p><strong>Date:</strong> ${urlParams.get("date") || 'N/A'}</p>
            <p><strong>Your Story:</strong> <br> ${urlParams.get("your story") || 'Not Provided'}</p> 
            `;
    } else {
        resultsContainer.innerHTML = '<p>No story data found in the URL. Please ensure you submitted the form correctly.</p>';
        console.warn("No 'name' parameter found in the URL. Check data source.");
    }
}