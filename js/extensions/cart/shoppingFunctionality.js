window.addEventListener("load", init)

function init() {

    addShoppingFunctionality();
    displayStoredDeliveryInfo();


}

function displayStoredDeliveryInfo() {
    const deliveryInfo = localStorage.getItem('deliveryInfo');
    if (deliveryInfo) {
        const parsedInfo = JSON.parse(deliveryInfo);
        document.getElementById('first-name').value = parsedInfo.firstName;
        document.getElementById('last-name').value = parsedInfo.lastName;
        document.getElementById('email').value = parsedInfo.email;
        document.getElementById('phone').value = parsedInfo.phone;
        document.getElementById('address').value = parsedInfo.address;
        document.getElementById('city').value = parsedInfo.city;
        document.getElementById('state').value = parsedInfo.state;
        document.getElementById('zip').value = parsedInfo.zip;
    }
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

    // Continue shopping functionality
    const continueShoppingButton = document.getElementById('continue-shopping');
    continueShoppingButton.addEventListener('click', () => {
        window.location.href = './product-page.html';
    });

    // Confirm order functionality
    const confirmOrderButton = document.getElementById('confirm-order');
    confirmOrderButton.addEventListener('click', () => {
        window.location.href = 'cart-confirmation.html';
    });

    // Save delivery information functionality
    const saveDeliveryButton = document.querySelector('input[type="submit"]');
    saveDeliveryButton.addEventListener('click', () => {

        const form = document.getElementById('form');
        if (form.checkValidity()) {
            storeDeliveryInformation();
            alert("Delivery information successfully stored.")

        } else {

            alert("Please fill in all required fields correctly.");

        }
    });
}

