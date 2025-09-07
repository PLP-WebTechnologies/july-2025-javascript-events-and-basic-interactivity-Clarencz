// ------------------------------
// Part 1: Event Handling
// ------------------------------
const messageBtn = document.getElementById("messageBtn");
const message = document.getElementById("message");

messageBtn.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button!";
});

// ------------------------------
// Part 2: Interactive Elements
// ------------------------------

// Dark mode toggle
const toggleMode = document.getElementById("toggleMode");
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter
let count = 0;
const countSpan = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countSpan.textContent = count;
});

// FAQ toggle
const faqQuestion = document.querySelector(".faq-question");
const faqAnswer = document.querySelector(".faq-answer");

faqQuestion.addEventListener("click", () => {
  faqAnswer.style.display =
    faqAnswer.style.display === "block" ? "none" : "block";
});

// ------------------------------
// Part 3: Form Validation
// ------------------------------
const form = document.getElementById("signupForm");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  // Reset errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let valid = true;

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters.";
    valid = false;
  }

  // Validate Email with regex
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address.";
    valid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formSuccess").textContent =
      "✅ Form submitted successfully!";
    form.reset();
  }
});
