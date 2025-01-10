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
let lastScrollY = window.scrollY;
const topbar = document.getElementById('topbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY) {
    // Scrolling up
    topbar.classList.add('visible');
  } else {
    // Scrolling down
    topbar.classList.remove('visible');
  }

  lastScrollY = currentScrollY; // Update the last scroll position
});


//popup hwanglander
function showPopup(event) {
  event.preventDefault();
    const audio = document.getElementById('popupAudio');
    audio.play();
    document.querySelector('.popup-image').style.display = 'block'; 
    document.querySelector('.overlay').style.display = 'block'; 
  setTimeout(hidePopup2, 65000);
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
  setTimeout(hidePopup2, 65000);
}
function hidePopup2() {
  const audio = document.getElementById('popupAudio2');
  audio.pause();        
  audio.currentTime = 0; 
  document.querySelector('.popup-image2').style.display = 'none'; 
  document.querySelector('.overlay2').style.display = 'none';
}


