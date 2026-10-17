/*Precios y carrito*/
let cartera = 10;
let botas = 20;
let campera = 15;
let sumacarrito = 0;

/*Mis funciones*/

const agregarAlCarrito = (precioProducto, totalActual) => {
    return totalActual + precioProducto;
};

const vaciarCarrito = () => 0;

const mostrarMensaje = (texto) => {
    console.log(texto);
    alert(texto);
};


/*simulador*/
let nombre = prompt("Ingrese su nombre:");

if (nombre) {
    mostrarMensaje("¡Hola " + nombre + "! Bienvenido a la tienda.");

    let continuar = true;

    while (continuar) {
        
        let opcion = Number(prompt(
            `Elige el numero correspondiente al producto que desea agregar:\n` +
            `1. Cartera ($${cartera})\n` +
            `2. Botas ($${botas})\n` +
            `3. Campera ($${campera})\n` +
            `4. Vaciar carrito`
        ));

        switch (opcion) {
            case 1:
                sumacarrito = agregarAlCarrito(cartera, sumacarrito);
                mostrarMensaje("Agregaste Cartera. Total actual: $" + sumacarrito);
                break;
            case 2:
                sumacarrito = agregarAlCarrito(botas, sumacarrito);
                mostrarMensaje("Agregaste Botas. Total actual: $" + sumacarrito);
                break;
            case 3:
                sumacarrito = agregarAlCarrito(campera, sumacarrito);
                mostrarMensaje("Agregaste Campera. Total actual: $" + sumacarrito);
                break;
            case 4:
                sumacarrito = vaciarCarrito();
                mostrarMensaje("El carrito ha sido vaciado.");
                break;
            default:
                mostrarMensaje("Opción no válida.");
        }

        
        continuar = confirm("¿Desea realizar otra operación?");
    }

    /* Saludo final */
    mostrarMensaje("¡Gracias por su compra, " + nombre + "! Su total a pagar es: $" + sumacarrito);
}