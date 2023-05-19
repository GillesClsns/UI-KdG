document.addEventListener('DOMContentLoaded', renderConfirmation);

function renderConfirmation() {

    const deliveryInfo = JSON.parse(localStorage.getItem('deliveryInfo')) || {};

    document.getElementById('first-name').textContent = deliveryInfo.firstName || '';
    document.getElementById('last-name').textContent = deliveryInfo.lastName || '';
    document.getElementById('email').textContent = deliveryInfo.email || '';
    document.getElementById('phone').textContent = deliveryInfo.phone || '';
    document.getElementById('address').textContent = deliveryInfo.address || '';
    document.getElementById('city').textContent = deliveryInfo.city || '';
    document.getElementById('state').textContent = deliveryInfo.state || '';
    document.getElementById('zip').textContent = deliveryInfo.zip || '';

    const orderProducts = JSON.parse(localStorage.getItem('cartItems')) || [];

    const orderProductsList = document.getElementById('order-products-list');
    let total = 0;
    if (orderProductsList) {
        for (let i = 0; i < orderProducts.length; i++) {
            const product = orderProducts[i];
            const row = document.createElement('tr');
            const productNameCell = document.createElement('td');
            const quantityCell = document.createElement('td');
            const priceCell = document.createElement('td');

            productNameCell.textContent = product.name;
            quantityCell.textContent = product.quantity;
            priceCell.textContent = product.price;

            row.appendChild(productNameCell);
            row.appendChild(quantityCell);
            row.appendChild(priceCell);
            orderProductsList.appendChild(row);

            total += product.quantity * product.price;
        }
    }

    const orderTotalElement = document.getElementById('order-total');
    if (orderTotalElement) {
        orderTotalElement.textContent = total.toFixed(2);
    }

    // Clear local storage
    localStorage.removeItem('deliveryInfo');
    localStorage.removeItem('cartItems');
}



