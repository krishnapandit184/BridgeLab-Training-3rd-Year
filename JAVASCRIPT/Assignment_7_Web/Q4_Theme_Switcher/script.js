// Q4. Theme switcher using attribute manipulation
const body = document.body;
const themeButtons = document.querySelectorAll("[data-theme-choice]");

function applyTheme(themeName) {
  // Apply the body class and custom data attribute using setAttribute().
  body.setAttribute("class", `theme-${themeName}`);
  body.setAttribute("data-theme", themeName);
}

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    applyTheme(button.dataset.themeChoice);
  });
});

// Initialize theme attribute and class.
applyTheme("light");
