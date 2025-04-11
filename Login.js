document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            const storedUserData = localStorage.getItem("user");
            
            if (!storedUserData) {
                alert("No user found. Please sign up first.");
                return;
            }

            const user = JSON.parse(storedUserData);

            if (username === user.username && password === user.password) {
                alert("Login successful!");
                window.location.href = "index.html"; 
            } else {
                alert("Invalid username or password.");
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("signupUsername").value;
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            if (!username || !email || !password) {
                alert("Please fill in all fields.");
                return;
            }

            const userData = {
                username: username,
                email: email,
                password: password
            };
            
            localStorage.setItem("user", JSON.stringify(userData));

            alert("Signup successful! You can now log in.");
            window.location.href = "Login.html"; 
        });
    }
});
