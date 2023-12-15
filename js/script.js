// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// menu clicked
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// hide nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const slidesContainer = document.getElementById("slides-container");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
  const totalSlides = document.querySelectorAll(".slide").length;
  let currentIndex = 0;

  function showSlide(index) {
    const newPosition = -index * 100 + "%";
    slidesContainer.style.transform = "translateX(" + newPosition + ")";
  }

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
  }

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  });

  showSlide(currentIndex);
});
