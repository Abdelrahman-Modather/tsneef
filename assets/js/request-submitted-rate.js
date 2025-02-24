//Request submitted rate page
function RatingPopup() {
  const popup = document.getElementById("ratingPopup");
  const openBtn = document.querySelector(".open-popup");
  const stars = document.querySelectorAll(".star");
  const submitBtn = document.querySelector(".rate-btn");
  const ratingMessage = document.getElementById("ratingMessage");

  let selectedRating = 0;
  openBtn.addEventListener("click", function () {
    popup.style.display = "flex";
  });
  window.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
      resetPopup();
    }
  });
  stars.forEach((star) => {
    star.addEventListener("click", function () {
      selectedRating = this.getAttribute("data-value");
      stars.forEach((s) => s.classList.remove("active"));
      for (let i = 0; i < selectedRating; i++) {
        stars[i].classList.add("active");
      }
    });
  });
  submitBtn.addEventListener("click", function () {
    if (selectedRating > 0) {
      ratingMessage.textContent = `شكراً! لقد قمت بتقييم الخدمة بـ ${selectedRating} نجوم.`;
      ratingMessage.style.color = "#e3b449";
      ratingMessage.style.fontWeight = "bold";
    } else {
      ratingMessage.textContent = "يرجى اختيار تقييم!";
      ratingMessage.style.color = "red";
    }
  });
  function resetPopup() {
    selectedRating = 0;
    ratingMessage.textContent = "";
    stars.forEach((s) => s.classList.remove("active"));
  }
}
RatingPopup();
