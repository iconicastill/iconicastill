const textos = {
    es: {
      titulo: "Turismo en Ciudad Ficticia",
      navInicio: "Inicio",
      navAtracciones: "Atracciones",
      navHoteles: "Hoteles",
      navContacto: "Contacto",
      inicioTitulo: "Bienvenido a Ciudad Ficticia",
      inicioDescripcion: "Descubre los mejores lugares para visitar y disfrutar.",
      atraccionesTitulo: "Atracciones principales",
      atraccion1: "Parque Central: El corazón verde de la ciudad.",
      atraccion2: "Museo Histórico: Aprende sobre nuestra historia.",
      hotelesTitulo: "Hoteles recomendados",
      hotelesDescripcion: "Hospédate en los mejores hoteles con vistas espectaculares.",
      contactoTitulo: "Contáctanos",
      contactoDescripcion: "Para más información, llámanos o envíanos un correo.",
      modoOscuro: "🌙 Modo Oscuro",
      modoClaro: "☀️ Modo Claro",
      enlacesUtiles: "Enlaces Utiles",
      informacionExtra: "Información extra",
      HorariosDeAtencion: "Horarios de atención: 9:00 AM - 6:00 PM",
      telefono: "Teléfono: +1 809-846-8085",
      desarrollador: "Desarrollador",
      portafolio: "Portafolio"
    },
    en: {
      titulo: "Tourism in Fictitious City",
      navInicio: "Home",
      navAtracciones: "Attractions",
      navHoteles: "Hotels",
      navContacto: "Contact",
      inicioTitulo: "Welcome to Fictitious City",
      inicioDescripcion: "Discover the best places to visit and enjoy.",
      atraccionesTitulo: "Main Attractions",
      atraccion1: "Central Park: The green heart of the city.",
      atraccion2: "History Museum: Learn about our past.",
      hotelesTitulo: "Recommended Hotels",
      hotelesDescripcion: "Stay at the best hotels with spectacular views.",
      contactoTitulo: "Contact Us",
      contactoDescripcion: "For more information, call or email us.",
      modoOscuro: "🌙 Dark Mode",
      modoClaro: "☀️ Light Mode",
      enlacesUtiles: "Useful Links",
      informacionExtra: "Supplementary information",
      HorariosDeAtencion: "Business hours: 9:00 AM - 6:00 PM",
      telefono: "Telephone Number: +1 809-846-8085",
      desarrollador: "Developer",
      portafolio: "Portfolio"
    }
};

let idiomaActual = "es";

function cambiarIdioma(idioma) {
    idiomaActual = idioma;

    document.querySelectorAll("[data-texto]").forEach(el => {
      const key = el.getAttribute("data-texto");
      el.innerText = textos[idioma][key];
    });

    document.getElementById("switchLang").innerText =
      idioma === "es" ? "Cambiar a Inglés" : "Switch to Spanish";

    // ACTUALIZA TEXTO DEL BOTÓN MODO OSCURO
    const btnModoOscuro = document.getElementById('modoOscuro');
    const esOscuro = document.body.classList.contains('dark-mode');

    btnModoOscuro.textContent = esOscuro
      ? textos[idiomaActual].modoClaro
      : textos[idiomaActual].modoOscuro;
}

document.getElementById("switchLang").addEventListener("click", () => {
  cambiarIdioma(idiomaActual === "es" ? "en" : "es");
});

cambiarIdioma(idiomaActual);

/* MODO OSCURO */

const btnModoOscuro = document.getElementById('modoOscuro');

btnModoOscuro.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const esOscuro = document.body.classList.contains('dark-mode');

  btnModoOscuro.textContent = esOscuro
    ? textos[idiomaActual].modoClaro
    : textos[idiomaActual].modoOscuro;
});
