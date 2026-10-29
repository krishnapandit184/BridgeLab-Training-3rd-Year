// Q8. Custom dropdown with document-level capturing-phase close handler
const dropdown = document.querySelector("#dropdown");
const dropdownButton = document.querySelector("#dropdownButton");
const optionsList = document.querySelector("#options");

function closeDropdown() {
  optionsList.hidden = true;
  dropdownButton.setAttribute("aria-expanded", "false");
}

dropdownButton.addEventListener("click", event => {
  event.stopPropagation();
  optionsList.hidden = !optionsList.hidden;
  dropdownButton.setAttribute("aria-expanded", String(!optionsList.hidden));
});

optionsList.addEventListener("click", event => {
  const optionButton = event.target.closest("button[data-value]");
  if (!optionButton) return;
  dropdownButton.textContent = optionButton.dataset.value;
  closeDropdown();
});

// Capture phase: this runs before bubbling handlers and closes on outside clicks.
document.addEventListener("click", event => {
  if (!dropdown.contains(event.target)) closeDropdown();
}, true);
