// Sélectionne l'élément du carrousel
var carousel = document.querySelector(".carousel");

// Récupère les boutons "suivant" et "précédent"
var nextBtn = carousel.querySelector(".carousel-control-next");
var prevBtn = carousel.querySelector(".carousel-control-prev");

// Ajoute des écouteurs d'événement pour les boutons "suivant" et "précédent"
nextBtn.addEventListener("click", function() {
  carousel.classList.remove("slide-prev");
  carousel.classList.add("slide-next");
});
prevBtn.addEventListener("click", function() {
  carousel.classList.remove("slide-next");
  carousel.classList.add("slide-prev");
});
