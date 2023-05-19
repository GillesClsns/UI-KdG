// Wait for the window to load before executing the code
window.addEventListener("load", loadProducts);

/**
 * Dynamically loads products for each category on the product page.
 */
function loadProducts() {
    // Get the filter elements
    const nameFilter = document.getElementById('name-filter');
    const minPriceFilter = document.getElementById('min-price-filter');
    const maxPriceFilter = document.getElementById('max-price-filter');
    const filterButton = document.getElementById('filter-button');

    // Add event listener to the filter button
    filterButton.addEventListener('click', applyFilters);

    // Iterate over the categories
    for (let category of categories) {
        // Get the corresponding category section
        const categorySection = document.getElementById(`${category.catName.toLowerCase()}-section`);
        if (categorySection) {
            // Get the product list within the category section
            const productList = categorySection.querySelector('.product-list');
            if (productList) {
                // Load the products for the category
                loadCategoryProducts(productList, category.proddata);
            }
        }
    }
}

// Function to apply filters
function applyFilters() {
    const searchQuery = nameFilter.value.toLowerCase();
    const minPrice = parseFloat(minPriceFilter.value);
    const maxPrice = parseFloat(maxPriceFilter.value);

    // Iterate over the categories
    for (let category of categories) {
        // Get the corresponding category section
        const categorySection = document.getElementById(`${category.catName.toLowerCase()}-section`);
        if (categorySection) {
            // Get the product list within the category section
            const productList = categorySection.querySelector('.product-list');
            if (productList) {
                // Clear any existing products in the list
                productList.innerHTML = '';

                // Filter and load the products for the category
                const filteredProducts = category.proddata.filter(product => {
                    const productName = product.name.toLowerCase();
                    const productPrice = parseFloat(product.price);
                    const nameMatch = productName.includes(searchQuery);
                    const priceMatch = productPrice >= minPrice && productPrice <= maxPrice;
                    return nameMatch && priceMatch;
                });

                loadCategoryProducts(productList, filteredProducts);
            }
        }
    }
}


/**
 * Loads the products for a given category into the product list.
 * @param {Element} productList
 * @param {Array} products
 */
function loadCategoryProducts(productList, products) {

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

        if (product.price === "0") {
            priceElement.textContent = "Price Depends"
        } else {
            priceElement.textContent = `€${product.price} p.m.`;
        }

        linkElement.appendChild(imageElement);
        listItem.appendChild(linkElement);
        listItem.appendChild(nameElement);
        listItem.appendChild(priceElement);

        productList.appendChild(listItem);

    }

}
