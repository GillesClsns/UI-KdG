// Wait for the window to load before executing the code
window.addEventListener("load", init);

/**
 * Initializes the form by adding event listeners to the relevant input elements.
 */
function init() {
    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputElements = [
        {id: "first-name", validation: validateWhitespace, event: "change"},
        {id: "last-name", validation: validateWhitespace, event: "change"},
        {id: "email", validation: validateEmail, event: "input"},
        {id: "phone", validation: validatePhoneNumber, event: "input"},
        {id: "address", validation: validateAddress, event: "input"},
        {id: "city", validation: validateCity, event: "input"},
        {id: "state", validation: validateState, event: "input"},
        {id: "zip", validation: validateZip, event: "input"},
        {id: "billing-period", validation: validateBillingPeriod, event: "input"},
        {id: "player-slots", validation: validatePlayerSlots, event: "input"},
        {id: "server-name", validation: validateServerName, event: "input"},
        {id: "server-password", validation: validateServerPassword, event: "input"},
        {id: "ram", validation: updateRamOutput, event: "input"},
    ];

    inputElements.forEach((inputElement) => {
        const {id, validation, event} = inputElement;
        addInputEventListener(id, validation, event);

        // Validate each input field on page load
        const element = document.getElementById(id);
        if (validation && element) {
            validation({target: element});
        }
    });
}

/**
 * Adds an input event listener to the specified input element.
 * @param {string} elementId - The ID of the input element.
 * @param {Function} validationFunction - The validation function to be called on input.
 * @param {string} type - The event type (e.g., "change").
 */
function addInputEventListener(elementId, validationFunction, type) {
    const inputElement = document.getElementById(elementId);

    if (inputElement) {
        inputElement.addEventListener(type, (event) => {
            validationFunction(event); // Pass both inputElement and event
        });
    }
}

/**
 * Handles form submission by validating all fields.
 * @param {Event} event - The form submit event.
 */
function formSubmit(event) {
    const form = event.target;
    const inputs = form.querySelectorAll("input, select");

    // Lambda wannabe or just cool callback function?
    inputs.forEach((input) => {
        const validationFunctionName = input.dataset.validation;
        if (validationFunctionName) {
            const validationFunction = window[validationFunctionName];
            validationFunction({target: input});
        }
    });

    const invalidFields = form.querySelectorAll(".invalid-input");
    if (invalidFields.length > 0) {
        event.preventDefault(); // Prevent form submission
    }
}

/**
 * Validates the name input field.
 * @param inputElement
 * @param event
 */
function validateWhitespace(event) {

    let textInput = event.target;
    let value = textInput.value;
    const pattern = /^\S*$/gm;

    if (value.length > 0 && pattern.test(value)) {
        textInput.classList.add("valid-input");
        textInput.classList.remove("invalid-input");
        clearErrorBanner(textInput);
    } else {
        textInput.classList.remove("valid-input");
        textInput.classList.add("invalid-input");
        showErrorBanner(textInput, 'May not have head or tail whitespace.');
    }
}


/**
 * Validates the email input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateEmail(event) {

    const emailInput = event.target;
    const value = emailInput.value.trim();
    const pattern = /^[A-Za-z]*\.[A-Za-z]*@(student\.)?kdg\.be$/gm;


    if (value.length > 0 && pattern.test(value)) {
        emailInput.classList.add("valid-input");
        emailInput.classList.remove("invalid-input");
        clearErrorBanner(emailInput);
    } else {
        emailInput.classList.remove("valid-input");
        emailInput.classList.add("invalid-input");
        showErrorBanner(emailInput, 'Must be valid KdG Email.');
    }
}

/**
 * Validates the phone number input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validatePhoneNumber(event) {
    const phoneInput = event.target;
    const value = phoneInput.value.trim();
    const pattern = /^\d{10}$/; // Assumes a 10-digit phone number format

    if (value.length > 0 && pattern.test(value)) {
        phoneInput.classList.add("valid-input");
        phoneInput.classList.remove("invalid-input");
        clearErrorBanner(phoneInput);
    } else {
        phoneInput.classList.remove("valid-input");
        phoneInput.classList.add("invalid-input");
        showErrorBanner(phoneInput, 'Please enter a valid phone number (10 digits).');
    }
}

/**
 * Validates the address input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateAddress(event) {
    const addressInput = event.target;
    const value = addressInput.value.trim();

    if (value.length > 0) {
        addressInput.classList.add("valid-input");
        addressInput.classList.remove("invalid-input");
        clearErrorBanner(addressInput);
    } else {
        addressInput.classList.remove("valid-input");
        addressInput.classList.add("invalid-input");
        showErrorBanner(addressInput, 'Please enter a valid address.');
    }
}

/**
 * Validates the city input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateCity(event) {

    const cityInput = event.target;
    const value = cityInput.value.trim();

    if (value.length > 0) {
        cityInput.classList.add("valid-input");
        cityInput.classList.remove("invalid-input");
        clearErrorBanner(cityInput);
    } else {
        cityInput.classList.remove("valid-input");
        cityInput.classList.add("invalid-input");
        showErrorBanner(cityInput, 'Please enter a valid city.');
    }
}

/**
 * Validates the state input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateState(event) {

    const stateInput = event.target;
    const value = stateInput.value.trim();

    if (value.length > 0) {
        stateInput.classList.add("valid-input");
        stateInput.classList.remove("invalid-input");
        clearErrorBanner(stateInput);
    } else {
        stateInput.classList.remove("valid-input");
        stateInput.classList.add("invalid-input");
        showErrorBanner(stateInput, 'Please enter a valid state.');
    }
}

/**
 * Validates the ZIP code input field.
 * @param {{target: HTMLElement}} event - The input change event.
 */
