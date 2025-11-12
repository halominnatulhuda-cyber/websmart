document.addEventListener('DOMContentLoaded', () => {

  // --- Smooth Scrolling for Navigation and Hero Button ---
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  // Attach listeners to quick access buttons
  document.querySelectorAll('#quick-access button').forEach(button => {
    button.addEventListener('click', () => {
      handleScroll(button.getAttribute('data-target-id'));
    });
  });

  // Attach listener to hero button
  const heroButton = document.getElementById('hero-cta-button');
  if(heroButton) {
      heroButton.addEventListener('click', () => {
          handleScroll('quick-access');
      });
  }

  // --- Image Modal (Lightbox) Logic ---
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const closeModalBtn = document.querySelector(".close-modal-btn");

  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  });

  const closeModal = () => {
    modal.style.display = "none";
  }

  // Close modal when 'x' is clicked
  if (closeModalBtn) {
    closeModalBtn.onclick = closeModal;
  }
  
  // Close modal when clicking on the background
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }

  // --- Scroll-triggered Animations ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Optional: Stop observing after it's visible
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  document.querySelectorAll('.scroll-animate').forEach(section => {
    observer.observe(section);
  });

  // --- Dynamically update copyright year in the footer ---
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});