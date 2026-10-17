/**
 * Tab Navigation Handler
 * Switches active section inside the same page without reloading
 */
function openTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove active styling from all nav buttons
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });

    // Activate target tab
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // Highlight active nav link
    const activeNavBtn = Array.from(navLinks).find(link => link.getAttribute('onclick').includes(tabId));
    if (activeNavBtn) {
        activeNavBtn.classList.add('active-link');
    }

    // Close mobile dropdown menu
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.add('hidden');
    }

    // Scroll to top of page smooth
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mobile Menu Toggle Event
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
// Create Floating Golden Hearts and Stars
document.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement('div');
    container.className = 'sparkles-container';
    document.body.appendChild(container);

    const count = 30; // මං තාරකා සහ හදවත් ප්‍රමාණය

    for (let i = 0; i < count; i++) {
        const isHeart = i % 2 === 0;
        const element = document.createElement('div');
        element.className = isHeart ? 'floating-heart' : 'sparkle';
        
        // යාහඹු පිහිටුම් සහ වේගයන් ලබා දීම
        element.style.left = Math.random() * 100 + 'vw';
        element.style.animationDuration = (Math.random() * 4 + 3) + 's'; // තත්පර 3ත් 7ත් අතර වේගය
        element.style.animationDelay = (Math.random() * 5) + 's';
        
        container.appendChild(element);
    }
});
});