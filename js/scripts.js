
// Eventos de inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


//change solo se aplica cuando te sales del input (so, ain´t good for real-time validation)
//input si es bueno pa real-time validation
nombre.addEventListener('change', leerTexto);
email.addEventListener('change', leerTexto);
mensaje.addEventListener('change', leerTexto);

function leerTexto(e){// como el evento se asocia a la funcion se puede pasar aqui, mas no en el addEventListener, a menos que escriba la funcion en el addEventListener
    
    //target es el tag seleccionado y el value es el valor que va teniendo cada que escribimos, o el default que le pones en el HTML al input
    //console.log(e.target.value);


    // para que funcione, tus propiedades de objeto deben ser iguales a los id en los que se trabaja
    datos[e.target.id] = e.target.value;
    //console.log(datos);

}





// Evento Submit (Es Mejor para formularios que el Click)
// El submit está asociado al formulario, con su input submit y el click pudiera ser cualquier cosa
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    //Validar formulario

    const {nombre, email, mensaje} = datos;


    if(nombre === '' || email === '' || mensaje === '' ){ 
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // corta la ejecucion del codigo
    } 

    // Alerta de enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente!');

});

//Mostrar Alerta en Pantalla (Error o correcto) de formulario

function mostrarAlerta(mensaje, error= null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild( alerta );

    setTimeout(() => {
        alerta.remove();// el remove es para un elemento HTML
    }, 3500);
}