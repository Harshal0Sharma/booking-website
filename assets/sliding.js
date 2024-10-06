const cardContainer = document.getElementById("cardContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cards = document.querySelectorAll(".card");
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth; // Get the width of the first card

let currentIndex = 0;

// Function to update the visible cards
function updateCards() {
  const translateX = -(currentIndex * cardWidth); // Calculate the new translateX value
  cardContainer.style.transform = `translateX(${translateX}px)`; // Apply the translation

  // Next button seamless scrolling: from last 4 cards back to the first 4 cards
  if (currentIndex === totalCards - 4) {
    setTimeout(() => {
      currentIndex = 0;
      cardContainer.style.transition = "none"; // Disable transition for immediate jump
      updateCards();
      setTimeout(() => {
        cardContainer.style.transition = "transform 0.5s ease"; // Re-enable transition
      }, 50);
    }, 500); // Wait for animation to complete before jumping
  }

  // Previous button seamless scrolling: from first 4 cards back to the last 4 cards
  if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = totalCards - 4;
      cardContainer.style.transition = "none"; // Disable transition for immediate jump
      updateCards();
      setTimeout(() => {
        cardContainer.style.transition = "transform 0.5s ease"; // Re-enable transition
      }, 50);
    }, 500); // Wait for animation to complete before jumping
  }
}

// Function for the next button
nextBtn.addEventListener("click", () => {
  currentIndex++; // Increment index
  if (currentIndex > totalCards - 4) currentIndex = totalCards - 4; // Ensure it doesn't go beyond last visible 4 cards
  updateCards();
});

// Function for the previous button
prevBtn.addEventListener("click", () => {
  currentIndex--; // Decrement index
  if (currentIndex < 0) currentIndex = 0; // Ensure it doesn't go below 0
  updateCards();
});

// Initial update to set the correct position
updateCards();
