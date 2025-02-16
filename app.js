// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];
let campoAmigo = document.querySelector('#amigo');

//Función Agregar Nombres
/*Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".*/
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if(validarEntrada()==false || validaRepetidos(nombre)==false){
        alert("Por favor, ingrese un nombre válido");
        return;
    }   else {
        nombres.push(nombre);
        nombre.value = "";
        visualizarNombres();
        amigo.focus();
        amigo.value = "";
}
}

//Función Validar entrada
/*Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.*/
function validarEntrada(){
    let nombre = document.getElementById("amigo").value;
    if(nombre === ""){        
        return false;
    }
    //Validar que no ingresen espacios tab, numeros o caracteres

}

//Función Visualizar la lista
/*Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.*/
function visualizarNombres(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach( (nombre, indice) => {
        let item = document.createElement("li");
        let a = document.createElement("a");
        a.href = `javascript:eliminarElemento(${indice})`;                
        a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="14px" height="15px"><path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"/></svg>';
        //a.textContent = " X ";       

        item.textContent = nombre;
        item.appendChild(a);
        lista.appendChild(item);
    });
}

//Función Sorteo Aleatorio
/*Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/ 
function sortearAmigo(){
    if(nombres.length === 0){
        alert("No hay nombres agregados");
        return;
    }else{
        let indice = Math.floor(Math.random() * nombres.length);
        alert("El amigo sorteado es: " + nombres[indice]);
    }
}    


//Función Borrar Lista
function resetear(){
    nombres = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

//Función eliminar un elemento de la lista dando click sobre el elemento
function eliminarElemento(indice){
    nombres.splice(indice, 1);
    visualizarNombres();
   //
}

function validaRepetidos(nombre){    
    let repetidos = nombres.filter(n => n === nombre);
    if(repetidos.length > 0){
        alert("El nombre ingresado ya existe");
        return false;
    }
    return true;
}


//Escuchar al dar click en enter
campoAmigo.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        agregarAmigo();
    }
});