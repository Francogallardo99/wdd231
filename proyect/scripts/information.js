export function processURLParameters() {
  const getString = window.location.search;
  const myInfo = new URLSearchParams(getString);

  const resultsContainer = document.querySelector("#results");

  if (resultsContainer) {
    resultsContainer.innerHTML = `
      <p>Name: ${myInfo.get("name")}</p>
      <p>Spouse: ${myInfo.get("spouse")}</p>
      <p>Place of story: ${myInfo.get("place_story")}</p>
      <p>Email: ${myInfo.get("email")}</p>
      <p>Date: ${myInfo.get("date")}</p>
      <p>Your Story: ${myInfo.get("your story")}</p>
    `;
  } else {
    console.error("ID 'results' not found in the document.");
  }
}
