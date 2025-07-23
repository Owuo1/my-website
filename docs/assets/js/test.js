document.addEventListener('DOMContentLoaded', () => {
    // Cache DOM elements and state
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;
    let currentIndex = 0;
    let animationFrameId = null;
    let lastUpdateTime = 0;
    const intervalDuration = 3000; // 3 seconds

    // Pre-cache active class operations
    const classListOperations = {
        remove: 'remove',
        add: 'add'
    };

    function updateTestimonial(now) {
        // Throttle updates to prevent jank
        if (now - lastUpdateTime < intervalDuration) {
            animationFrameId = requestAnimationFrame(updateTestimonial);
            return;
        }
        
        lastUpdateTime = now;
        
        // Batch DOM operations
        const previousIndex = currentIndex;
        currentIndex = (currentIndex + 1) % totalTestimonials;
        
        // Use classList methods directly for better performance
        testimonials[previousIndex].classList.remove('active');
        testimonials[currentIndex].classList.add('active');
        
        animationFrameId = requestAnimationFrame(updateTestimonial);
    }

    // Initialize
    if (totalTestimonials > 0) {
        testimonials[0].classList.add('active');
        animationFrameId = requestAnimationFrame(updateTestimonial);
    }

    // Clean up when needed (e.g., if carousel becomes invisible)
    return () => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
    };
});
