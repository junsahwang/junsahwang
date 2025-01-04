
function openMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '0';  
}

function closeMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '-100%';  
}

/* CHA-CHING */
const hoverLink = document.querySelector('.hover-link');
const audio = document.getElementById('hover-audio');

hoverLink.addEventListener('mouseenter', () => {
    audio.play(); 
});

hoverLink.addEventListener('mouseleave', () => {
    audio.pause();
    audio.currentTime = 0;
});

// Mobile touch
hoverLink.addEventListener('touchstart', () => {
  audio.currentTime = 0;  // Start from the beginning
  audio.play();
  hoverLink.classList.add('active'); // Optional: Add active class for touch effect
});

hoverLink.addEventListener('touchend', () => {
  audio.pause();
  audio.currentTime = 0;  // Reset to the beginning
  hoverLink.classList.remove('active'); // Remove active class when touch ends
});
