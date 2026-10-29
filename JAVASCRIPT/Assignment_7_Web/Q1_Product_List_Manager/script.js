// Q1. Dynamic Product List Manager — event delegation on the parent <ul>
const productForm = document.querySelector("#productForm");
const productInput = document.querySelector("#productInput");
const productList = document.querySelector("#productList");
let editingItem = null;

function saveEdit(item) {
  if (!item) return;
  const editor = item.querySelector(".edit-input");
  const nameSpan = item.querySelector(".product-name");
  if (editor && nameSpan) {
    const updatedName = editor.value.trim();
    if (updatedName) nameSpan.textContent = updatedName;
    editor.replaceWith(nameSpan);
  }
  item.classList.remove("is-editing");
  if (editingItem === item) editingItem = null;
}

function beginEdit(item) {
  if (editingItem && editingItem !== item) saveEdit(editingItem);
  const nameSpan = item.querySelector(".product-name");
  if (!nameSpan || item.classList.contains("is-editing")) return;
  const editor = document.createElement("input");
  editor.className = "edit-input";
  editor.value = nameSpan.textContent;
  nameSpan.replaceWith(editor);
  item.classList.add("is-editing");
  editingItem = item;
  editor.focus();
  editor.select();
  editor.addEventListener("keydown", event => {
    if (event.key === "Enter") saveEdit(item);
    if (event.key === "Escape") {
      editor.value = "";
      saveEdit(item);
    }
  });
}

productForm.addEventListener("submit", event => {
  event.preventDefault();
  const name = productInput.value.trim();
  if (!name) return;
  const item = document.createElement("li");
  const span = document.createElement("span");
  span.className = "product-name";
  span.textContent = name;
  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.dataset.action = "delete";
  deleteButton.textContent = "Delete";
  item.append(span, editButton, deleteButton);
  productList.append(item);
  productInput.value = "";
  productInput.focus();
});

// Event delegation: one listener handles Edit and Delete for all list items.
productList.addEventListener("click", event => {
  const actionButton = event.target.closest("button[data-action]");
  if (!actionButton) return;
  const item = actionButton.closest("li");
  if (actionButton.dataset.action === "edit") beginEdit(item);
  if (actionButton.dataset.action === "delete") {
    if (editingItem === item) editingItem = null;
    item.remove();
  }
});

// Clicking outside the currently edited item auto-saves it.
document.addEventListener("click", event => {
  if (editingItem && !editingItem.contains(event.target)) saveEdit(editingItem);
});
