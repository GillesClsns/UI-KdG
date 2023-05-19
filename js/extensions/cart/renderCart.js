import {getProductById} from "./shoppingCart.js";

window.addEventListener("load", renderCartOverview)

export function renderCartOverview() {
    // Retrieve cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Get the cart items section
    const cartItemsSection = document.getElementById('cart-items');

    // Check if the cart items section exists
    if (cartItemsSection) {
        // Clear any existing content
        cartItemsSection.innerHTML = '';

        let totalAmount = 0;

        // Iterate over the cart items and create HTML elements to display them
        cartItems.forEach(item => {
            const product = getProductById(item.id);
            if (product) {
                const itemElement = document.createElement('div');
                itemElement.classList.add('cart-item');

                // Create a container for product details
                const productDetails = document.createElement('div');
                productDetails.classList.add('product-details');

                // Display product name
                const productName = document.createElement('span');
                productName.textContent = `Product Name: ${product.name}`;
                productDetails.appendChild(productName);

                // Create a container for quantity and remove button
                const quantityRemoveContainer = document.createElement('div');
                quantityRemoveContainer.classList.add('quantity-remove-container');

                // Display quantity and allow changing the quantity
                const quantityLabel = document.createElement('span');
                quantityLabel.textContent = 'Quantity: ';
                quantityRemoveContainer.appendChild(quantityLabel);

                const quantityInput = document.createElement('input');
                quantityInput.type = 'number';
                quantityInput.value = item.quantity;
                quantityInput.min = '1';
                quantityInput.addEventListener('change', () => {
                    updateCartItemQuantity(item.id, parseInt(quantityInput.value));
                    renderCartOverview();
                });
                quantityRemoveContainer.appendChild(quantityInput);

                // Create a remove button and allow removing the item from the cart
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
                removeButton.addEventListener('click', () => {
                    removeCartItem(item.id);
                    renderCartOverview();
                });
                quantityRemoveContainer.appendChild(removeButton);

                productDetails.appendChild(quantityRemoveContainer);
                itemElement.appendChild(productDetails);

                // Calculate total price for the item
                const totalPrice = item.quantity * parseFloat(product.price);
                totalAmount += totalPrice;

                cartItemsSection.appendChild(itemElement);
            }
        });

        // Display the total amount
        const totalAmountElement = document.createElement('div');
        totalAmountElement.textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
        cartItemsSection.appendChild(totalAmountElement);
    } else {
        console.error('Cart items section not found.');
    }
}

export function updateCartItemQuantity(productId, quantity) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    let existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity = quantity;
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

export function removeCartItem(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems = cartItems.filter(item => item.id !== productId);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
