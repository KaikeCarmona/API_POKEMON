function pikomon(){
  const pokemonContainer = document.querySelector('.pokemon-container')
  const nomePokemon = document.querySelector('#nomePokemon').value
  console.log(nomePokemon)
 
  function buscaPokemon(nome) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then(res => res.json())
    .then((data) =>
        criaPokemon(data)
    );
  }

  function buscaPokemons(number){
    // let i = document.getElementById("numeroPokemon")
    for (let i = 1; i <= number; i++){
      buscaPokemon(i)
    }
  }

  function criaPokemon(pokemon){

    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);


    pokemonContainer.appendChild(card)

  }

  // esse buscaPokemon vai ser responsavel por buscar o id do pokemon dentro json;  PS: colocar a variavel que vai receber o valor do input dentro desse buscaPokemon
  buscaPokemon(nomePokemon)
}