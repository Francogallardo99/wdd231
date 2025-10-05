const dataURL = 'data/discover.json'; 
const discoverContainer = document.getElementById('discover'); 

export async function getArticleData() {
    try {
        const response = await fetch(dataURL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        displayDiscover(data.chamber_of_commerce_articles);
        
    } catch (error) {
        console.error("Error fetching or processing data:", error);
        if (discoverContainer) {
            discoverContainer.innerHTML = '<p class="error-message">Could not load articles. Please check the JSON path.</p>';
        }
    }
}

function displayDiscover(articles) {
    if (!discoverContainer) return; 

    articles.forEach((article) => {
        const articleSection = document.createElement('section');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        const location = document.createElement('p');
        const image = document.createElement('img');
        
        title.textContent = article.title;
        description.innerHTML = `<strong>Description:</strong> <br>${article.description}`;
        location.innerHTML = `<strong>Location:</strong><br> ${article.location}`;
        
        image.setAttribute('src', article.image_url);
        image.setAttribute('alt', `Image for ${article.title}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');

        articleSection.append(image, title, description, location);
        articleSection.classList.add('article-card');

        discoverContainer.appendChild(articleSection);
    });
}
getArticleData();