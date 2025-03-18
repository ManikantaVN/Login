document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.querySelector("#password");
    const togglePassword = document.querySelector("#togglePassword");
    const loginForm = document.querySelector("form");
  
    // Toggle password visibility
    togglePassword.addEventListener("click", () => {
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.classList.replace("bxs-lock-alt", "bxs-lock-open");
      } else {
        passwordInput.type = "password";
        togglePassword.classList.replace("bxs-lock-open", "bxs-lock-alt");
      }
    });
  
    // Basic form validation
    loginForm.addEventListener("submit", (e) => {
      const username = document.querySelector("#username").value.trim();
      const password = passwordInput.value.trim();
  
      if (username === "" || password === "") {
        e.preventDefault();
        alert("Please fill in both fields.");
      }
    });
  });
  