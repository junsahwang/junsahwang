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

  popup.style.display = 'block';
  overlay.style.display = 'block';
}

function closePopup(id) {
  const popup = document.getElementById(`popup-${id}`);
  const overlay = document.getElementById('overlay');

  popup.style.display = 'none';
  overlay.style.display = 'none';
}

function closeAllPopups() {
  const popups = document.querySelectorAll('.popup');

  popups.forEach(popup => {
    popup.style.display = 'none';
  });

  overlay.style.display = 'none';
}
/* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP *//* COOLPOPUP */

/* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH */
/* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH *//* LEGOSWITCH */