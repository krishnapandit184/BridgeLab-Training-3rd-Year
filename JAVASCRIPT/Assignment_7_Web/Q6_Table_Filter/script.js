// Q6. Real-time, case-insensitive student table filter
const searchInput = document.querySelector("#search");
const studentRows = [...document.querySelectorAll("#studentRows tr")];
const noResults = document.querySelector("#noResults");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.trim().toLowerCase();
  let visibleRows = 0;

  studentRows.forEach(row => {
    const rowText = row.textContent.toLowerCase();
    const matches = rowText.includes(searchTerm);
    row.hidden = !matches;
    if (matches) visibleRows++;
  });

  noResults.hidden = visibleRows !== 0;
});
