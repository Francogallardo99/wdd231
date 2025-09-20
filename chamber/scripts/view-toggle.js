export function setupViewToggle() {
  const gridButton = document.getElementById("grid-view");
  const listButton = document.getElementById("list-view");
  const cardsContainer = document.querySelector("#cards");

  if (!gridButton || !listButton || !cardsContainer) return;

  gridButton.addEventListener("click", () => {
    cardsContainer.classList.add("grid-view-active");
    cardsContainer.classList.remove("list-view-active");

    gridButton.classList.add("active");
    listButton.classList.remove("active");
  });

  listButton.addEventListener("click", () => {
    cardsContainer.classList.add("list-view-active");
    cardsContainer.classList.remove("grid-view-active");

    listButton.classList.add("active");
    gridButton.classList.remove("active");
  });
}
