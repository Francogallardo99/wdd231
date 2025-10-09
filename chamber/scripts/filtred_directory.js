const url = 'https://francogallardo99.github.io/wdd231/chamber/business.json';

export async function getFilteredBusinessData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    displayFilteredBusinesses(data.businesses);
  } catch (error) {
    console.error('Error al obtener los datos filtrados:', error);
  }
}

function displayFilteredBusinesses(businesses) {
  const container = document.querySelector('#business_filtred');
  if (!container) return;

  const filtered = businesses.filter(
    (business) => business.membershipLevel === 2 || business.membershipLevel === 3
  );

  const top3 = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);

  top3.forEach((business) => {
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

    card.append(portrait, h2, description, address, phoneNumber, website, membershipLevel);

    container.appendChild(card);

    card.classList.add('business-card');
    description.classList.add('description');
    membershipLevel.classList.add('member-level');
    website.classList.add('website-link');
  });
}
