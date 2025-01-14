
//open close sidebar2
function openMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '0';  
}
function closeMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '-100%';  
}

//mobile scroll -> topbar
let lastScroll = 0;
const topbar = document.getElementById('topbar');
const threshold = 10; 

document.addEventListener('DOMContentLoaded', () => {
  if (window.scrollY <= threshold) {
    topbar.classList.remove('hidden'); 
  }
});
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > lastScroll && currentScroll > threshold) {
    topbar.classList.add('hidden'); // Hide when scrolling down
  } else if (currentScroll < lastScroll || currentScroll <= threshold) {
    topbar.classList.remove('hidden'); // Show when scrolling up or near the top
  }
  lastScroll = currentScroll;
});


//popup hwanglander
function showPopup(event) {
  event.preventDefault();
  const audio = document.getElementById('popupAudio');
  audio.play();
  document.querySelector('.popup-image').style.display = 'block'; 
  document.querySelector('.overlay').style.display = 'block'; 
  
  // Hide popup when audio ends
  audio.addEventListener('ended', hidePopup, { once: true });
}

function hidePopup() {
  const audio = document.getElementById('popupAudio');
  audio.pause();        
  audio.currentTime = 0; 
  document.querySelector('.popup-image').style.display = 'none';
  document.querySelector('.overlay').style.display = 'none'; 
}

//popup hwanglander mobile
function showPopup2(event) {
  event.preventDefault();
  const audio = document.getElementById('popupAudio2');
  audio.play();
  document.querySelector('.popup-image2').style.display = 'block'; 
  document.querySelector('.overlay2').style.display = 'block'; 
  
  // Hide popup when audio ends
  audio.addEventListener('ended', hidePopup2, { once: true });
}

function hidePopup2() {
  const audio = document.getElementById('popupAudio2');
  audio.pause();        
  audio.currentTime = 0; 
  document.querySelector('.popup-image2').style.display = 'none'; 
  document.querySelector('.overlay2').style.display = 'none';
}


