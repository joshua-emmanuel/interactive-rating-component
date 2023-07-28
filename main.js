const jsConfetti = new JSConfetti();
const form = document.querySelector('form');
const ratings = document.querySelector('.ratings');
const ratingButtons = Array.from(document.querySelectorAll('.rating'));
const success = document.querySelector(".success");
const selecteddRatingText = document.querySelector(".selected-rating");

function handleRatingClick(event) {
  const selecteddRating = event.target.closest('.rating');
  if (!selecteddRating) {
    return;
  }
  ratingButtons.forEach((ratingButton) => {
    ratingButton.setAttribute('aria-selected', false);
  });
  selecteddRating.setAttribute('aria-selected', true);
}

ratings.addEventListener("click", handleRatingClick);

function submitRating() {
  const selecteddRating = ratingButtons.find((ratingButton) => {
    return ratingButton.getAttribute("aria-selected") === "true";
  })
  if (!selecteddRating) {
    alert("Please select a rating");
    return;
  }
  const rating = selecteddRating.dataset.rating;
  selecteddRatingText.textContent = rating;
  form.hidden = true;
  success.hidden = false;
  jsConfetti.addConfetti();
}

function handleFormSubmit(event) {
  event.preventDefault();
  submitRating();
}

form.addEventListener('submit', handleFormSubmit);

window.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    submitRating();
  }
})