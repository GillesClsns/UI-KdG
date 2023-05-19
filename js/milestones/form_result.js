// Wait for the window to load before executing the code
window.addEventListener("load", init);

/**
 * Initializes the page by retrieving and updating elements with URL parameters.
 */
function init() {

    const searchParams = new URLSearchParams(window.location.search);

    const firstName = searchParams.get("first-name");
    const lastName = searchParams.get("last-name");
    const email = searchParams.get("email");
    const phone = searchParams.get("phone");
    const address = searchParams.get("address");
    const zip = searchParams.get("zip");
    const city = searchParams.get("city");
    const state = searchParams.get("state");
    const selectedPackage = searchParams.get("product-selection");
    const billingPeriod = searchParams.get("billing-period");
    const playerSlots = searchParams.get("player-slots");
    const serverLocation = searchParams.get("server-location");
    const ram = searchParams.get("ram");
    const serverName = searchParams.get("server-name");
    const serverPassword = searchParams.get("server-password");
    const serverMotd = searchParams.get("server-motd");

    updateElement("first-name", `${firstName}`);
    updateElement("last-name", `${lastName}`);
    updateElement("email", email);
    updateElement("phone", phone);
    updateElement("address", `${address}, ${zip} ${city}, ${state}`);
    updateElement("product-selection", selectedPackage);
    updateElement("billing-period", billingPeriod);
    updateElement("player-slots", playerSlots);
    updateElement("server-location", serverLocation);
    updateElement("ram", ram);
    updateElement("server-name", serverName);
    updateElement("server-password", serverPassword);
    updateElement("server-motd", serverMotd);
}

/**
 * Updates the content of an HTML element with the provided value.
 * @param {string} id - The ID of the HTML element to update.
 * @param {string} value - The new value to set for the element.
 */
function updateElement(id, value) {
    let element = document.getElementById(id);
    if (element) {
        element.innerHTML = value;

    }
}