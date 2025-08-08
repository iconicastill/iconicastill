// Variable global para almacenar el token
let csrfToken = null;

// Obtener el token CSRF
fetch('https://app.iconicastill.com/get-csrf-token/', {
    credentials: 'include'
})
.then(response => {
    // Si la respuesta es exitosa, guardar el token
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('No se pudo obtener el token CSRF.');
    }
})
.then(data => {
    // Almacenar el token en la variable global
    csrfToken = data.csrf_token;
    console.log('Token CSRF obtenido:', csrfToken);

    // Habilitar el formulario ahora que se tiene el token
    const form = document.querySelector('#contact-form');
    if (form) {
        form.style.pointerEvents = 'auto'; // Re-habilita el formulario si estaba deshabilitado
    }
})
.catch(error => {
    console.error('Error al obtener el token CSRF:', error);
    alert('No se pudo obtener el token CSRF. Por favor, recarga la página.');
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Usar la variable global con el token obtenido
        if (!csrfToken) {
            alert('El token CSRF no está disponible. Intenta recargar la página.');
            return;
        }

        const formData = {
            nombre: form.nombre.value,
            email: form.email.value,
            telefono: form.telefono.value,
            mensaje: form.mensaje.value
        };

        fetch('https://app.iconicastill.com/contacto/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                // Usar el token de la variable global
                'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert('Mensaje enviado con éxito');
                form.reset();
            } else {
                alert('Error al enviar el mensaje');
            }
        })
        .catch(error => {
            console.error('Error en el envío:', error);
            alert('Hubo un problema al enviar el mensaje');
        });
    });
});

