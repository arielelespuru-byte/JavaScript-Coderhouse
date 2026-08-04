
function calcularTotal(precio, envio) {
    let total = precio + envio;
    return total;
}


const mostrarBienvenida = (nombreTienda) => {
    console.log("¡Bienvenido a " + nombreTienda + "!");
};


function procesarProducto(producto) {
    let precioBase = 0;
    let costoEnvio = 500;

    if (producto === "remera") {
        precioBase = 15000;
        let totalPagar = calcularTotal(precioBase, costoEnvio);
        alert("La remera sale $15.000 más $500 de envío. Total: $" + totalPagar);
        console.log("El usuario consultó remera. Total a pagar: $" + totalPagar);

    } else if (producto === "pantalon") {
        precioBase = 25000;
        let totalPagar = calcularTotal(precioBase, costoEnvio);
        alert("El pantalón sale $25.000 más $500 de envío. Total: $" + totalPagar);
        console.log("El usuario consultó pantalón. Total a pagar: $" + totalPagar);

    } else if (producto === "zapatillas") {
        precioBase = 40000;
        let totalPagar = calcularTotal(precioBase, costoEnvio);
        alert("Las zapatillas salen $40.000 más $500 de envío. Total: $" + totalPagar);
        console.log("El usuario consultó zapatillas. Total a pagar: $" + totalPagar);

    } else {
        alert("No tenemos ese producto.");
        console.log("Producto no encontrado: " + producto);
    }
}


mostrarBienvenida("Mi Tienda Online");


let entrada = prompt("Ingresa un producto (remera, pantalon, zapatillas) o escribe 'ESC' para salir:");

while (entrada != "ESC" && entrada != "esc") {
    let productoIngresado = entrada.toLowerCase();
    
   
    procesarProducto(productoIngresado);

    entrada = prompt("¿Quieres consultar otro producto? (Escribe 'ESC' para salir)");
}

alert("Gracias por usar el simulador. ¡Chau!");
console.log("El usuario salió del programa.");