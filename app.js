//open close sidebar2
function openMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '0';  
}
function closeMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '-100%';  
}

//popup hwanglander
function showPopup(event) {
  event.preventDefault();
    const audio = document.getElementById('popupAudio');
    audio.play();
    document.querySelector('.popup-image').style.display = 'block'; // Show the popup
    document.querySelector('.overlay').style.display = 'block'; // Show the overlay
  setTimeout(hidePopup, 5000);
}
function hidePopup() {
  const audio = document.getElementById('popupAudio');
  audio.pause();        
  audio.currentTime = 0; 
  document.querySelector('.popup-image').style.display = 'none'; // Hide the popup
  document.querySelector('.overlay').style.display = 'none'; // Hide the overlay
}

//popup hwanglander mobile
function showPopup2(event) {
  event.preventDefault();
    const audio = document.getElementById('popupAudio2');
    audio.play();
    document.querySelector('.popup-image2').style.display = 'block'; // Show the popup
    document.querySelector('.overlay2').style.display = 'block'; // Show the overlay
  setTimeout(hidePopup2, 5000);
}
function hidePopup2() {
  const audio = document.getElementById('popupAudio2s');
  audio.pause();        
  audio.currentTime = 0; 
  document.querySelector('.popup-image2').style.display = 'none'; // Hide the popup
  document.querySelector('.overlay2').style.display = 'none'; // Hide the overlay
}


