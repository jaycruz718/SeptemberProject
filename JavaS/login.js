document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("login-form");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const errorMsg = document.getElementById("error-msg");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const user = username.value.trim();
    const pass = password.value.trim();

    // Simple validation
    if (user === "" || pass === "") {
      errorMsg.textContent = "Please fill in both username and password.";
      return;
    }

    // Fake login check (you can replace this with real authentication)
    if (user === "admin" && pass === "halloween123") {
      errorMsg.style.color = "green";
      errorMsg.textContent = "Login successful! 🎃 Redirecting...";
      setTimeout(() => {
        // Redirect to homepage or dashboard
        window.location.href = "/index.html";
      }, 1500);
    } else {
      errorMsg.style.color = "red";
      errorMsg.textContent = "Invalid username or password. Try again.";
    }
  });
});