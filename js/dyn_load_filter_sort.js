// Wait for the window to load before executing the code
window.addEventListener("load", loadProducts);

/**
 * Dynamically loads products for each category on the product page.
 */
function loadProducts() {

    const filterButton = document.getElementById('filter-button');
    filterButton.addEventListener('click', applyFilters);

    // Iterate over the categories
    for (let category of categories) {
        // Get the corresponding category section
        const categorySection = document.getElementById(`${category.catName.toLowerCase()}-section`);
        if (categorySection) {
            // Get the product list within the category
            const productList = categorySection.querySelector('.product-list');
            if (productList) {
                // Load the products from the category
                loadCategoryProducts(productList, category.proddata);
                // Add sorting options to the categories section
                addSortingOptions(categorySection, productList);
            }
        }
    }
}

/**
 * Adds sorting options to the category section.
 * @param {Element} categorySection - The category section element.
 * @param {Element} productList - The product list element within the category section.
 */
function addSortingOptions(categorySection, productList) {

    const sortingOptions = document.createElement('div');
    sortingOptions.className = 'sorting-options';

    const sortSelect = document.createElement('select');
    sortSelect.id = 'sort-select';
    const nameOption = document.createElement('option');
    nameOption.value = 'name';
    nameOption.text = 'Sort by Name';
    const priceOption = document.createElement('option');
    priceOption.value = 'price';
    priceOption.text = 'Sort by Price';
    sortSelect.appendChild(nameOption);
    sortSelect.appendChild(priceOption);

    const directionSelect = document.createElement('select');
    directionSelect.id = 'direction-select';
    const ascendingOption = document.createElement('option');
    ascendingOption.value = 'ascending';
    ascendingOption.text = 'Ascending';
    const descendingOption = document.createElement('option');
    descendingOption.value = 'descending';
    descendingOption.text = 'Descending';
    directionSelect.appendChild(ascendingOption);
    directionSelect.appendChild(descendingOption);

    sortingOptions.appendChild(sortSelect);
    sortingOptions.appendChild(directionSelect);
    categorySection.insertBefore(sortingOptions, productList);

    sortSelect.addEventListener('change', applyFilters);
    directionSelect.addEventListener('change', applyFilters);
}

/**
 * Applies filters and sorting to the products based on the selected options.
 */
function applyFilters() {
    const nameFilter = document.getElementById('name-filter');
    const minPriceFilter = document.getElementById('min-price-filter');
    const maxPriceFilter = document.getElementById('max-price-filter');
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
                const filteredProducts = category.proddata.filter((product) => {
                    const productName = product.name.toLowerCase();
                    const productPrice = parseFloat(product.price);
                    const nameMatch = productName.includes(searchQuery);
                    const priceMatch = productPrice >= minPrice && productPrice <= maxPrice;
                    return nameMatch && priceMatch;
                });

                // Get the selected sorting options
                const sortSelect = categorySection.querySelector('#sort-select');
                const directionSelect = categorySection.querySelector('#direction-select');
                const selectedSort = sortSelect.value;
                const selectedDirection = directionSelect.value;

                // Sort the filtered products based on the selected options
                filteredProducts.sort((a, b) => {
                    let sortValueA, sortValueB;
                    if (selectedSort === 'name') {
                        sortValueA = a.name.toLowerCase();
                        sortValueB = b.name.toLowerCase();
                    } else if (selectedSort === 'price') {
                        sortValueA = parseFloat(a.price);
                        sortValueB = parseFloat(b.price);
                    }

                    if (selectedDirection === 'ascending') {
                        return sortValueA < sortValueB ? -1 : sortValueA > sortValueB ? 1 : 0;
                    } else if (selectedDirection === 'descending') {
                        return sortValueA > sortValueB ? -1 : sortValueA < sortValueB ? 1 : 0;
                    }
                });

                loadCategoryProducts(productList, filteredProducts);
            }
        }
    }
}

/**
 * Loads the products for a given category into the product list.
 * @param {Element} productList - The product list element.
 * @param {Array} products - The array of products for the category.
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
            priceElement.textContent = "Price Depends";
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
