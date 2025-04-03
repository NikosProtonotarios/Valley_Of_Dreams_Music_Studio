// Create the Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // When the element is visible in the viewport
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('fade-in-up');
      // Stop observing the element after animation
      observer.unobserve(entry.target);
    }
  });
}, {
  // Options
  threshold: 0.1, // Trigger when 10% of the element is visible
  rootMargin: '0px'
});

// Function to initialize animations
export function initScrollAnimations() {
  // Select all elements with the animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Observe each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
} 