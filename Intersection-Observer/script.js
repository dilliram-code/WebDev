'use strict'

// 1. Select all sections to observe
const sections = document.querySelectorAll('.section');

// 2. Define the callback function for the observer
const revealSection = function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return; // Skip if the section is not visible
    entry.target.classList.add('visible'); // Add class to make it visible
    observer.unobserve(entry.target); // Stop observing once it's revealed
  });
};

// 3. Create the observer with options
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null, // Default: observe in the viewport
  threshold: 0.15, // Trigger when 15% of the section is visible
});

// 4. Attach the observer to each section
sections.forEach(section => {
  sectionObserver.observe(section);
});
