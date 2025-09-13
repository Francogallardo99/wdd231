let date = new Date();
let year = date.getFullYear();
let span = document.getElementById("currentyear");
if (span) {
    span.textContent = year;
    console.log("Year set:", year); 

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

