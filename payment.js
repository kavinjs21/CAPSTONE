document.addEventListener("DOMContentLoaded", function () {
    const paymentForm = document.getElementById("payment-form");
    const popup = document.getElementById("payment-popup");
    const closePopup = document.getElementById("close-popup");
    const mainContent = document.getElementById("main-content");

    paymentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Getting values from the form
        const fullName = document.getElementById("full-name").value.trim();
        const address = document.getElementById("address").value.trim();
        const city = document.getElementById("city").value.trim();
        const state = document.getElementById("state").value.trim();
        const zipCode = document.getElementById("zip-code").value.trim();
        const cardNumber = document.getElementById("card-number").value.trim();
        const expiryDate = document.getElementById("expiry-date").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        // Check if any field is empty
        if (fullName === "" || address === "" || city === "" || state === "" || zipCode === "" || cardNumber === "" || expiryDate === "" || cvv === "") {
            alert("Please fill in all the fields.");
            return;
        }

        // Validate card number (should be exactly 16 digits)
        if (cardNumber.length !== 16) {
            alert("Card number should be exactly 16 digits.");
            return;
        }

        // Validate CVV (should be exactly 3 digits)
        if (cvv.length !== 3) {
            alert("CVV should be exactly 3 digits.");
            return;
        }

        // If all fields are valid
        mainContent.classList.add("blurred"); // Apply blur effect to main content
        popup.style.display = "flex"; // Show the success popup
        popup.style.opacity = "1"; // Fade in the popup

        // Optionally clear the cart from localStorage
        localStorage.removeItem("cart");
    });

    closePopup.addEventListener("click", function () {
        popup.style.opacity = "0"; // Fade out the popup
        setTimeout(() => {
            popup.style.display = "none"; // Hide the popup after fading out
            mainContent.classList.remove("blurred"); // Remove blur from the content
            window.location.href = "index.html"; // Redirect to the homepage or other page
        }, 300); // Delay for transition effect
    });
});
