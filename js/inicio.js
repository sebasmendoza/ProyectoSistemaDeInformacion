// Obtener referencias a los elementos del DOM
const btnSignIn = document.getElementById('sign-in');
const btnSignUp = document.getElementById('sign-up');
const formRegister = document.querySelector('.register');
const formLogin = document.querySelector('.login');

// Agregar event listeners a los botones de inicio de sesión y registro
btnSignIn.addEventListener("click", e => {
    formRegister.classList.add('hide');
    formLogin.classList.remove('hide');
});

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add('hide');
    formRegister.classList.remove('hide');
});

// Agregar evento de clic al botón de iniciar sesión para redireccionar a la página Index.html
const btnLogin = document.querySelector('.login form input[type="submit"]');
btnLogin.addEventListener("click", e => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente
    window.location.href = "../index.html"; // Redirigir a Index.html
});
