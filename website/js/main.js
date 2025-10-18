/**
 * Main JavaScript for Acadify School ERP Website
 * Handles interactive features, form validation, and animations
 */

// Back to Top Button
(function() {
  const backToTopButton = document.createElement('button');
  backToTopButton.className = 'back-to-top';
  backToTopButton.innerHTML = '↑';
  backToTopButton.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTopButton);

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
})();

// Form Validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  let isValid = true;
  const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

  inputs.forEach(input => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  });

  // Email validation
  const emailInputs = form.querySelectorAll('input[type="email"]');
  emailInputs.forEach(input => {
    if (input.value && !validateEmail(input.value)) {
      isValid = false;
      input.classList.add('is-invalid');
    }
  });

  // Phone validation
  const phoneInputs = form.querySelectorAll('input[type="tel"]');
  phoneInputs.forEach(input => {
    if (input.value && !validatePhone(input.value)) {
      isValid = false;
      input.classList.add('is-invalid');
    }
  });

  return isValid;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\d\s\-\+\(\)]{10,}$/;
  return re.test(phone);
}

// Contact Form Submission
function handleContactForm(event) {
  event.preventDefault();
  
  if (!validateForm('contactForm')) {
    alert('Please fill all required fields correctly.');
    return false;
  }

  const form = event.target;
  const formData = new FormData(form);
  const submitBtn = form.querySelector('button[type="submit"]');
  
  // Disable button and show loading
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loading"></span> Sending...';

  // Simulate form submission (Replace with actual AJAX call)
  setTimeout(() => {
    alert('Thank you! Your message has been sent successfully. We will contact you soon.');
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Send Message';
  }, 1500);

  return false;
}

// Demo Form Submission
function handleDemoForm(event) {
  event.preventDefault();
  
  if (!validateForm('demoForm')) {
    alert('Please fill all required fields correctly.');
    return false;
  }

  const form = event.target;
  const formData = new FormData(form);
  const submitBtn = form.querySelector('button[type="submit"]');
  
  // Disable button and show loading
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span class="loading"></span> Submitting...';

  // Simulate form submission
  setTimeout(() => {
    alert('Thank you for requesting a demo! Our team will contact you within 24 hours.');
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Request Demo';
  }, 1500);

  return false;
}

// Module Modal Handler
function showModuleDetails(moduleName, description) {
  const modalHtml = `
    <div class="modal fade" id="moduleModal" tabindex="-1" role="dialog">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${moduleName}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>${description}</p>
            <p class="text-muted">This module is included in all our plans. Contact us for more details and customization options.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <a href="demo.html" class="btn btn-primary">Request Demo</a>
          </div>
        </div>
      </div>
    </div>
  `;

  // Remove existing modal
  const existingModal = document.getElementById('moduleModal');
  if (existingModal) {
    existingModal.remove();
  }

  // Add new modal
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Show modal
  const modal = new bootstrap.Modal(document.getElementById('moduleModal'));
  modal.show();
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  document.querySelectorAll('.feature-card, .module-card, .testimonial-card, .pricing-card, .why-card').forEach(el => {
    observer.observe(el);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize scroll animations
  initScrollAnimations();

  // Initialize Bootstrap tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Remove input validation classes on input
  const inputs = document.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      this.classList.remove('is-invalid');
      this.classList.remove('is-valid');
    });
  });
});

// Statistics Counter Animation
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = formatNumber(target);
      clearInterval(timer);
    } else {
      element.textContent = formatNumber(Math.floor(start));
    }
  }, 16);
}

function formatNumber(num) {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(1) + ' Cr+';
  } else if (num >= 100000) {
    return (num / 100000).toFixed(1) + ' Lakh+';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'k+';
  }
  return num + '+';
}

// Initialize counters when stats section is visible
function initCounters() {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = statsSection.querySelectorAll('.stat-number');
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          if (target) {
            animateCounter(counter, target);
          }
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(statsSection);
}

// Initialize counters on page load
document.addEventListener('DOMContentLoaded', initCounters);
