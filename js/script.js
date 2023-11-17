document.addEventListener("DOMContentLoaded", function() {
    const introSection = document.getElementById("intro-section");

    // Hide the section after 5 seconds
    setTimeout(function() {
        introSection.classList.add("hidden");
    }, 2000);
});

const btnNavEl = document.querySelector(".btn__mobile");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});