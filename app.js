document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav button");
    const sections = document.querySelectorAll("main section");

    function turnPage(currentSection, nextSection) {
        currentSection.style.opacity = "0"; // Fade out effect
        setTimeout(() => {
            currentSection.classList.remove("active"); // Hide current section
            nextSection.classList.add("active"); // Show next section
            nextSection.style.opacity = "1"; // Fade in effect
        }, 500); // Duration of the fade out before showing the next
    }

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default link behavior
            const sectionId = this.getAttribute("data-section");
            const nextSectionId = this.getAttribute("data-next");
            const currentSection = document.getElementById(sectionId);
            const nextSection = document.getElementById(nextSectionId);

            if (currentSection && nextSection) {
                turnPage(currentSection, nextSection);
            }
        });
    });

    // Initialize the first section as active
    sections[0].classList.add("active");
});
