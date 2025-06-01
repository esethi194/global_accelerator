document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    let isOpen = false;

    menuToggle.addEventListener('click', function() {
        isOpen = !isOpen;
        
        const spans = menuToggle.querySelectorAll('span');
        if (isOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // CTA button click
    const ctaButton = document.getElementById('ctaButton');
    ctaButton.addEventListener('click', function() {
        window.open('https://www.charitywater.org/', '_blank');
    });
});