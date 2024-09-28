// Datos de usuario válidos para login
const loginData = {
    username: 'slakeman',
    password: 'andres'
};

// Validar el login
document.getElementById('loginForm').addEventListener('submit', function(event) {
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

        const fullName = document.getElementById('fullName').value;
        const idNumber = document.getElementById('idNumber').value;
        const nationality = document.getElementById('nationality').value;
        const birthDate = document.getElementById('birthDate').value;
        const address = document.getElementById('address').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        // Validación básica
        if (!fullName || !idNumber || !nationality || !birthDate || !address || !phoneNumber) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Mostrar los datos (aquí puedes enviar los datos a un servidor si lo deseas)
        alert(`Datos registrados correctamente:\n` +
              `Nombre: ${fullName}\n` +
              `CC: ${idNumber}\n` +
              `Nacionalidad: ${nationality}\n` +
              `Fecha de nacimiento: ${birthDate}\n` +
              `Dirección: ${address}\n` +
              `Teléfono: ${phoneNumber}`);
    });
}
