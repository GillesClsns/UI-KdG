import {applyFilters} from "../filter_sort/applyFilters.js";
import {loadCategoryProducts} from "./loadCategoryProducts.js";
import {addSortingOptions} from "../filter_sort/sortingOptions.js";

/**
 * Dynamically loads products for each category on the product page.
 */
export function loadProducts() {

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