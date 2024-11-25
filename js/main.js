//Nouvelles notions utilisées: async et await
//--> Ressource utilisée : https://www.youtube.com/watch?v=9j1dZwFEJ-c

//--> récupération de l'input et du button Search
const searchBar=document.querySelector('.inputSearch');
const buttonSearch=document.querySelector('.buttonSearch');
const divTextAcueil=document.querySelector('.textHomePokemon');
const mainBox=document.querySelector('.pokemonBox');

async function pokemonArray() {
    let pokemonList = [];
    // Récupération des données avec fetch
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();

    // Remplissage de la liste avec les 20 premiers pokémons
    for (let i = 0; i < 20; i++) {
        pokemonList.push(data.results[i].name);
    }
    return pokemonList;
}

//console.log(pokemonArray());

//--> ajout d'un événement lorsque que l'on clique sur le button Search
buttonSearch.addEventListener('click',async()=>{
    let inputValue=searchBar.value.toLowerCase();
    console.log(inputValue);
    let arrayPokemon= await pokemonArray();
    console.log(arrayPokemon);
    if(arrayPokemon.includes(inputValue)){
        mainBox.innerHTML="";
        console.log("coucou c bon ca marche");
        divTextAcueil.style.display="none";
        fetch('https://pokeapi.co/api/v2/pokemon/'+inputValue)
            .then(res => res.json())
            .then(data => {
                const pokemonBox=document.querySelector('.pokemonBox');

                let firstAttack = data.abilities[0].ability.name;//--> récupération du nom de la première attaque de ce pokemon
                let secondAttack = data.abilities[1].ability.name;//--> récupération du nom de la deuxième attaque de ce pokemon
                let imageFrontPokemon=data.sprites.front_default;
                let firstTypePokemon=data.types[0].type.name;
                let secondTypePokemon=data.types[1].type.name;
                //let imageBackPokemon=data.sprites.back_default;
                //let imageFrontPokemonShiny=data.sprites.front_shiny;
                //let imageBackPokemonShiny=data.sprites.back_shiny;

                let imagePokemon=document.createElement('img');
                imagePokemon.src=imageFrontPokemon;
                imagePokemon.classList.add('card-img-top');

                let pokemonName = document.createElement("p");
                pokemonName.innerHTML = inputValue;

                let firstTypePokemonText = document.createElement("p");
                firstTypePokemonText.innerHTML =`First Type:${firstTypePokemon}` ;

                let secondTypePokemonText = document.createElement("p");
                secondTypePokemonText.innerHTML = `Second Type:${secondTypePokemon}`;

                let textfirstAttack = document.createElement("p");
                textfirstAttack.innerHTML = `First Attack: ${firstAttack}`;

                let textsecondAttack = document.createElement("p");
                textsecondAttack.innerHTML = `Second Attack: ${secondAttack}`;

                let card = document.createElement("div");
                card.classList.add('card');


                card.append(imagePokemon);
                card.appendChild(pokemonName);
                card.appendChild(firstTypePokemonText);
                card.appendChild(secondTypePokemonText);
                card.appendChild(textfirstAttack);
                card.appendChild(textsecondAttack);
                pokemonBox.appendChild(card);
            })
}})
