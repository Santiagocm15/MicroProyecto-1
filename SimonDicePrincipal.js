const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(event) {
    const nombreInput = document.getElementById('nombre');

    if (nombreInput.value.trim() === '') {
        alert('No puedes iniciar sin ingresar un nombre');
        event.preventDefault(); // Evita que se envíe el formulario
    }
});
