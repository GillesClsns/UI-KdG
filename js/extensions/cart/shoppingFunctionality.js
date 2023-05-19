window.addEventListener("load", init)

function init() {

    addShoppingFunctionality();
    storeDeliveryInformation();

}

function storeDeliveryInformation() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;

    const deliveryInfo = {
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        state,
        zip
    };

    localStorage.setItem('deliveryInfo', JSON.stringify(deliveryInfo));
}

function addShoppingFunctionality() {
    // Continue Shopping button event handler
    const continueShoppingButton = document.getElementById('continue-shopping');
    continueShoppingButton.addEventListener('click', () => {
        // Redirect to the Products page
        window.location.href = './product-page.html';
    });

    // Confirm Order button event handler
    const confirmOrderButton = document.getElementById('confirm-order');
    confirmOrderButton.addEventListener('click', () => {
        // Perform any necessary validation or processing

        // Redirect to the Confirmation page
        window.location.href = 'confirmation.html';
    });

    // Save Delivery Information button event handler
    const saveDeliveryButton = document.querySelector('input[type="submit"]');
    saveDeliveryButton.addEventListener('click', () => {
        // Store delivery information in local storage
        storeDeliveryInformation();

        alert("Delivery information successfully stored.")

        // Clear
        document.getElementById('form').reset();
    });
}

