//scroll load
document.addEventListener("DOMContentLoaded", () => {

  // Scroll animations for content
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".stage, .banner").forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // Sidebar fade-in
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("loaded");
});



//name type
setTimeout(() => {
  document.getElementById("typewriter").classList.add("done");
}, 3000);

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


