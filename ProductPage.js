document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarToggleItm = document.querySelector(".navbar-toggle-itm");
    const menuCloseButton = document.querySelector(".cross");
    const buyNowButton = document.querySelector(".buy-now");
    const addToCartButton = document.querySelector(".add-to-cart");

    if (navbarToggle) {
        navbarToggle.addEventListener("click", function () {
            navbarToggleItm.style.display = "block";
        });
    }

    if (menuCloseButton) {
        menuCloseButton.addEventListener("click", function () {
            navbarToggleItm.style.display = "none";
        });
    }

    function addToCart() {
        const productName = document.querySelector(".product-info h2").innerText;
        const productPriceText = document.querySelector(".price").innerText;
        const productImage = document.querySelector(".product-image img").src;

        // Extract only numeric price from text (e.g., "Rs. 1,080 (55% OFF)" → 1080)
        const priceMatch = productPriceText.match(/\d{1,3}(?:,\d{3})*(?:\.\d+)?/);
        const cleanedPrice = priceMatch ? parseInt(priceMatch[0].replace(/,/g, ""), 10) : 0;

        const product = {
            name: productName,
            price: cleanedPrice,
            image: productImage,
            quantity: 1
        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert("Item added to cart!");
    }

    if (addToCartButton) {
        addToCartButton.addEventListener("click", addToCart);
    }

    if (buyNowButton) {
        buyNowButton.addEventListener("click", function () {
            window.location.href = "checkout.html";
        });
    }
});
