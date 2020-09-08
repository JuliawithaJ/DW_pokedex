"use strict";

const hasPokedex = typeof pokedex !== "undefined" && Array.isArray(pokedex) && pokedex.length >= 1;

if (hasPokedex) {
  // Récupère uniquement les pokémons de la première génération
  const firstGeneration = pokedex.filter(function (pokemon) {
    return pokemon.id <= 151;
  });

  /**
   * Retourne la liste des pokémons qui correspondent à un type donné (en EN)
   * @param {Array} pokemonList
   * @param {String} pokemonType
   * @returns {Array}
   */
  function getPokemonsByType(pokemonList, pokemonType) {
    // boucler sur la collection pokemonList
    return firstGeneration.filter(function (pokemon) {
      // -- filtrer les pokémons qui on un filtre qui correspond à pokemonType
      const wichType = pokemon.type.filter(function (type) {
        return type.toUpperCase() === pokemonType.toUpperCase();
      });

      return wichType.length >= 1;
    });
    // retourner le tableau trouvé (vide ou non)
  }
  function typeTrad(typeEn){
    switch (typeEn){
      case "Grass": 
      return "Plante";
      break;
      case "Fire":
      return "Feu";
      break;
      case "Water":
      return "Eau";
      break;
      case "Poison":
      return "Poison";
      break;
      case "Flying":
      return "Vol";
      break;
      case "Bug":
      return "Insect";
      break;
      case "Normal":
      return "Normale";
      break;
      case "Electric":
      return "Electrique";
      break;
      case "Ground":
      return "Sol";
      break;
      case "Fairy":
      return "Fee";
      break;
      case "Fighting":
      return "Combat";
      break;
      case "Psychic":
      return "Psy";
      break;
      case "Rock":
      return "Roche";
      break;
      case "Ghost":
      return "Spectre";
      break;
      case "Dark":
      return "Ténèbre";
      break;
      case "Steel":
      return "Acier";
      break;
      case "Ice":
      return "Glace";
      break;
      case "Dragon":
      return "Dragon";
      break;
    }
  }

  /**
   * Retourne les pokémons ayant un nom qui contient la chaine passée en second paramètre
   * @param {Array} pokemonList
   * @param {String} pokemonName
   * @returns {Array}
   */
  function getPokemonsByName(pokemonList, pokemonName) {
    // boucler sur la collection pokemonList
    // -- filtrer les pokémons qui on un nom qui contient la chaine de caractères pokemonName
    // retourner le tableau trouvé (vide ou non)
  }

  /**
   * Récupère chaques types unique et retourne un Array
   * @param {Array} pokemonList
   * @returns {Array}
   */
  function getPokemonsTypes(pokemonList) {
    // boucler sur la collection pokemonList
    // -- capturer dans un autre Array chaque type vue qui n'est pas déjà dans ce tableau (dédoublonnage)
    // retourner le tableau trouvé
  }

  /**
   * A partir d'un Array, construit dans le DOM la liste <li> à insérer
   * @param {Array} pokemonList un array de pokémons
   * @param {String} insertInto l'id d'un élément conteneur parent
   * @returns {false} si insertInto n'est pas trouvé
   */
  function createHTMLPokemonsList(pokemonList, insertInto) {
    // boucle sur pokemonList
    // -- pour chaque pokémon construit la structure HTML à insérer et la stock dans une variable
    // injecter le résultat dans insertInto, si il est trouvé ! sinon retour false pour indiquer l'erreur
    let acc="";

    pokemonList.forEach(function (pokemon){
      console.log(pokemon.name.french, pokemon.id, `./img/pokemon_215_215/${pokemon.id}.png`, pokemon.type); 
      let pokeIdhash = getPokemonFullId(pokemon.id);
      let pokeIdNoHash = getPokemonFullId(pokemon.id, "");
      console.log(pokemon.type);
      let typeList = "";
      pokemon.type.forEach(function (unType){
        console.log(unType);
        typeList += `<li>${typeTrad(unType)}</li>`; 
      });

      acc += ` <li>
               <h3><span class="pokemon__name">${pokemon.name.french}</span> <span class="pokemon__id">${pokeIdhash}</span></h3>
                <img src="./img/pokemon_215_215/${pokeIdNoHash}.png" alt="${pokemon.name.french} - ${pokeIdhash}">
                <ul>
                  ${typeList}
                </ul>
              </li>`
    });
    
    console.log(acc);
    insertInto.innerHTML += acc;

// affiche sour forme de string le contenu html, balises inclusent
console.log(insertInto.innerHTML);

  }
    
  /**
   * Formate un entier en chaine du style #001
   * @param {Number} id
   * @param {String} prefix un caractère ajouté avant l'identifiant formaté
   * @returns {String|False} réponds false en cas d'erreur, sinon une chaine formatée
   */
  function getPokemonFullId(id, prefix = "#") {
    // a-t-on un id ?
    const hasId = typeof id != "undefined";
    // est-il inférieur à 999, sinon notre function n'est pas suffisante. ça parait peut probable mais on sais jamais !
    if (hasId && id <= 999) {
      // transformation en chaine de caractères pour avoir la capacité de compter
      // et puis de toute façon on sort une chaine en fin
      let fullId = `${id}`;

      const fullIdLength = fullId.length;
      // un nombre à deux chiffres
      if (fullIdLength === 2) {
        fullId = `0${fullId}`;
      }
      // un nombre à un chiffre, un ... chiffre en fait 😄 !
      else if (fullIdLength === 1) {
        fullId = `00${fullId}`;
      }

      // le # qui va bien
      fullId = `${prefix}${fullId}`;

      // et on oublis pas de donner une valeur de retour
      return fullId;
    }

    // ça tourne mal on dit false
    return false;
  }
 
 
  //VOICI L'APPEL DE MA FONCTION POUR CREER MES LISTES
  const pokelistEl = document.getElementById("pokelist");
  createHTMLPokemonsList(firstGeneration, pokelistEl);

  // console.log(firstGeneration);

  // trouver un moyen d'afficher dans la console,
  // le nom en français de chaque pokémon d'id 1 - 151

  firstGeneration.forEach(function (pokemon) {
    // console.log(pokemon.name.french, pokemon.imageName);
  });
  firstGeneration.forEach(function (pokemon){
    //console.log(pokemon.name.french);
  }); 
  const pokemonList = document.getElementById("pokemon-list");

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
