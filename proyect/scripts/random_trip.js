const dataURL = 'data/trips.json';
const tripsRandomContainer = document.getElementById("trips_random");
const tripModal = document.getElementById("trip_modal");
const modalDetailsContainer = document.getElementById("modal-details");
const closeModalButton = document.querySelector(".close-button");


function displayModalDetails(trip) {
    modalDetailsContainer.innerHTML = ''; 

    const name = document.createElement("h2");
    const province = document.createElement("p");
    const year = document.createElement("p");
    const description = document.createElement("p");
    const picture = document.createElement("img"); 

    name.textContent = trip.place_name; 
    province.innerHTML = `<strong>Provincia: </strong> ${trip.province}`;
    year.innerHTML = `<strong>Año: </strong> ${trip.year}`;
    description.innerHTML = `<strong>Descripción: </strong> ${trip.description}`;

    picture.setAttribute("src", trip.image);
    picture.setAttribute("alt", `Imagen de ${trip.place_name}`);
    picture.style.maxWidth = '100%'; 
    picture.style.height = 'auto';

    modalDetailsContainer.append(name, province, year, description, picture);

    tripModal.classList.add('show');
}

function buildAndDisplayTrips(tripsArray, containerElement) {
    containerElement.innerHTML = '';

    tripsArray.forEach(trip => {
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const picture = document.createElement("img");

        name.textContent = trip.place_name; 
        
        picture.setAttribute("src", trip.image);
        picture.setAttribute("alt", `Imagen de ${trip.place_name}`);
        picture.classList.add('modal-trigger'); 
        picture.setAttribute("width", "300");
        picture.setAttribute("height", "200");

        picture.addEventListener('click', () => {
            displayModalDetails(trip); 
        });

        card.append(name, picture);
        card.classList.add("trip_card_preview"); 

        containerElement.appendChild(card);
    });
}

function closeModal() {
    tripModal.classList.remove('show');
}

closeModalButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target === tripModal) {
        closeModal();
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && tripModal.classList.contains('show')) {
        closeModal();
    }
});


export async function loadRandomTrips() {
    if (!tripsRandomContainer) return;

    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const allTrips = data.trips;

        for (let i = allTrips.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allTrips[i], allTrips[j]] = [allTrips[j], allTrips[i]];
        }

        const randomThreeTrips = allTrips.slice(0, 3);

        buildAndDisplayTrips(randomThreeTrips, tripsRandomContainer);

    } catch (error) {
        console.error('Error fetching random data:', error);
    }
}

loadRandomTrips();