document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = this.getAttribute('href').substring(1);
        document.getElementById(targetSection)?.scrollIntoView({ behavior: 'smooth' });
    });


document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");
    });
});

