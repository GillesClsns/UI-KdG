window.addEventListener("load", init)

function init() {

    let element = document.getElementById("product-selection")

    for (let x of categories) {

        let optGroup = document.createElement("optgroup")
        optGroup.label = x.catName

        element.add(optGroup)

        for (let y of x.proddata) {

            let option = document.createElement("option")

            option.value = y.name
            option.text = y.name
            optGroup.appendChild(option)

        }

    }

}