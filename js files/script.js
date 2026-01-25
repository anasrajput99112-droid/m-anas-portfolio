// ============================================
// HAMBURGER MENU FUNCTIONALITY
// ============================================

// Get references to DOM elements
const menuBar = document.getElementById('menu-bar');           // Hamburger icon button
const navLinkMobile = document.querySelector('.nav-link-mobile'); // Mobile navigation menu
const body = document.body;                                    // Body element for scroll control

// Create overlay element (dark background when menu is open)
const overlay = document.createElement('div');
overlay.className = 'menu-overlay';
document.body.appendChild(overlay);

// ============================================
// FUNCTION: Toggle Menu Open/Close
// ============================================
function toggleMenu() {
    // Toggle 'active' class on mobile menu (slides in/out)
    navLinkMobile.classList.toggle('active');
    
    // Toggle 'active' class on hamburger icon (transforms to X)
    menuBar.classList.toggle('active');
    
    // Toggle 'active' class on overlay (show/hide dark background)
    overlay.classList.toggle('active');
    
    // Prevent body scrolling when menu is open
    if (navLinkMobile.classList.contains('active')) {
        body.style.overflow = 'hidden';  // Lock scroll
    } else {
        body.style.overflow = '';         // Allow scroll
    }
}

// ============================================
// EVENT LISTENER: Hamburger Icon Click
// ============================================
// When user clicks the hamburger icon, toggle the menu
menuBar.addEventListener('click', toggleMenu);

// ============================================
// EVENT LISTENER: Overlay Click (Close Menu)
// ============================================
// When user clicks the dark overlay, close the menu
overlay.addEventListener('click', () => {
    // Remove all active states
    navLinkMobile.classList.remove('active');
    menuBar.classList.remove('active');
    overlay.classList.remove('active');
    
    // Re-enable body scrolling
    body.style.overflow = '';
});

// ============================================
// EVENT LISTENER: Menu Link Click (Close Menu)
// ============================================
// When user clicks any link in the mobile menu, close the menu
document.querySelectorAll('.nav-link-mobile a').forEach(link => {
    link.addEventListener('click', () => {
        // Remove all active states
        navLinkMobile.classList.remove('active');
        menuBar.classList.remove('active');
        overlay.classList.remove('active');
        
        // Re-enable body scrolling
        body.style.overflow = '';
    });
});