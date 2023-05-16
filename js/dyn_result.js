// Wait for the window to load before executing the code
window.addEventListener("load", createProductFiche)

/**
 * Creates a product fiche based on the selected product from the URL parameters.
 */
function createProductFiche() {

    // Get the selected product from the URL parameters
    let searchParams = new URLSearchParams(window.location.search);
    let selectedProduct = searchParams.get('product-selection');

    // Find the container element to append the product fiche
    let container = document.getElementById('main');

    // Iterate over the categories and products to find the selected product
    for (let category of categories) {
        for (let product of category.proddata) {
            if (product.name === selectedProduct) {

                // Create the HTML elements for the product fiche
                let listItem = document.createElement('li');
                listItem.className = "product-list";
                let imageElement = document.createElement('img');
                let priceElement = document.createElement('p');
                let descriptionElement = document.createElement('p');

                // Set the attributes and content for the HTML elements
                imageElement.src = product.image;
                imageElement.alt = product.alt;
                priceElement.textContent = product.price;
                descriptionElement.textContent = product.description;

                // Append the HTML elements to the product fiche
                listItem.appendChild(imageElement);
                listItem.appendChild(priceElement);
                listItem.appendChild(descriptionElement);

                // Append the product fiche to the container
                container.appendChild(listItem);

            }

        }

    }

}