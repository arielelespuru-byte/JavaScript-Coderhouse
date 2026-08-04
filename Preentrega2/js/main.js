
alert("¡Bienvenido al simulador de nuestra tienda!");


let entrada = prompt("Ingresa el producto que deseas consultar:\n- Remera ($15000)\n- Pantalon ($25000)\n- Zapatillas ($40000)\n\n(Escribe 'ESC' para salir)");


while (entrada != "ESC" && entrada != "esc") {
    

    let producto = entrada.toLowerCase();

   
    if (producto === "remera") {
        alert("La remera cuesta $15.000 y hay stock disponible.");
        console.log("El usuario consultó por: Remera");

    } else if (producto === "pantalon") {
        alert("El pantalón cuesta $25.000 y quedan pocas unidades.");
        console.log("El usuario consultó por: Pantalón");

    } else if (producto === "zapatillas") {
        alert("Las zapatillas cuestan $40.000 y están en oferta.");
        console.log("El usuario consultó por: Zapatillas");

    } else {
        
        alert("Lo siento, no reconozco ese producto. Intenta de nuevo.");
        console.log("Intento de consulta fallido: " + entrada);
    }

    
    entrada = prompt("¿Deseas consultar otro producto?\n- Remera\n- Pantalon\n- Zapatillas\n\n(Escribe 'ESC' para salir)");
}


alert("Gracias por usar nuestro simulador. ¡Hasta luego!");
console.log("El usuario salió del simulador.");