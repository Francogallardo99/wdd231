let date = new Date();
let year = date.getFullYear();
let span = document.getElementById("currentyear");
if (span) {
    span.textContent = year;
}
let lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;

const nav = document.getElementById('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    nav.classList.add('visible');
});
close.addEventListener('click', () => {
    nav.classList.remove('visible');
});

const url = 'https://francogallardo99.github.io/wdd231/chamber/business.json';
const cards = document.querySelector('#cards');

async function getBusinessData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json(); 
    displayBusinesses(data.businesses); 
  } catch(error) {
    console.error('Error al obtener los datos:', error);
  }
}

const displayBusinesses = (businesses) => {
  businesses.forEach((business) => { 
    const card = document.createElement("section");
    const h2 = document.createElement("h2");
    const address = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const website = document.createElement("a");
    const portrait = document.createElement("img");
    const description = document.createElement("p");
    const membershipLevel = document.createElement("p");
    
    h2.textContent = business.name; 
    address.textContent = `${business.address}, ${business.city}, ${business.state}`;
    phoneNumber.textContent = `Phone: ${business.phoneNumber}`;
    website.textContent = "Website";
    website.href = business.websiteURL;
    website.target = "_blank"; 
    description.textContent = business.description;
    membershipLevel.textContent = `Membership Level: ${business.membershipLevel}`;

    portrait.setAttribute("src", business.imageIcon);
    portrait.setAttribute("alt", `Picture of ${business.name}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(description);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);
    card.appendChild(membershipLevel);

    cards.appendChild(card);
    card.classList.add('business-card');
    description.classList.add('description');
    membershipLevel.classList.add('member-level');
    website.classList.add('website-link');
  });
}

getBusinessData();

const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');
const cardsContainer = document.querySelector('#cards');


gridButton.addEventListener('click', () => {
    
    cardsContainer.classList.add('grid-view-active');
    cardsContainer.classList.remove('list-view-active');

    gridButton.classList.add('active');
    listButton.classList.remove('active');
});

listButton.addEventListener('click', () => {
    cardsContainer.classList.add('list-view-active');
    cardsContainer.classList.remove('grid-view-active');

    listButton.classList.add('active');
    gridButton.classList.remove('active');
});

getBusinessData();