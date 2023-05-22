const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "LoginRekha" && password === "LoginRekha") {
        alert("Login successful! Click on Ok to login");
        // Redirect to home page
        window.location = "index.html";
    } else {
        alert("Incorrect username or password");
    }
});
