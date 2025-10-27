// Contador de textarea

  const textarea = document.getElementById("mensaje");
  const usados = document.getElementById("usados");

  textarea.addEventListener("input", () => {
    usados.textContent = textarea.value.length;
  });
