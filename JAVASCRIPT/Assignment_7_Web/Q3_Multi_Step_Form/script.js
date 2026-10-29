// Q3. Three-step form with validation and summary
const form = document.querySelector("#registrationForm");
const steps = [...document.querySelectorAll(".step")];
const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const errorMessage = document.querySelector("#error");
const summary = document.querySelector("#summary");
let currentStep = 0;

function showStep(index) {
  currentStep = index;
  steps.forEach((step, i) => step.classList.toggle("active", i === index));
  backButton.disabled = index === 0;
  nextButton.textContent = index === steps.length - 1 ? "Submit" : "Next";
  errorMessage.textContent = "";
}

function validateCurrentStep() {
  const input = steps[currentStep].querySelector("input");
  if (!input.checkValidity()) {
    input.reportValidity();
    errorMessage.textContent = input.type === "email"
      ? "Please enter a valid email address."
      : input.type === "password"
        ? "Password must contain at least 6 characters."
        : "Please enter your name.";
    return false;
  }
  return true;
}

nextButton.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStep < steps.length - 1) {
    showStep(currentStep + 1);
    steps[currentStep].querySelector("input").focus();
    return;
  }

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  summary.innerHTML = `<h2>Summary</h2><p><strong>Name:</strong> ${escapeHTML(name)}</p><p><strong>Email:</strong> ${escapeHTML(email)}</p><p><strong>Password:</strong> (entered)</p><p>All steps completed!</p>`;
  summary.hidden = false;
  form.hidden = true;
});

backButton.addEventListener("click", () => {
  if (currentStep > 0) showStep(currentStep - 1);
});

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

showStep(0);
