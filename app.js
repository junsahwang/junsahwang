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

  // Sidebar fade-in
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.add("loaded");

  // Scroll-triggered animation for grid items
  const gridObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once the item is in view
      }
    });
  }, {
    threshold: 0.1 // Trigger the animation when 10% of the item is in view
  });

  document.querySelectorAll('.main .grid-item').forEach(item => {
    gridObserver.observe(item);
  });

  // Scroll-triggered animation for joke form
  const jokeFormObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  const jokeForm = document.querySelector('.jokeform');
  if (jokeForm) {
    jokeFormObserver.observe(jokeForm);
  }

  // Name typing effect
  setTimeout(() => {
    document.getElementById("typewriter").classList.add("done");
  }, 3000);

  // Scroll-triggered underline animation for special class
  const specialObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, {
    threshold: 0.1 // Trigger the animation when 10% of the item is in view
  });

  document.querySelectorAll('.special').forEach(item => {
    specialObserver.observe(item);
  });

});

// Sidebar toggle functions
function openMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '0';  
}

function closeMediasidebar() {
  const mediaSidebar = document.getElementById('mediasidebar');
  mediaSidebar.style.left = '-100%';  
}

// Mobile scroll -> topbar
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

// Popup functions
function showPopup(event) {
  event.preventDefault();
  const audio = document.getElementById('popupAudio');
  audio.play();
  document.querySelector('.popup-image').style.display = 'block'; 
  document.querySelector('.overlay').style.display = 'block'; 
  
  audio.addEventListener('ended', hidePopup, { once: true });
}

function hidePopup() {
  const audio = document.getElementById('popupAudio');
  audio.pause();        
  audio.currentTime = 0; 
  document.querySelector('.popup-image').style.display = 'none';
  document.querySelector('.overlay').style.display = 'none';
}

// Mobile popup functions
function showPopup2(event) {
  event.preventDefault();
  const audio = document.getElementById('popupAudio2');
  audio.play();
  document.querySelector('.popup-image2').style.display = 'block'; 
  document.querySelector('.overlay2').style.display = 'block'; 
  
  audio.addEventListener('ended', hidePopup2, { once: true });
}

function hidePopup2() {
  const audio = document.getElementById('popupAudio2');
  audio.pause();        
  audio.currentTime = 0; 
  document.querySelector('.popup-image2').style.display = 'none'; 
  document.querySelector('.overlay2').style.display = 'none';
}
document.addEventListener("DOMContentLoaded", () => {

  // Scroll-triggered animation for special class (underline animation)
  const specialObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
       
        entry.target.classList.add('animated');
        
        // Get the width of the element and calculate animation duration based on that
        const elementWidth = entry.target.offsetWidth;
        const duration = Math.max(0.5, elementWidth / 200); // 0.5s minimum duration, longer width = longer animation time

        // Set the animation duration dynamically for the underline
        entry.target.style.setProperty('--underline-duration', `${duration}s`);

        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, {
    threshold: 0.1 // Trigger the animation when 10% of the item is in view
  });

  // Observe all .special elements for scroll-based animation
  document.querySelectorAll('.special').forEach(item => {
    item.classList.remove('animated'); // Ensure it's not animated initially
    specialObserver.observe(item);
  });

  // Scroll-triggered animation for special2 class (highlighter effect)
  const special2Observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'highlighted' class to trigger the highlighter animation
        entry.target.classList.add('animated');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, {
    threshold: 0.1 // Trigger the animation when 10% of the item is in view
  });

  // Observe all .special2 elements for scroll-based highlighter animation
  document.querySelectorAll('.special2').forEach(item => {
    item.classList.remove('animated'); // Ensure it's not animated initially
    special2Observer.observe(item);
  });

});