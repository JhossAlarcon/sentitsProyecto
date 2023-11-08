
// Formulario de clientes

var formulario = document.getElementById('formularioClientes');
var listaClientes = document.getElementById('listaClientes');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var texto= document.getElementById('texto').value;

    var cliente = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        texto:texto
    };

    console.log("Nombre:",cliente.nombre);
    console.log("Apellido:", cliente.apellido);
    console.log("Email:",cliente.email);
    console.log("Teléfono:",cliente.telefono);
    console.log("Texto:",cliente.texto);


   alert(cliente.nombre + " Gracias por contactarnos, en breves te contactaremos!")
    
    /*'<p> Nombre: ' + cliente.nombre + ' , Apellido: ' + cliente.apellido +
     ', Email: ' + cliente.email + ', Teléfono: ' + cliente.telefono + ' , Texto: '+ cliente.texto + '</p>';
*/
    formulario.reset();
    
    });