import {applyFilters} from "./applyFilters.js";

/**
 * Adds sorting options to the category section.
 * @param {Element} categorySection - The category section element.
 * @param {Element} productList - The product list element within the category section.
 */
export function addSortingOptions(categorySection, productList) {

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