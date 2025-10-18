/**
 * Component Loader - Loads reusable HTML components
 * This script dynamically loads navbar and footer on all pages
 */

// Load component from file
async function loadComponent(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const html = await response.text();
    const element = document.getElementById(id);
    if (element) {
      element.innerHTML = html;
    }
  } catch (error) {
    console.error('Error loading component:', error);
  }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Load navbar and footer
  loadComponent('navbar-container', 'components/navbar.html');
  loadComponent('footer-container', 'components/footer.html');
  
  // Set active navigation link
  setActiveNavLink();
  
  // Initialize smooth scrolling
  initSmoothScrolling();
});

// Set active navigation link based on current page
function setActiveNavLink() {
  setTimeout(() => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }, 100);
}

// Initialize smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