function validateZip(event) {

    const zipInput = event.target;
    const value = zipInput.value.trim();
    const pattern = /^\d{4}$/;

    if (value.length > 0 && pattern.test(value)) {
        zipInput.classList.add("valid-input");
        zipInput.classList.remove("invalid-input");
        clearErrorBanner(zipInput);
    } else {
        zipInput.classList.remove("valid-input");
        zipInput.classList.add("invalid-input");
        showErrorBanner(zipInput, 'Please enter a valid postal code.');
    }
}

/**
 * Validates the billing period select field.
 */
function validateBillingPeriod() {

    const billingPeriodSelect = document.getElementById("billing-period");

    if (billingPeriodSelect.value !== "") {
        billingPeriodSelect.classList.add("valid-input");
        billingPeriodSelect.classList.remove("invalid-input");
        clearErrorBanner(billingPeriodSelect);
    } else {
        billingPeriodSelect.classList.remove("valid-input");
        billingPeriodSelect.classList.add("invalid-input");
        showErrorBanner(billingPeriodSelect, 'Please enter a valid billing period.');
    }
}

/**
 * Validates the player slots input field.
 */
function validatePlayerSlots() {

    const playerSlotsInput = document.getElementById("player-slots");

    if (playerSlotsInput.value >= 1 && playerSlotsInput.value <= 100) {
        playerSlotsInput.classList.add("valid-input");
        playerSlotsInput.classList.remove("invalid-input");
        clearErrorBanner(playerSlotsInput);
    } else {
        playerSlotsInput.classList.remove("valid-input");
        playerSlotsInput.classList.add("invalid-input");
        showErrorBanner(playerSlotsInput, 'Please choosep player slots.');
    }
}

/**
 * Validates the server name input field.
 */
function validateServerName() {

    const serverNameInput = document.getElementById("server-name");

    if (serverNameInput.value.trim().length > 0) {
        serverNameInput.classList.add("valid-input");
        serverNameInput.classList.remove("invalid-input");
        clearErrorBanner(serverNameInput);
    } else {
        serverNameInput.classList.remove("valid-input");
        serverNameInput.classList.add("invalid-input");
        showErrorBanner(serverNameInput, 'Please enter a valid server name.');
    }
}

/**
 * Validates the server password input field.
 */
function validateServerPassword() {

    const serverPasswordInput = document.getElementById("server-password");

    if (serverPasswordInput.value.length >= 8) {
        serverPasswordInput.classList.add("valid-input");
        serverPasswordInput.classList.remove("invalid-input");
        clearErrorBanner(serverPasswordInput);
    } else {
        serverPasswordInput.classList.remove("valid-input");
        serverPasswordInput.classList.add("invalid-input");
        showErrorBanner(serverPasswordInput, 'Please enter a valid server password.');
    }
}

/**
 * Shows the error message based on input validity
 * @param inputElement
 * @param errorMessage
 */
function showErrorBanner(inputElement, errorMessage) {
    const errorSpan = inputElement.nextElementSibling;
    errorSpan.textContent = errorMessage;
    errorSpan.style.display = 'block';
}

/**
 * Removes the error mesage based on input validity
 * @param inputElement
 */
function clearErrorBanner(inputElement) {
    const errorSpan = inputElement.nextElementSibling;
    errorSpan.textContent = "";
    errorSpan.style.display = "block"
}

/**
 * Updates the RAM output text based on the selected RAM value.
 */
function updateRamOutput() {
    const ramInput = document.getElementById('ram');
    const ramOutput = document.getElementById('ram-output');
    ramOutput.textContent = ramInput.value + 'GB';
}
