let btnMostrar=document.getElementById("btnMostrar");
let encabezado1 =document.getElementById("encabezado1");
let encabezado2 =document.getElementById("encabezado2");
let lista=document.getElementsByTagName("ul");

let elementos=document.getElementsByClassName("list-group-item");
let otroElemento =document.querySelector("ul>li");//Primero

let otrosElementos = document.querySelectorAll("ul>li"); //todos
let txtRFC=document.getElementById("txtRFC");
let txtCURP=document.getElementById("txtCURP");
let txtTelefono=document.getElementById("txtTelefono");

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
    let element = document.createElement("li");
    element.innerText="Another item";//<li>Another item</li>
    element.classList.add("list-group-item");

    let element2 = element.cloneNode(true);
 
    
    
    //before Inserta el elemento antes de la lista
    //listas.item(0).before(element);
    //prepend Inserta el elemento al principio de la lista
    //listas.item(0).prepend(element2);
    
  
    // lista.item(0).before(element);
    // lista.item(0).prepend(element2);
    //append Inserta el elemento al final
    // lista.item(0).append(element);
    //after Inserta el elemento después de la lista

    // lista.item(0).after(element2);

    //after Inserta el elemento después de la lista
    // lista.item(1).insertAdjacentElement("afterbegin",element);
    // lista.item(1).insertAdjacentElement("beforeend",element2);
    lista.item(1).insertAdjacentHTML("beforebegin",`<li class="list-group-item">Before Begin</li>`)
    lista.item(1).insertAdjacentHTML("afterend",`<li class="list-group-item">After end</li>`)
    lista.item(1).insertAdjacentHTML("afterbegin",`<li class="list-group-item">After Begin</li>`)
    lista.item(1).insertAdjacentHTML("beforeend",`<li class="list-group-item">Before end</li>`)
}); //btnMostrar

//Se ejecuta cuando termina de cargar todos los elementos de la página
window.addEventListener("load",function(event){
    console.log("Se termino de cargar la página");
});//Load

function txtToUpper(event){
    event.target.value=event.target.value.trim().toUpperCase();

}//txtToUpper
//blur ->cuando se sale del campo
txtRFC.addEventListener("blur",txtToUpper);//txtRFC
txtCURP.addEventListener("blur",txtToUpper); //txtCURP
txtTelefono.addEventListener("blur", function(event){
    event.preventDefault();
    txtTelefono.value=txtTelefono.value.trim().slice(0,10);
});//txtTelefono