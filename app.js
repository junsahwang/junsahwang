//open close sidebar2
function openMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '0';  
}
function closeMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '-100%';  
}

//here comes the $$$
window.addEventListener('load', () => {
  const audio = document.getElementById('background-audio');
  audio.volume = 0.5;  
  audio.play();        
});

//popup hwanglander
function showPopup(event) {
  event.preventDefault();
  document.querySelector('.popup-image').style.display = 'block'; // Show the popup
  document.querySelector('.overlay').style.display = 'block'; // Show the overlay

  setTimeout(hidePopup, 750);
}
function hidePopup() {
  document.querySelector('.popup-image').style.display = 'none'; // Hide the popup
  document.querySelector('.overlay').style.display = 'none'; // Hide the overlay
}

function showPopup2(event) {
  event.preventDefault();
  document.querySelector('.popup-image2').style.display = 'block'; // Show the popup
  document.querySelector('.overlay2').style.display = 'block'; // Show the overlay

  setTimeout(hidePopup2, 750);
}
function hidePopup2() {
  document.querySelector('.popup-image2').style.display = 'none'; // Hide the popup
  document.querySelector('.overlay2').style.display = 'none'; // Hide the overlay
}


