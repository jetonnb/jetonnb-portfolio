// Ensure the page starts at the top when refreshed
window.onload = function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 0); 
};

// Scroll-triggered animation for sections
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.hidden-section');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add('visible');
        }
    });
});
