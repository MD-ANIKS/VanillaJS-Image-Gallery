// Global Variables
const current = document.querySelector(".current img");
const images = document.querySelectorAll(".images img");
const opacity = 0.6;

// Each Image click listener
images.forEach((img) => {
  img.addEventListener("click", clickImage);
});

// set the deafult opacity for current img
images[0].style.opacity = opacity;

// create a clickImage function
function clickImage(e) {
  // reset opacity
  images.forEach((img) => (img.style.opacity = 1));

  // change current img src to click image
  current.src = e.target.src;

  // remove current img classlist after 0.5s
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);

  // set the opacity
  e.target.style.opacity = opacity;

  // add the classlist for current img
  current.classList.add("fade-in");
}
