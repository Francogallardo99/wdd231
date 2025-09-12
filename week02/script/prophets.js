const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets);
}
const displayProphets = (prophets) => {
  prophets.forEach ((prophet) => {
    const card = document.createElement("section");
    const h2 =document.createElement("h2");
    const portrait = document.createElement("img");
    const birthdate = document.createElement("p");
    const birthplace = document.createElement("p");

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.textContent = `Date of birth: ${prophet.birthdate}`;
    birthplace.textContent = `Place of birth: ${prophet.birthplace}`;
    portrait.setAttribute("src" , prophet.imageurl);
    portrait.setAttribute("alt" , `portrait of ${prophet.name} ${prophet.lastname}`)
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width" , "340");
    portrait.setAttribute("height" , "440");

    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);
    cards.appendChild(card);
    card.classList.add('prophet-card');
  });
}

getProphetData();
