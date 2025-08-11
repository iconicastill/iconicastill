/* const urlInstagram = "https://www.instagram.com/iconicastill/";
const enlace = document.getElementById("enlace-a-instagram");
enlace.href = urlInstagram;
enlace.target = "_blank"; */

// La URL base que quieres asignar a todos los enlaces
const urlInstagram = "https://www.instagram.com/iconicastill/";

// Seleccionamos TODOS los elementos con la clase "enlace-instagram"
const enlaces = document.querySelectorAll(".enlace-instagram");

// Recorremos cada enlace encontrado
enlaces.forEach(function(enlace) {
  // A cada enlace le asignamos la URL y el target
  enlace.href = urlInstagram;
  enlace.target = "_blank";
});
