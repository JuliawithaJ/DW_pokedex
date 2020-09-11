/**
 * Retourne la liste des pokémons qui correspondent à un type donné (en EN)
 * @param {Array} pokemonList
 * @param {String} pokemonType
 * @returns {Array}
 */
function getPokemonsByType(pokemonList, pokemonType) {
// boucler sur la collection pokemonList
return pokemonList.filter(function (pokemon) {
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
 * @param {String} searchTerm
 * @returns {Array}
 */
function getPokemonsByName(pokemonList, searchTerm) {

// -- filtrer les pokémons qui on un nom qui contient la chaine de caractères pokemonName
// retourner le tableau trouvé (vide ou non)
let result = [];
// boucler sur la collection pokemonList
pokemonList.forEach(function (pokemon){
    searchTerm = searchTerm.toLowerCase();
    const pokemonName = pokemon.name.french.toLowerCase();
    const isIncludes = pokemonName.includes(searchTerm);
    if(isIncludes){
    result.push(pokemon);
    };
});
return result;
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
    let pokeIdhash = getPokemonFullId(pokemon.id);
    let pokeIdNoHash = getPokemonFullId(pokemon.id, "");
    let typeList = "";
    pokemon.type.forEach(function (unType){
    typeList += `<li>${typeTrad(unType)}</li>`; 
    });

    acc += ` <li class="pokemon" data-id="${pokemon.id}">
            <h3><span class="pokemon__name">${pokemon.name.french}</span> <span class="pokemon__id">${pokeIdhash}</span></h3>
            <img src="./img/pokemon_215_215/${pokeIdNoHash}.png" alt="${pokemon.name.french} - ${pokeIdhash}">
            <ul>
                ${typeList}
            </ul>
            </li>`
});
insertInto.innerHTML = acc;

const liList = document.getElementsByClassName("pokemon");
Array.from(liList).forEach(function(li) {
    li.addEventListener('click', function(event){
    const parentLi = event.target;
    });
})
}
/**
 * Met à jour la liste des types de pokémons dans le menu burger
 * @param {array} types 
 */

function createHTMLPokemonsTypes(pokemonList, insertIntoType, insertIntoListe){
// let acc="";
    const types = findAllPokemonsTypes(pokemonList);

    if(Array.isArray(types)){
        types.forEach(function(type){
        // acc += ` <li><button>${type}</button></li>`;
        //create button
        let button = document.createElement("button");
        button.setAttribute("class", type);
        button.textContent = type;
        //create li
        let li = document.createElement("li");
        li.setAttribute("id", "liste-types");
        insertIntoType.appendChild(li);
        li.appendChild(button);

        button.addEventListener("click", function(){
            const listPokeSearch = getPokemonsByType(pokemonList, type);
            createHTMLPokemonsList(listPokeSearch, insertIntoListe)
        })
        
    });

//insertInto.innerHTML = acc;
};


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
/** Retrouve tous les types de pokémons
 * @param {array} pokemonList
 * @returns {array}
 */
function findAllPokemonsTypes(pokemonList){
    //on vient stocker dans un tableau chaque type unique
    var types=[];
    pokemonList.forEach(function( pokemon){
        pokemon.type.forEach(function (pokeType){
        if(!types.includes(pokeType)){
            types.push(pokeType);
        }

        });
    });
return types;
}
