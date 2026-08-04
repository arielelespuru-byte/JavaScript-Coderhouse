
let productos = ["remera", "pantalon", "zapatillas", "gorra", "campera"];

alert("Productos iniciales cargados en el sistema.");


productos.push("mochila"); 
console.log("Se agregó 'mochila' al final con push.");

productos.unshift("medias"); 
console.log("Se agregó 'medias' al principio con unshift.");

let productoEliminado = productos.pop(); 
alert("Se ha eliminado el elemento: " + productoEliminado);
console.log("Se eliminó el último elemento con pop.");



let busqueda = prompt("Ingresa el nombre de un producto para buscar en el stock:");

if (busqueda) {
    let productoBuscado = busqueda.toLowerCase().trim();

    
    if (productos.includes(productoBuscado)) {
       
        let indice = productos.indexOf(productoBuscado);
        alert("¡El producto existe! Se encuentra en la posición (índice): " + indice);
        console.log("Búsqueda exitosa: " + productoBuscado + " en índice " + indice);
    } else {
        alert("Lo siento, el producto no se encuentra en el stock.");
        console.log("Producto no encontrado: " + productoBuscado);
    }
}



if (productos.length > 2) {
    let productoAntiguo = productos[2];
    productos.splice(2, 1, "camisa"); 
    console.log("Se reemplazó '" + productoAntiguo + "' por 'camisa' usando splice.");
    alert("Se actualizó el catálogo en la posición 2.");
}



function mostrarCatalogo(lista) {
    console.log("--- CATÁLOGO ACTUALIZADO DE PRODUCTOS ---");
  
    for (let producto of lista) {
        console.log("Producto: " + producto);
    }
    console.log("-----------------------------------------");
}


mostrarCatalogo(productos);

alert("Revisa la consola para ver el reporte final del catálogo.");