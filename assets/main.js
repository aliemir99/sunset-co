// Scroll reveal animations
function initScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        // Stop observing after animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all reveal elements
  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

// Active navigation highlighting
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navlinks a[href^="#"]');

  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-80px 0px -80px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initActiveNav();
});