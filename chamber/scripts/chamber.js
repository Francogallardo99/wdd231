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

[
  {
    "name": "TechInnovate S.A.",
    "address": "123 General Paz Ave, Córdoba",
    "city": "Córdoba",
    "state": "Córdoba",
    "phoneNumber": "+54 351 5555-1234",
    "websiteURL": "https://www.techinnovate.com.ar",
    "imageIcon": "techinnovate.png",
    "membershipLevel": 3,
    "description": "A leader in enterprise software solutions and web development."
  },
  {
    "name": "R&M Construction",
    "address": "789 Construction St, Córdoba",
    "city": "Córdoba",
    "state": "Córdoba",
    "phoneNumber": "+54 351 5555-4321",
    "websiteURL": "https://www.construccionesry.com",
    "imageIcon": "construcciones-ry.jpg",
    "membershipLevel": 2,
    "description": "Specialists in infrastructure and residential projects."
  },
  {
    "name": "AgroSustainable S.R.L.",
    "address": "Route 20, Km 15, Villa Carlos Paz, Córdoba",
    "city": "Villa Carlos Paz",
    "state": "Córdoba",
    "phoneNumber": "+54 351 5555-9876",
    "websiteURL": "https://www.agrosustentable.com",
    "imageIcon": "agrosustentable.svg",
    "membershipLevel": 1,
    "description": "Producers of organic and sustainable food."
  },
  {
    "name": "Creative Design Ltd.",
    "address": "101 Art Alley, Güemes Neighborhood, Córdoba",
    "city": "Córdoba",
    "state": "Córdoba",
    "phoneNumber": "+54 351 5555-6543",
    "websiteURL": "https://www.diseniocreativo.com.ar",
    "imageIcon": "diseno-creativo.jpg",
    "membershipLevel": 2,
    "description": "A digital marketing and graphic design agency."
  },
  {
    "name": "Rapid Transports SRL",
    "address": "50 Trucks Ave, San Vicente, Córdoba",
    "city": "Córdoba",
    "state": "Córdoba",
    "phoneNumber": "+54 351 5555-1122",
    "websiteURL": "https://www.transportesrapidos.com.ar",
    "imageIcon": "transportes-rapidos.png",
    "membershipLevel": 3,
    "description": "Logistics and freight transport services."
  },
  {
    "name": "Digital Education Inc.",
    "address": "321 Ideas St, Cerro de las Rosas, Córdoba",
    "city": "Córdoba",
    "state": "Córdoba",
    "phoneNumber": "+54 351 5555-3344",
    "websiteURL": "https://www.edudigital.net",
    "imageIcon": "educacion-digital.jpg",
    "membershipLevel": 1,
    "description": "An online course and professional training platform."
  },
  {
    "name": "Total Health Clinic",
    "address": "1500 Health Blvd, Alta Córdoba, Córdoba",
    "city": "Córdoba",
    "state": "Córdoba",
    "phoneNumber": "+54 351 5555-8765",
    "websiteURL": "https://www.clinicasaludtotal.com",
    "imageIcon": "salud-total.svg",
    "membershipLevel": 3,
    "description": "A high-complexity medical center with multiple specialties."
  }
]

