/**table */
document.addEventListener("DOMContentLoaded", () => {
  // Select all percentage cells for Change (1M) and Change (1Y)
  const percentageCells = document.querySelectorAll(
    "td:nth-child(5), td:nth-child(6)"
  );

  percentageCells.forEach((cell) => {
    const value = parseFloat(cell.textContent.replace("%", "")); // Get numeric value of percentage
    if (value > 0) {
      cell.style.color = "green"; // Apply green color for positive values
    } else if (value < 0) {
      cell.style.color = "red"; // Apply red color for negative values
    }
  });
});
