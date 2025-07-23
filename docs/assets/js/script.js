document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio website loaded successfully!");
    
    // Cache the navigation elements
    const navLinks = document.querySelectorAll('nav ul li a');
    const clickHandler = function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        
        // Only proceed if href starts with # (internal link)
        if (targetId.startsWith('#')) {
            const targetSection = targetId.substring(1);
            const targetElement = document.getElementById(targetSection);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    // Add event listeners in a more efficient way
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', clickHandler);
    }
});
