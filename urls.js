// URL base 
const urlInstagram = "https://www.instagram.com/iconicastill/";

// TODOS los elementos con la clase "enlace-instagram"
const enlaces = document.querySelectorAll(".enlace-instagram");

// Recorremos cada enlace encontrado
enlaces.forEach(function(enlace) {
  // A cada enlace le asignamos la URL y el target
  enlace.href = urlInstagram;
  enlace.target = "_blank";
});
