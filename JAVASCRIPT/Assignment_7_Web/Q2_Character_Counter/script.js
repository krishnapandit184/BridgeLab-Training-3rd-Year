// Q2. Live character counter with warning behavior
const message = document.querySelector("#message");
const counter = document.querySelector("#counter");
const resetButton = document.querySelector("#resetButton");
const MAX_CHARACTERS = 100;

function updateCounter() {
  const remaining = MAX_CHARACTERS - message.value.length;
  counter.textContent = `${remaining} characters remaining`;
  counter.classList.toggle("warning", remaining <= 20 && remaining > 0);
  counter.classList.toggle("danger", remaining === 0);
}

message.addEventListener("input", updateCounter);

// Guard against additional input at the limit. maxlength is an additional safeguard.
message.addEventListener("beforeinput", event => {
  if (message.value.length >= MAX_CHARACTERS &&
      event.inputType.startsWith("insert") &&
      event.data) {
    event.preventDefault();
  }
});

resetButton.addEventListener("click", () => {
  message.value = "";
  updateCounter();
  message.focus();
});

updateCounter();
