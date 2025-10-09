const dataURL = 'data/trips.json'; 
const tripsContainer = document.getElementById("trips");

function displayTrips(tripsArray){ 
    tripsContainer.innerHTML = ''; 
    tripsArray.forEach(trip => { 
        const card = document.createElement("section");
        const name = document.createElement("h2");
        const province = document.createElement("p");
        const year = document.createElement("p");
        const description = document.createElement("p");
        const picture = document.createElement("img");

        name.innerHTML = `<strong>Name of the Place: </strong> ${trip.place_name}`; 
        province.innerHTML = `<strong> Province: </strong> ${trip.province}`;
        year.innerHTML = `<strong> Year of the adventure: </strong> ${trip.year}`;
        description.innerHTML = `<strong>Description of the trip: </strong> <br> ${trip.description}`;

        picture.setAttribute("src", trip.image);
        picture.setAttribute("alt", `Image of ${trip.place_name}`);
        picture.setAttribute("loading", "lazy");
        picture.setAttribute("width", "400");
        picture.setAttribute("height", "300");

        card.append(name, province, year, description, picture);
        card.classList.add("trip_card");

        tripsContainer.appendChild(card);
    });
}

export async function getTripData() {
    try {
        const response = await fetch(dataURL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayTrips(data.trips); 
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
getTripData();