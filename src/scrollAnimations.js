// Function to initialize scroll animations
export function initScrollAnimations() {
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When the element is in view
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate');
        
        // Stop observing the element after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Options for the observer
    threshold: 0.2, // Trigger when 20% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element comes into view
  });

  // Select all elements with the animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  // Start observing each element
  animatedElements.forEach(element => {
    observer.observe(element);
  });
} 