import {addToCart} from '../cart/shoppingCart.js';

export function loadCategoryProducts(productList, products) {
    productList.innerHTML = '';

    for (let product of products) {
        let listItem = document.createElement('li');
        listItem.className = `price-${product.css_class}`;
        let linkElement = document.createElement('a');
        linkElement.href = product.link || '#';
        let imageElement = document.createElement('img');
        imageElement.src = product.image;
        imageElement.alt = product.alt;
        let nameElement = document.createElement('p');
        nameElement.textContent = product.name;
        let priceElement = document.createElement('p');

        let cartButton = document.createElement('button');
        cartButton.id = `add-to-cart-${product.id}`;
        cartButton.innerHTML = "Add to cart";

        if (product.price === "0") {
            priceElement.textContent = "Price Depends";
        } else {
            priceElement.textContent = `€${product.price} p.m.`;
        }

        linkElement.appendChild(imageElement);
        listItem.appendChild(linkElement);
        listItem.appendChild(nameElement);
        listItem.appendChild(priceElement);
        listItem.appendChild(cartButton);
        productList.appendChild(listItem);

        cartButton.addEventListener('click', function () {
            addToCart(product.id);
        });
    }
}
