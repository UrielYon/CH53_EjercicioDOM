let btnMostrar=document.getElementById("btnMostrar");
let encabezado1 =document.getElementById("encabezado1");
let encabezado2 =document.getElementById("encabezado2");
let lista=document.getElementsByTagName("ul");

let elementos=document.getElementsByClassName("list-group-item");
let otroElemento =document.querySelector("ul>li");//Primero

let otrosElementos = document.querySelectorAll("ul>li"); //todos

console.log("otroElemento;",otroElemento);

console.log(lista.length);//2
console.log(lista.item(1));

console.log(elementos.length);
let contador=0;

function modifica(){
encabezado1.innerHTML="<em>Ejercicio DOM</em>";
encabezado2.innerText=++contador;
}

console.log(elementos.item(2));

btnMostrar.addEventListener("click",function(event){
    event.preventDefault(); //No hagas lo que haces por defecto
    console.log("boton btnModificar presionado");
});