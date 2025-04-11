document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#search"); // Ensure input has id="search"
    if (!searchInput) return; // Prevents errors if input is missing

    const productBoxes = document.querySelectorAll(".pdt-box");
    const noResultsMessage = document.createElement("p");

    noResultsMessage.textContent = "No products found. Check your spelling!";
    noResultsMessage.style.display = "none";
    noResultsMessage.style.textAlign = "center";
    noResultsMessage.style.color = "#673147";
    noResultsMessage.style.marginTop = "10px";
    noResultsMessage.id = "no-results";

    const container = document.querySelector(".products-container");
    container.parentNode.insertBefore(noResultsMessage, container);

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.trim().toLowerCase();
        let hasResults = false;

        productBoxes.forEach((box) => {
            const productName = box.querySelector("p").textContent.toLowerCase();
            if (productName.includes(searchValue)) {
                box.style.display = "block";
                hasResults = true;
            } else {
                box.style.display = "none";
            }
        });

        noResultsMessage.style.display = hasResults ? "none" : "block";
    });
});

// Navbar menu toggle functions
const toggleitm = document.querySelector(".navbar-toggle-itm");

function menu() {
    if (toggleitm) {
        toggleitm.style.left = "0";
    }
}

function menuclose() {
    if (toggleitm) {
        toggleitm.style.left = "-60%";
    }
}
