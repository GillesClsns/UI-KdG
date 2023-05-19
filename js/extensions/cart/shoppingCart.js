export function addToCart(productId) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    const product = getProductById(productId);
    if (product) {
        let existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            });
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        alert(`${product.name} added to cart!`);
    } else {
        alert('Product not found!');
    }
}

export function getProductById(productId) {
    for (const category of categories) {
        const product = category.proddata.find(item => item.id === productId);
        if (product) {
            return product;
        }
    }
    return null;
}