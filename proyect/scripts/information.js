export function processURLParameters() {
  const params = new URLSearchParams(window.location.search);
  const results = document.querySelector("#results");

  if (!results) {
    console.error("#results not found");
    return;
  }

  results.innerHTML = `
    <h2>Story Information</h2>
    <p><strong>Name:</strong> ${params.get("name") || "N/A"}</p>
    <p><strong>Spouse:</strong> ${params.get("spouse") || "N/A"}</p>
    <p><strong>Place of the story:</strong> ${params.get("place_story") || "N/A"}</p>
    <p><strong>Email:</strong> ${params.get("email") || "N/A"}</p>
    <p><strong>Date:</strong> ${params.get("date") || "N/A"}</p>
    <p><strong>Your story:</strong> ${params.get("your story") || "N/A"}</p>
    <p><strong>Document:</strong> ${params.get("document") || "N/A"}</p>
  `;
}
