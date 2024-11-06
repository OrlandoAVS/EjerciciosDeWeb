//Boton Envio
const sendButton = document.querySelector(".pokemon button");
sendButton.addEventListener("click", funcionCaja);

function funcionCaja() {
    const pokemons = document.getElementById("pokemons");
    const namePokemon = document.getElementById("poke1");
    const value = namePokemon.value;

    if (value != "") {
        const li = document.createElement("li");
        li.innerHTML = namePokemon.value;
        namePokemon.value = "";
        pokemons.appendChild(li);


        const button = document.createElement("button");
        button.innerHTML = "Eliminar";
        button.addEventListener("click", function() {
            pokemons.removeChild(li)
        });
        li.appendChild(button);

    }
}









/*
//Boton Delete
const deleteButton = document.querySelector(".contenedor button");
deleteButton.addEventListener("click", funcionBorrar);

function funcionDelete(){
    Reflect.defineProperty(funcionCaja);

}


function funcionDelete(){
    const namePokemon = document.getElementById("poke1");
    namePokemon.parentNode.removeChild(namePokemon);
}

*/





