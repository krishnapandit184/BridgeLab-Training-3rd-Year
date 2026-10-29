// Q9. Form submit blocker with live inline validation
const signupForm = document.querySelector("#signupForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const successMessage = document.querySelector("#successMessage");

const fields = [
  { input: nameInput, error: document.querySelector("#nameError"), validate: value => value.trim() ? "" : "Name is required." },
  { input: emailInput, error: document.querySelector("#emailError"), validate: value => !value.trim() ? "Email is required." : value.includes("@") ? "" : "Email must contain @." },
  { input: passwordInput, error: document.querySelector("#passwordError"), validate: value => value.length >= 6 ? "" : "Password must be at least 6 characters." }
];

function validateField(field) {
  const message = field.validate(field.input.value);
  field.error.textContent = message;
  field.input.classList.toggle("invalid", Boolean(message));
  return !message;
}

fields.forEach(field => {
  field.input.addEventListener("input", () => {
    validateField(field);
    successMessage.textContent = "";
  });
});

signupForm.addEventListener("submit", event => {
  // Prevent normal browser submission/navigation.
  event.preventDefault();

  const isValid = fields.map(validateField).every(Boolean);
  if (!isValid) {
    successMessage.textContent = "";
    return;
  }

  successMessage.textContent = "Form Submitted Successfully";
});
