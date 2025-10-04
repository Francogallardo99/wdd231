import { updateFooter } from "./footer.js";
import { setupNav } from "./nav.js";
import { getBusinessData } from "./business.js";
import { setupViewToggle } from "./view-toggle.js";
import { apiFetch, displayResults } from "./wether.js";
import { apiFetch as apiFetchForecast, displayResults as displayResultsForecast } from "./forecast_weather.js";
import { getFilteredBusinessData } from "./filtred_directory.js";
import { showCourseDetailsInDialog } from "./modal.js";
import { processURLParameters } from "./information.js"; 



updateFooter();
setupNav();
getBusinessData();
setupViewToggle();
apiFetch().then(displayResults);
apiFetchForecast().then(displayResultsForecast);
getFilteredBusinessData();
showCourseDetailsInDialog();
processURLParameters();