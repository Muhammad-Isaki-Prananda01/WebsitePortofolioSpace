document.addEventListener('DOMContentLoaded', () => {

    /**
     * Intersection Observer to fade in sections on scroll
     */
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    /**
     * Animates skill bars when the skills section becomes visible.
     * This function is designed to work with the existing .visible class logic.
     */
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // When the skills section is visible
                if (entry.isIntersecting) {
                    const skillLevels = entry.target.querySelectorAll('.skill-level');
                    
                    skillLevels.forEach(skill => {
                        const level = skill.getAttribute('data-level');
                        if (level) {
                            // Set the custom property which the CSS uses for the width
                            skill.style.setProperty('--skill-level-width', level);
                        }
                    });
                    // Stop observing once the animation is triggered
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 }); // Trigger when 30% of the section is visible

        skillsObserver.observe(skillsSection);
    }
});
