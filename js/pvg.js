document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 5px #02c39a';
        });
        input.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
        });
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let valid = true;
        // Implementa validaciones específicas aquí
        if (!valid) {
            event.preventDefault(); // Prevenir el envío del formulario
            alert('Por favor, revisa los campos.');
        }
    });
});
