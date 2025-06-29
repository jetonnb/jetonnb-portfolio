window.onload = function () {
  setTimeout(() => window.scrollTo(0, 0), 0);
};

// document.addEventListener("contextmenu", (e) => e.preventDefault());

window.addEventListener("scroll", () => {
  document.querySelectorAll(".hidden-section").forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (sectionPosition < screenPosition) {
      section.classList.add("visible");
    }
  });
});

const element = document.querySelector(".typed-text");
const phrases = ["Software Developer", "Frontend Specialist"];
let currentPhrase = 0;
let currentLetter = 0;
let isDeleting = false;

function type() {
  let displayText = phrases[currentPhrase].substring(0, currentLetter);
  element.textContent = displayText;

  if (!isDeleting && currentLetter < phrases[currentPhrase].length) {
    currentLetter++;
    setTimeout(type, 100);
  } else if (isDeleting && currentLetter > 0) {
    currentLetter--;
    setTimeout(type, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000); // pause before deleting
    } else {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
      setTimeout(type, 500); // pause before typing next
    }
  }
}

type();

const skillLevels = document.querySelectorAll(".skill-level");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const skillBar = entry.target;
        skillBar.style.width = skillBar.getAttribute("data-skill");
        observer.unobserve(skillBar); // animate only once
      }
    });
  },
  {
    threshold: 0.5,
  }
);

skillLevels.forEach((level) => {
  observer.observe(level);
});
