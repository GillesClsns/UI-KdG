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
    nameInput.addEventListener("change", validateName);
    emailInput.addEventListener("change", validateEmail);
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
    let errorSpan = document.getElementById(nameInput.dataset.error);

    if (value.length > 0 && !value.includes(" ")) {
        errorSpan.textContent = "";
        nameInput.classList.add("valid-input");
        nameInput.classList.remove("invalid-input");
    } else {
        errorSpan.textContent = nameInput.dataset.errorMessage;
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
    let errorSpan = document.getElementById(emailInput.dataset.error);

    if (pattern.test(value)) {
        errorSpan.textContent = "";
        emailInput.classList.add("valid-input");
        emailInput.classList.remove("invalid-input");
    } else {
        errorSpan.textContent = emailInput.dataset.errorMessage;
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
    let errorSpan = document.getElementById(addressInput.dataset.error);

    if (value.length > 0) {
        errorSpan.textContent = "";
        addressInput.classList.add("valid-input");
        addressInput.classList.remove("invalid-input");
    } else {
        errorSpan.textContent = addressInput.dataset.errorMessage;
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
    let errorSpan = document.getElementById(cityInput.dataset.error);

    if (value.length > 0) {
        errorSpan.textContent = "";
        cityInput.classList.add("valid-input");
        cityInput.classList.remove("invalid-input");
    } else {
        errorSpan.textContent = cityInput.dataset.errorMessage;
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
    let errorSpan = document.getElementById(stateInput.dataset.error);

    if (value.length > 0) {
        errorSpan.textContent = "";
        stateInput.classList.add("valid-input");
        stateInput.classList.remove("invalid-input");
    } else {
        errorSpan.textContent = stateInput.dataset.errorMessage;
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
    let errorSpan = document.getElementById(zipInput.dataset.error);

    if (pattern.test(value)) {
        errorSpan.textContent = "";
        zipInput.classList.add("valid-input");
        zipInput.classList.remove("invalid-input");
    } else {
        errorSpan.textContent = zipInput.dataset.errorMessage;
        zipInput.classList.remove("valid-input");
        zipInput.classList.add("invalid-input");
    }
}


/**
 * Validates the billing period select field.
 */
function validateBillingPeriod() {
    let billingPeriodSelect = document.getElementById("billing-period");
    let errorSpan = document.getElementById("billing-period-error");

    if (billingPeriodSelect.value !== "") {
        errorSpan.textContent = "";
        billingPeriodSelect.classList.add("valid-input");
    } else {
        errorSpan.textContent = "Please select a billing period.";
        billingPeriodSelect.classList.remove("valid-input");
    }
}

/**
 * Validates the player slots input field.
 */
function validatePlayerSlots() {
    let playerSlotsInput = document.getElementById("player-slots");
    let errorSpan = document.getElementById("player-slots-error");

    if (playerSlotsInput.value >= 1 && playerSlotsInput.value <= 100) {
        errorSpan.textContent = "";
        playerSlotsInput.classList.add("valid-input");
    } else {
        errorSpan.textContent = "Player slots must be between 1 and 100.";
        playerSlotsInput.classList.remove("valid-input");
    }
}

/**
 * Validates the server name input field.
 */
function validateServerName() {
    let serverNameInput = document.getElementById("server-name");
    let errorSpan = document.getElementById("server-name-error");

    if (serverNameInput.value.trim().length > 0) {
        errorSpan.textContent = "";
        serverNameInput.classList.add("valid-input");
    } else {
        errorSpan.textContent = "Please enter a server name.";
        serverNameInput.classList.remove("valid-input");
    }
}

/**
 * Validates the server password input field.
 */
function validateServerPassword() {
    let serverPasswordInput = document.getElementById("server-password");
    let errorSpan = document.getElementById("server-password-error");

    if (serverPasswordInput.value.length >= 8) {
        errorSpan.textContent = "";
        serverPasswordInput.classList.add("valid-input");
    } else {
        errorSpan.textContent = "Password must be at least 8 characters long.";
        serverPasswordInput.classList.remove("valid-input");
    }
}



