/* SIDENAV *//* SIDENAV *//* SIDENAV *//* SIDENAV *//* SIDENAV *//* SIDENAV *//* SIDENAV */
function openMediasidebar() {
  var mediasidebar = document.getElementById("mediasidebar");
  mediasidebar.style.left = "0%";
}

function closeMediaSidebar() {
  var mediasidebar = document.getElementById("mediasidebar");
  mediasidebar.style.left = "-100%"; 
}
/* SIDENAV *//* SIDENAV *//* SIDENAV *//* SIDENAV *//* SIDENAV *//* SIDENAV *//* SIDENAV */

/* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP */
function openPopup(id) {
  const popup = document.getElementById(`popup-${id}`);
  const overlay = document.getElementById('overlay');

  popup.classList.add('active');
  overlay.style.display = 'block';

  setTimeout(() => {
    overlay.classList.add('active');
  }, 50); 
}

function closePopup(id) {
  const popup = document.getElementById(`popup-${id}`);
  const overlay = document.getElementById('overlay');

  popup.classList.remove('active');
  overlay.classList.remove('active');

  setTimeout(() => {
    overlay.style.display = 'none';
  }, 300); 
}

function closeAllPopups() {
  const popups = document.querySelectorAll('.popup');
  const overlay = document.getElementById('overlay');

  popups.forEach(popup => {
    popup.classList.remove('active');
  });

  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.classList.remove('active');
  }, 300);
}
/* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP */

/* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH */
/* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH */