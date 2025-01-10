function openMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '0';  
}

function closeMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '-100%';  
}

/* here comes the $$$ */
window.addEventListener('load', () => {
  const audio = document.getElementById('background-audio');
  audio.volume = 0.5;  // Set volume to 50%
  audio.play();        // Play the audio when the page loads
});
