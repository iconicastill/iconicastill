const $form = document.querySelector('#form');

$form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
    };

    try {
        const response = await fetch("http://127.0.0.1:8000/api/recibir-mensaje/", { // cambia si usas dominio
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Mensaje enviado con éxito.");
            $form.reset();
        } else {
            alert("Hubo un error al enviar el mensaje.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error de conexión.");
    }
});
