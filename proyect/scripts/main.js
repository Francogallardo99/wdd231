import { updateFooter } from "./footer.js";
import { setupNav } from "./nav.js";
import { getTripData } from "./trips.js";
import { loadRandomTrips } from "./random_trip.js"; 
import { processURLParameters } from "./information.js";

updateFooter();
setupNav();
getTripData();
loadRandomTrips();
processURLParameters();