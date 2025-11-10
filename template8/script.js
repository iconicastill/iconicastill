// Contador + crecimiento automático del textarea

const textarea = document.getElementById("mensaje");
const usados = document.getElementById("usados");

textarea.addEventListener("input", () => {
  // Actualizar contador
  usados.textContent = textarea.value.length;

  // Ajustar altura automáticamente
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
});
