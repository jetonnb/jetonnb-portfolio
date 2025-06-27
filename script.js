window.onload = function () {
  setTimeout(() => window.scrollTo(0, 0), 0);
};

document.addEventListener("contextmenu", (e) => e.preventDefault());

window.addEventListener("scroll", () => {
  document.querySelectorAll(".hidden-section").forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (sectionPosition < screenPosition) {
      section.classList.add("visible");
    }
  });
});
