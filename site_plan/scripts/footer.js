export function updateFooter() {
  const date = new Date();
  const year = date.getFullYear();

  const span = document.getElementById("currentyear");
  if (span) {
    span.textContent = year;
  }

  const lastModifiedParagraph = document.getElementById("lastModified");
  if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
  }
} 