"use strict";

const hasPokedex = typeof pokedex !== "undefined" && Array.isArray(pokedex) && pokedex.length >= 1;

if (hasPokedex) {
  // Récupère uniquement les pokémons de la première génération
  const firstGeneration = pokedex.filter(function (pokemon) {
    return pokemon.id <= 151;
  });



  //VOICI L'APPEL DE MA FONCTION POUR CREER MES LISTES
  const pokelistEl = document.getElementById("pokelist");
  const pokeSearch = document.getElementById("search");
  const formSearch = document.getElementById("form-search");
  const listeButtons = document.getElementById("Types-list");
  createHTMLPokemonsList(firstGeneration, pokelistEl);
  //createHTMLPokemonsList(getPokemonsByName(firstGeneration, 'p'),pokelistEl);

  pokeSearch.addEventListener("keyup", function(event){
    //Effectuer une recherche sur la valeur texte du champs
    const searchResultAr = getPokemonsByName(firstGeneration, event.target.value);

    //Mettre à jour la liste <ul>
    createHTMLPokemonsList(searchResultAr,pokelistEl);
  });
  pokeSearch.addEventListener("search", function(event){
    const searchResultAr = getPokemonsByName(firstGeneration, event.target.value);

    //Mettre à jour la liste <ul>
    createHTMLPokemonsList(searchResultAr,pokelistEl);
  })

  formSearch.addEventListener("submit", function(event){
    event.preventDefault();
  })



createHTMLPokemonsTypes(firstGeneration,listeButtons, pokelistEl);



  // trouver un moyen d'afficher dans la console,
  // le nom en français de chaque pokémon d'id 1 - 151

  firstGeneration.forEach(function (pokemon) {
    // console.log(pokemon.name.french, pokemon.imageName);
  });
  firstGeneration.forEach(function (pokemon){
    //console.log(pokemon.name.french);
  }); 
  const pokemonList = document.getElementById("pokemon-list");
  
  // document.getElementById('pokelist').childNodes;

  // Array.from(document.getElementById('pokelist').childNodes).forEach(function(node){
  //   if (node.nodeType === 1 && node.nodeName.toLowerCase() === '11') {
  //     console.log(node);
  //   }
  // })
  
  /*
  CI-DESSOUS des exemples de codes que j'ai utilisé pour vous faciliter la vie en formatant les photos et leurs noms.
  Vous pouvez les observer pour vos propres fonctions 
  */

  /*
  // Une simple boucle forEach pour tester le fonctionnement de chaque images de la première génération
  firstGeneration.forEach((pokemon) => {
    let img = document.createElement("img");
    // img.src = `./img/pokemon_120_120/${pokemon.imageName}`;
    img.src = `./img/pokemon_215_215/${getPokemonFullId(pokemon.id, "")}.png`;
    img.alt = `${pokemon.name.french}`;
    img.title = `${getPokemonFullId(pokemon.id)} - ${pokemon.name.french}`;

    document.body.appendChild(img);
  });
  */

  /*
  // Pour mémoire, voici l'algorithme que j'ai utilisé pour ajouter le nom de l'image à notre base de pokédex via un boucle map (un forEach aurait pu faire l'affaire aussi)
  const newPokedex = pokedex.map((pokemon, index) => {
    // pokemon.imageName = `${pokemon.name.english}.png`;
    pokemon.imageName = pokemon.imageName.toLowerCase();

    return pokemon;
    // console.log(pokemon);
  });

  // console.log(JSON.stringify(newPokedex));
  */
}
