/*
 * Simple JavaScript for Eric Reilly's personal website.
 * Currently handles dynamic footer date and can be extended in future.
 */

// Set the current year in the footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    const now = new Date();
    yearSpan.textContent = now.getFullYear();
  }
});

// Placeholder for future enhancements.
