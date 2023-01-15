// Récupère tous les liens de navigation
var navLinks = document.querySelectorAll("#side_nav ul li");
var currentActive = document.querySelector("#side_nav ul li.active");

// Récupère tous les éléments de section
var sections = document.querySelectorAll("section");

// Ajoute un écouteur d'événement pour le défilement de la page
window.addEventListener("scroll", function() {
  // Récupère la distance verticale de l'élément le plus haut visible dans la fenêtre de l'utilisateur
  var scrollPos = window.scrollY;

  // Boucle sur tous les éléments de section pour vérifier leur position par rapport à la fenêtre de l'utilisateur
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var navLink = navLinks[i];
    var sectionPos = section.offsetTop;

    // Si la position de l'élément de section est inférieure ou égale à la position de défilement, c'est l'élément actif
    if (sectionPos <= scrollPos) {
        if(currentActive){
            currentActive.classList.remove("active");
        }
        currentActive = navLink;
        navLink.classList.add("active");
    }
  }
});