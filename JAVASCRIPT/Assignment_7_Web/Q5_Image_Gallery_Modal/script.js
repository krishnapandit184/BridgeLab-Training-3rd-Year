// Q5. Image gallery with modal preview
const gallery = document.querySelector("#gallery");
const modal = document.querySelector("#modal");
const modalContent = document.querySelector(".modal-content");
const modalImage = document.querySelector("#modalImage");
const modalCaption = document.querySelector("#modalCaption");
const closeModalButton = document.querySelector("#closeModal");

function openModal(image) {
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modalCaption.textContent = image.alt;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}

gallery.addEventListener("click", event => {
  const image = event.target.closest("img");
  if (image) openModal(image);
});

// Clicking the backdrop closes the modal.
modal.addEventListener("click", closeModal);

// Clicking inside the modal must not bubble to the backdrop.
modalContent.addEventListener("click", event => {
  event.stopPropagation();
});

closeModalButton.addEventListener("click", closeModal);
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal.classList.contains("open")) closeModal();
});
