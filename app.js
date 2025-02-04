// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];


//Función Agregar Nombres
/*Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".*/
function agregarNombres(){
    let nombre = document.getElementById("nombreAmigo").value;
    if(nombre === ""){
        alert("Por favor, ingrese un nombre válido");
        return;
    }   else {
        nombres.push(nombre);
        document.getElementById("nombreAmigo").value = "";
        visualizarNombres();
}

//Función Validar entrada
/*Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.*/


//Función Visualizar la lista
/*Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.*/
function visualizarNombres(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

//Función Sorteo Aleatorio
/*Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.*/ 
