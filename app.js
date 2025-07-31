////* Challenge Amigo Secreto *///////////

let Nombres = []; //lista que guarda los nombres de la caja
let seleccionarAmigo = '';
let listaAmigosSorteados = []; //lista para guardar los nombres 
//sorteados para que no se repitan. Se utiliza en sortearAmigo()

//Agrega los nombres escritos en la caja al dar click en el botón
function agregarAmigo() {
    let revisionLista = document.getElementById('amigo').value;
//verifica si la caja no esta vacia y si no es un número
    if (revisionLista === '' || !isNaN(Number(revisionLista))) {
        alert("El campo esta vacío o es un número. Favor de indicar un Nombre");    
      return limpiarCaja();
    } else {
        if (!Nombres.includes(revisionLista)) {
        Nombres.push(revisionLista);
        console.log(Nombres);
        } else {
        alert("Este nombre ya fue agregado.");
       }
    limpiarCaja();
    }
   listaHtml();
}



//limpia la caja despues de colocar un valor 
//se llama en la función agregaramigo()
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}


//Imprime una lista en la pagina con los nombres que se van dando
//se llama en la función agregaramigo()
function listaHtml () {
    let impresionHtml = document.getElementById('listaAmigos');
    impresionHtml.innerHTML = ''; //limpia la lista HTML
   for (let i = 0; i < Nombres.length; i++) {
    
        let liElement = document.createElement('li'); // crea el elemento li
        liElement.textContent = Nombres[i]; //agrega el nombre al elemento
        impresionHtml.appendChild(liElement); //imprime el nombre en el elemento
  }
}



function sortearAmigo() {
    let seleccionarAmigo = Nombres[Math.floor(Math.random() * Nombres.length)];
    console.log (seleccionarAmigo);
    console.log(listaAmigosSorteados);
   
    if (listaAmigosSorteados.includes(seleccionarAmigo)) {
        return sortearAmigo();
    } else {
       listaAmigosSorteados.push(seleccionarAmigo);
       impresionAmigoSecreto(seleccionarAmigo);
    
    if(listaAmigosSorteados.length === Nombres.length) {
        alert("Todos los amigos han sido sorteados") 
       }
 
    }
    return seleccionarAmigo;
}
   

function impresionAmigoSecreto(nombreSorteado) {
    let impresionAmigoHtml = document.getElementById('resultado');
    impresionAmigoHtml.innerHTML = ''; //limpia la lista HTML
      
    let liElementResultado = document.createElement('li'); // crea el elemento li
    liElementResultado.textContent = `El Amigo Secreto es: ${nombreSorteado}`; //agrega el nombre al elemento
    console.log(nombreSorteado);
    impresionAmigoHtml.appendChild(liElementResultado); //imprime el nombre en el elemento
}

