// Wait for the window to load before executing the code
window.addEventListener("load", init)

/**
 * Function to initialize the product selection.
 * It populates the "product-selection" element with options based on categories and products data.
 */
function init() {

    // Get the element with id "product-selection"
    let element = document.getElementById("product-selection")

    // Iterate through each category in the "categories" array
    for (let x of categories) {

        // Create an <optgroup> element for the category
        let optGroup = document.createElement("optgroup")
        optGroup.label = x.catName

        // Add the <optgroup> element to the "product-selection" element
        element.add(optGroup)

        // Iterate through each product in the category
        for (let y of x.proddata) {

            // Create an <option> element for the product
            let option = document.createElement("option")

            // Set the value and text of the <option> to the product name
            option.value = y.name
            option.text = y.name

            // Add the <option> element to the <optgroup> element
            optGroup.appendChild(option)

        }

    }

}