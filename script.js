// Select all buttons with the .more-info-btn class
const moreInfoButtons = document.querySelectorAll('.more-info-btn');

// Add click listeners to each button
moreInfoButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Find the corresponding .more-info-content block
    const moreInfoContent = button.nextElementSibling;

    // Toggle the display property
    if (moreInfoContent.style.display === 'block') {
      moreInfoContent.style.display = 'none';
      button.textContent = 'Show More';
    } else {
      moreInfoContent.style.display = 'block';
      button.textContent = 'Show Less';
    }
  });
});
