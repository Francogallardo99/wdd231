export function processURLParameters() {
    const getString = window.location.search;
    const myInfo = new URLSearchParams(getString);

    const resultsContainer = document.querySelector("#results");

    if (resultsContainer) {
        resultsContainer.innerHTML = `
            <p>Appointment for ${myInfo.get("name")} ${myInfo.get("lastname")}</p>
            <p>Organization: ${myInfo.get("organization_name")}</p>
            <p>Phone: ${myInfo.get("phone")}</p>
            <p>Email: ${myInfo.get("email")}</p>
            <p>Membership Level: ${myInfo.get("membership")}</p>            `;
    } else {
        console.error("No se encontró el elemento con ID 'results' para mostrar la información.");
    }
}

processURLParameters();