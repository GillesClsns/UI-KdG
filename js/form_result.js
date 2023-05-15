window.addEventListener("load", init);

function init() {
    let searchParams = new URLSearchParams(window.location.search);

    let firstname = searchParams.get("firstname");
    let lastname = searchParams.get("lastname");
    let email = searchParams.get("email");
    let phone = searchParams.get("phone");
    let address = searchParams.get("address");
    let zip = searchParams.get("zip");
    let city = searchParams.get("city");
    let state = searchParams.get("state");
    let billingPeriod = searchParams.get("billing-period");
    let playerSlots = searchParams.get("player-slots");
    let serverLocation = searchParams.get("server-location");
    let ram = searchParams.get("ram");
    let serverName = searchParams.get("server-name");
    let serverPassword = searchParams.get("server-password");
    let serverMotd = searchParams.get("server-motd");

    updateElement("name", `${firstname} ${lastname}`);
    updateElement("email", email);
    updateElement("phone", phone);
    updateElement("address", `${address}, ${zip} ${city}, ${state}`);
    updateElement("billing-period", billingPeriod);
    updateElement("player-slots", playerSlots);
    updateElement("server-location", serverLocation);
    updateElement("ram", ram);
    updateElement("server-name", serverName);
    updateElement("server-password", serverPassword);
    updateElement("server-motd", serverMotd);
}


function updateElement(id, value) {
    let element = document.getElementById(id);
    if (element) {
        element.innerHTML = value;
    }
}