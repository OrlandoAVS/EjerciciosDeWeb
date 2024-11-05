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
    }
