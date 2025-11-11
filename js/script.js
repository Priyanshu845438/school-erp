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
  // Initialize shared footer
  initFooter();
  
  // Initialize testimonial slider if it exists
  if (document.querySelector('.testimonial-slider')) {
    new TestimonialSlider('.testimonial-slider');
  }
  
  // Module Category Filter
  const categoryButtons = document.querySelectorAll('.module-category-tabs button');
  if (categoryButtons.length > 0) {
    categoryButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent Bootstrap tab behavior
        
        // Get category from button id (e.g., 'all-tab' -> 'all')
        const category = this.id.replace('-tab', '');
        
        // Update active state
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Filter modules
        filterModulesByCategory(category);
      });
    });
    
    // Set initial state to 'all'
    filterModulesByCategory('all');
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

// Module category filter functionality
function filterModulesByCategory(category) {
  const moduleCards = document.querySelectorAll('.module-card-advanced');
  
  moduleCards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    const columnElement = card.closest('.col-lg-4, .col-md-6');
    
    if (category === 'all' || cardCategory === category) {
      if (columnElement) {
        columnElement.style.display = 'block';
      }
    } else {
      if (columnElement) {
        columnElement.style.display = 'none';
      }
    }
  });
  
  // Show/hide section headers based on filtered results
  const sectionHeaders = document.querySelectorAll('#modules-grid .col-12 h4');
  sectionHeaders.forEach(header => {
    const headerRow = header.closest('.col-12');
    if (headerRow) {
      if (category === 'all') {
        headerRow.style.display = 'block';
      } else {
        headerRow.style.display = 'none';
      }
    }
  });
}

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

// Shared Footer Template
function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <img src="https://acadifysolution.com/assets/img/logo.png" alt="Acadify Solution" height="30" class="mb-3">
          <p class="mt-3">Empowering Educational Excellence Through Technology. Your trusted partner in modern school management.</p>
          <div class="social-icons mt-3">
            <a href="#" data-testid="link-social-facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" data-testid="link-social-twitter"><i class="bi bi-twitter"></i></a>
            <a href="#" data-testid="link-social-linkedin"><i class="bi bi-linkedin"></i></a>
            <a href="#" data-testid="link-social-instagram"><i class="bi bi-instagram"></i></a>
          </div>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5>Product</h5>
          <ul>
            <li><a href="/pages/modules.html" data-testid="link-footer-modules">All Modules</a></li>
            <li><a href="/pages/pricing.html" data-testid="link-footer-pricing">Pricing</a></li>
            <li><a href="https://calendly.com/acadify-online/30min" target="_blank" data-testid="link-footer-demo">Request Demo</a></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5>Company</h5>
          <ul>
            <li><a href="/pages/contact.html" data-testid="link-footer-contact">Contact</a></li>
            <li><a href="/pages/case-studies.html" data-testid="link-footer-case-studies">Case Studies</a></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h5>Support</h5>
          <ul>
            <li><a href="/pages/faq.html" data-testid="link-footer-faq">FAQ</a></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6">
          <h5>Legal</h5>
          <ul>
            <li><a href="/pages/privacy.html" data-testid="link-footer-privacy">Privacy Policy</a></li>
            <li><a href="/pages/terms.html" data-testid="link-footer-terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 Acadify Solution. All rights reserved. | Empowering Educational Excellence Through Technology</p>
      </div>
    </div>
  </footer>
  `;
}

// Initialize shared footer
function initFooter() {
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = getFooterHTML();
  }
}
