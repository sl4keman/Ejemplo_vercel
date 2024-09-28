// Datos de usuario válidos para login
const loginData = {
    username: 'admin',
    password: '1234'
};

// Validar el login en index.html
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío por defecto

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    // Comprobar si los datos coinciden
    if (enteredUsername === loginData.username && enteredPassword === loginData.password) {
        // Si el login es correcto, redirigir al formulario de registro
        window.location.href = 'register.html';
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

// Validar y manejar el formulario de datos personales en register.html
if (document.getElementById('personalDataForm')) {
    document.getElementById('personalDataForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto

        // Redirigir a la página de éxito
        window.location.href = 'ok.html';
    });
}
