import {loadCategoryProducts} from "../load/loadCategoryProducts.js";

/**
 * Applies filters and sorting to the products based on the selected options.
 */
export function applyFilters() {
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