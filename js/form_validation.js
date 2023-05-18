// Wait for the window to load before executing the code
window.addEventListener("load", init);

/**
 * Initializes the form by adding event listeners to the relevant input elements.
 */
function init() {

    let form = document.getElementById("form");
    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let billingPeriodSelect = document.getElementById("billing-period");
    let playerSlotsInput = document.getElementById("player-slots");
    let serverNameInput = document.getElementById("server-name");
    let serverPasswordInput = document.getElementById("server-password");

    form.addEventListener("submit", formSubmit);
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    billingPeriodSelect.addEventListener("input", validateBillingPeriod);
    playerSlotsInput.addEventListener("input", validatePlayerSlots);
    serverNameInput.addEventListener("input", validateServerName);
    serverPasswordInput.addEventListener("input", validateServerPassword);

}

/**
 * Handles form submission by validating all fields.
 * @param {Event} event - The form submit event.
 */
function formSubmit(event) {

    let nameInput = document.getElementById("name");
    let emailInput = document.getElementById("email");
    let addressInput = document.getElementById("address");
    let cityInput = document.getElementById("city");
    let stateInput = document.getElementById("state");
    let zipInput = document.getElementById("zip");
    let billingPeriodSelect = document.getElementById("billing-period");
    let playerSlotsInput = document.getElementById("player-slots");
    let serverNameInput = document.getElementById("server-name");
    let serverPasswordInput = document.getElementById("server-password");

    // Validate fields upon submission
    validateName({target: nameInput});
    validateEmail({target: emailInput});
    validateAddress({target: addressInput});
    validateCity({target: cityInput});
    validateState({target: stateInput});
    validateZip({target: zipInput});
    validateBillingPeriod({target: billingPeriodSelect});
    validatePlayerSlots({target: playerSlotsInput});
    validateServerName({target: serverNameInput});
    validateServerPassword({target: serverPasswordInput});

    // Check for invalid fields
    let invalidFields = document.querySelectorAll(".invalid-input");
    if (invalidFields.length > 0) {
        event.preventDefault(); // Prevent form submission
    }
}

/**
 * Validates the name input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateName(event) {
    let nameInput = event.target;
    let value = nameInput.value.trim();

    let regex = /^\S.*\S$/;

    if (value.length > 0 && regex.test(value)) {
        nameInput.classList.add("valid-input");
        nameInput.classList.remove("invalid-input");
    } else {
        nameInput.classList.remove("valid-input");
        nameInput.classList.add("invalid-input");
    }
}


/**
 * Validates the email input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateEmail(event) {

    let emailInput = event.target;
    let value = emailInput.value.trim();
    let pattern = /^[A-Za-z]+\.[A-Za-z]+@student\.kdg\.be$/;

    if (value.length > 0 && pattern.test(value)) {
        emailInput.classList.add("valid-input");
        emailInput.classList.remove("invalid-input");
    } else {
        emailInput.classList.remove("valid-input");
        emailInput.classList.add("invalid-input");
    }
}

/**
 * Validates the address input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateAddress(event) {
    let addressInput = event.target;
    let value = addressInput.value.trim();

    if (value.length > 0) {
        addressInput.classList.add("valid-input");
        addressInput.classList.remove("invalid-input");
    } else {
        addressInput.classList.remove("valid-input");
        addressInput.classList.add("invalid-input");
    }
}

/**
 * Validates the city input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateCity(event) {
    let cityInput = event.target;
    let value = cityInput.value.trim();

    if (value.length > 0) {
        cityInput.classList.add("valid-input");
        cityInput.classList.remove("invalid-input");
    } else {
        cityInput.classList.remove("valid-input");
        cityInput.classList.add("invalid-input");
    }
}

/**
 * Validates the state input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateState(event) {

    let stateInput = event.target;
    let value = stateInput.value.trim();

    if (value.length > 0) {
        stateInput.classList.add("valid-input");
        stateInput.classList.remove("invalid-input");
    } else {
        stateInput.classList.remove("valid-input");
        stateInput.classList.add("invalid-input");
    }
}

/**
 * Validates the ZIP code input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateZip(event) {
    let zipInput = event.target;
    let value = zipInput.value.trim();
    let pattern = /^\d{4}$/;

    if (value.length > 0 && pattern.test(value)) {
        zipInput.classList.add("valid-input");
        zipInput.classList.remove("invalid-input");
    } else {
        zipInput.classList.remove("valid-input");
        zipInput.classList.add("invalid-input");
    }
}


/**
 * Validates the billing period select field.
 */
function validateBillingPeriod() {
    let billingPeriodSelect = document.getElementById("billing-period");

    if (billingPeriodSelect.value !== "") {
        billingPeriodSelect.classList.add("valid-input");
    } else {
        billingPeriodSelect.classList.remove("valid-input");
    }
}

/**
 * Validates the player slots input field.
 */
function validatePlayerSlots() {
    let playerSlotsInput = document.getElementById("player-slots");

    if (playerSlotsInput.value >= 1 && playerSlotsInput.value <= 100) {
        playerSlotsInput.classList.add("valid-input");
    } else {
        playerSlotsInput.classList.remove("valid-input");
    }
}

/**
 * Validates the server name input field.
 */
function validateServerName() {
    let serverNameInput = document.getElementById("server-name");

    if (serverNameInput.value.trim().length > 0) {
        serverNameInput.classList.add("valid-input");
    } else {
        serverNameInput.classList.remove("valid-input");
    }
}

/**
 * Validates the server password input field.
 */
function validateServerPassword() {
    let serverPasswordInput = document.getElementById("server-password");

    if (serverPasswordInput.value.length >= 8) {
        serverPasswordInput.classList.add("valid-input");
    } else {
        serverPasswordInput.classList.remove("valid-input");
    }
}



