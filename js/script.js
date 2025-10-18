// Acadify Solution - JavaScript

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-sm');
  } else {
    navbar.classList.remove('shadow-sm');
  }
});

// Testimonial Carousel (if using custom carousel)
class TestimonialSlider {
  constructor(container) {
    this.container = document.querySelector(container);
    if (!this.container) return;
    
    this.slides = this.container.querySelectorAll('.testimonial-card');
    this.currentSlide = 0;
    this.slideCount = this.slides.length;
    
    this.init();
  }
  
  init() {
    this.showSlide(this.currentSlide);
    setInterval(() => this.nextSlide(), 5000);
  }
  
  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slideCount;
    this.showSlide(this.currentSlide);
  }
  
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slideCount) % this.slideCount;
    this.showSlide(this.currentSlide);
  }
}

// Initialize testimonial slider on pages that have it
document.addEventListener('DOMContentLoaded', function() {
  // Initialize testimonial slider if it exists
  if (document.querySelector('.testimonial-slider')) {
    new TestimonialSlider('.testimonial-slider');
  }
  
  // Pricing toggle (Monthly/Annually)
  const pricingToggle = document.getElementById('pricingToggle');
  if (pricingToggle) {
    pricingToggle.addEventListener('change', function() {
      const prices = document.querySelectorAll('.price-amount');
      const isAnnual = this.checked;
      
      prices.forEach(price => {
        const monthly = price.getAttribute('data-monthly');
        const annual = price.getAttribute('data-annual');
        
        if (monthly && annual) {
          price.textContent = isAnnual ? annual : monthly;
        }
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '#!') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Form validation feedback
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', function(event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });
  
  // FAQ category filter
  const faqCategories = document.querySelectorAll('.faq-category-btn');
  faqCategories.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      
      // Update active button
      faqCategories.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Filter FAQ items
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  
  // Animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements for animation
  document.querySelectorAll('.feature-card, .module-card, .pricing-card, .blog-card').forEach(el => {
    observer.observe(el);
  });
});

// Module search/filter functionality
function filterModules(searchTerm) {
  const moduleCards = document.querySelectorAll('.module-card');
  const search = searchTerm.toLowerCase();
  
  moduleCards.forEach(card => {
    const title = card.querySelector('h4').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    
    if (title.includes(search) || description.includes(search)) {
      card.parentElement.style.display = 'block';
    } else {
      card.parentElement.style.display = 'none';
    }
  });
}

// Add search listener if search input exists
const moduleSearch = document.getElementById('moduleSearch');
if (moduleSearch) {
  moduleSearch.addEventListener('input', function() {
    filterModules(this.value);
  });
}

// Initialize Bootstrap tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// Initialize Bootstrap popovers
const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
