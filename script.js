// Ensure the page starts at the top when refreshed
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 0);
  }, 0);
};

// Disable right-click functionality
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// Scroll-triggered animation for sections
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll(".hidden-section");
  sections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      section.classList.add("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const portfolioTitle = document.getElementById("portfolio-title");
  const developerTitle = document.getElementById("developer-title");

  const text1 = "Jeton Nikollbibaj Portfolio";
  const text2 = "Hello, I am a Software Developer";

  const typeEffect = (element, text, delay) => {
    let i = 0;
    setTimeout(() => {
      const typingInterval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i === text.length) {
          clearInterval(typingInterval);
        }
      }, 10); // Typing speed
    }, delay);
  };

  typeEffect(portfolioTitle, text1, 0); // Start immediately
  typeEffect(developerTitle, text2, 3000); // Start after 3 seconds
});
