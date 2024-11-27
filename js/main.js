//Nouvelles notions utilisées: async et await / try et catch
//--> Ressources utilisées : https://www.youtube.com/watch?v=9j1dZwFEJ-c / https://openclassrooms.com/forum/sujet/ignorer-une-erreur-et-continuer-lexecution

//--> récupération de l'input et du button Search
const searchBar=document.querySelector('.inputSearch');
const buttonSearch=document.querySelector('.buttonSearch');

//-->récupération titre Pokedex
const home=document.querySelector('.navBarTitre');

//-->récupération div contenant les textes explicatifs
const divTextAcueil=document.querySelector('.textHomePokemon');
const mainBox=document.querySelector('.pokemonBox');

//-->récupération button all
const buttonAll=document.querySelector('.buttonAll');

//-->Permet de refresh la page lorsque l'on clique sur PokeDex
home.addEventListener('click',()=>{
    location.reload()
})

//-->fonction qui renvoie un array avec tout les noms des pokémons présents dans l'api
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

//fonction permettant de vider la div principal pour afficher l'élément indiquer par le button
function clearPage(){
    mainBox.innerHTML="";
    divTextAcueil.style.display="none";
}
//console.log(pokemonArray());

//fonction permettant de créer une carte shiny
function cardShinyCreation(data,inputValue){
    try {
        let secondAttack = data.abilities[1].ability.name;//--> récupération du nom de la deuxième attaque de ce pokemon
    } catch(e) {
        const pokemonBox=document.querySelector('.pokemonBox');
        pokemonBox.classList.add('d-flex');
        pokemonBox.classList.add('justify-content-evenly');
        pokemonBox.classList.add('pokemonBoxHeight');

        let firstAttack = data.abilities[0].ability.name;//--> récupération du nom de la première attaque de ce pokemon
        let imageFrontPokemon=data.sprites.front_shiny;
        let firstTypePokemon=data.types[0].type.name;


        let imagePokemon=document.createElement('img');
        imagePokemon.src=imageFrontPokemon;
        imagePokemon.classList.add('card-img-top');

        let pokemonName = document.createElement("p");
        pokemonName.innerHTML = `${inputValue.toUpperCase()} SHINY`;
        pokemonName.classList.add('pokemonTextCard');
        pokemonName.classList.add('fs-3');

        let firstTypePokemonText = document.createElement("p");
        firstTypePokemonText.innerHTML =`Type: ${firstTypePokemon}` ;
        firstTypePokemonText.classList.add('pokemonTextCard');

        let textfirstAttack = document.createElement("p");
        textfirstAttack.innerHTML = `First Attack: ${firstAttack}`;
        textfirstAttack.classList.add('pokemonTextCard');

        let textsecondAttack = document.createElement("p");
        textsecondAttack.innerHTML = `No Second Attack`;
        textsecondAttack.classList.add('pokemonTextCard');

        let card = document.createElement("div");
        card.classList.add('cardAspect');
        card.classList.add('card');


        card.appendChild(pokemonName);
        card.append(imagePokemon);
        card.appendChild(firstTypePokemonText);
        card.appendChild(textfirstAttack);
        card.appendChild(textsecondAttack);
        pokemonBox.appendChild(card);
        return true;
    }
    const pokemonBox=document.querySelector('.pokemonBox');
    pokemonBox.classList.add('d-flex');
    pokemonBox.classList.add('justify-content-evenly');
    pokemonBox.classList.add('pokemonBoxHeight');

    let firstAttack = data.abilities[0].ability.name;//--> récupération du nom de la première attaque de ce pokemon
    let secondAttack = data.abilities[1].ability.name;//--> récupération du nom de la deuxième attaque de ce pokemon
    let imageFrontPokemon=data.sprites.front_shiny;
    let firstTypePokemon=data.types[0].type.name;


    let imagePokemon=document.createElement('img');
    imagePokemon.src=imageFrontPokemon;
    imagePokemon.classList.add('card-img-top');

    let pokemonName = document.createElement("p");
    pokemonName.innerHTML = `${inputValue.toUpperCase()} SHINY`;
    pokemonName.classList.add('pokemonTextCard');
    pokemonName.classList.add('fs-3');

    let firstTypePokemonText = document.createElement("p");
    firstTypePokemonText.innerHTML =`Type: ${firstTypePokemon}` ;
    firstTypePokemonText.classList.add('pokemonTextCard');

    let textfirstAttack = document.createElement("p");
    textfirstAttack.innerHTML = `First Attack: ${firstAttack}`;
    textfirstAttack.classList.add('pokemonTextCard');

    let textsecondAttack = document.createElement("p");
    textsecondAttack.innerHTML = `Second Attack: ${secondAttack}`;
    textsecondAttack.classList.add('pokemonTextCard');

    let card = document.createElement("div");
    card.classList.add('cardAspect');
    card.classList.add('card');


    card.appendChild(pokemonName);
    card.append(imagePokemon);
    card.appendChild(firstTypePokemonText);
    card.appendChild(textfirstAttack);
    card.appendChild(textsecondAttack);
    pokemonBox.appendChild(card);
}

//fonction permettant de créer une carte normale
function cardCreation(data,inputValue){
    try {
        let secondAttack = data.abilities[1].ability.name;//--> récupération du nom de la deuxième attaque de ce pokemon
    } catch(e) {
        const pokemonBox=document.querySelector('.pokemonBox');
        pokemonBox.classList.add('d-flex');
        pokemonBox.classList.add('justify-content-evenly');
        pokemonBox.classList.add('pokemonBoxHeight');

        let firstAttack = data.abilities[0].ability.name;//--> récupération du nom de la première attaque de ce pokemon
        let imageFrontPokemon=data.sprites.front_default;
        let firstTypePokemon=data.types[0].type.name;


        let imagePokemon=document.createElement('img');
        imagePokemon.src=imageFrontPokemon;
        imagePokemon.classList.add('card-img-top');

        let pokemonName = document.createElement("p");
        pokemonName.innerHTML = inputValue.toUpperCase();
        pokemonName.classList.add('pokemonTextCard');
        pokemonName.classList.add('fs-3');

        let firstTypePokemonText = document.createElement("p");
        firstTypePokemonText.innerHTML =`Type: ${firstTypePokemon}` ;
        firstTypePokemonText.classList.add('pokemonTextCard');

        let textfirstAttack = document.createElement("p");
        textfirstAttack.innerHTML = `First Attack: ${firstAttack}`;
        textfirstAttack.classList.add('pokemonTextCard');

        let textsecondAttack = document.createElement("p");
        textsecondAttack.innerHTML = `No Second Attack`;
        textsecondAttack.classList.add('pokemonTextCard');

        let card = document.createElement("div");
        card.classList.add('cardAspect');
        card.classList.add('card');


        card.appendChild(pokemonName);
        card.append(imagePokemon);
        card.appendChild(firstTypePokemonText);
        card.appendChild(textfirstAttack);
        card.appendChild(textsecondAttack);
        pokemonBox.appendChild(card);
        return true;
    }
    const pokemonBox=document.querySelector('.pokemonBox');
    pokemonBox.classList.add('d-flex');
    pokemonBox.classList.add('justify-content-evenly');
    pokemonBox.classList.add('pokemonBoxHeight');

    let firstAttack = data.abilities[0].ability.name;//--> récupération du nom de la première attaque de ce pokemon
    let secondAttack = data.abilities[1].ability.name;//--> récupération du nom de la deuxième attaque de ce pokemon
    let imageFrontPokemon=data.sprites.front_default;
    let firstTypePokemon=data.types[0].type.name;


    let imagePokemon=document.createElement('img');
    imagePokemon.src=imageFrontPokemon;
    imagePokemon.classList.add('card-img-top');

    let pokemonName = document.createElement("p");
    pokemonName.innerHTML = inputValue.toUpperCase();
    pokemonName.classList.add('pokemonTextCard');
    pokemonName.classList.add('fs-3');

    let firstTypePokemonText = document.createElement("p");
    firstTypePokemonText.innerHTML =`Type: ${firstTypePokemon}` ;
    firstTypePokemonText.classList.add('pokemonTextCard');

    let textfirstAttack = document.createElement("p");
    textfirstAttack.innerHTML = `First Attack: ${firstAttack}`;
    textfirstAttack.classList.add('pokemonTextCard');

    let textsecondAttack = document.createElement("p");
    textsecondAttack.innerHTML = `Second Attack: ${secondAttack}`;
    textsecondAttack.classList.add('pokemonTextCard');

    let card = document.createElement("div");
    card.classList.add('cardAspect');
    card.classList.add('card');


    card.appendChild(pokemonName);
    card.append(imagePokemon);
    card.appendChild(firstTypePokemonText);
    card.appendChild(textfirstAttack);
    card.appendChild(textsecondAttack);
    pokemonBox.appendChild(card);
}

//--> ajout d'un événement lorsque que l'on clique sur le button Search
buttonSearch.addEventListener('click',async()=>{
    let inputValue=searchBar.value.toLowerCase();
    //console.log(inputValue);
    let arrayPokemon= await pokemonArray();
    //console.log(arrayPokemon);
    if(arrayPokemon.includes(inputValue)){
        clearPage()
        fetch('https://pokeapi.co/api/v2/pokemon/'+inputValue)
            .then(res => res.json())
            .then(data => {
                cardCreation(data,inputValue)
                cardShinyCreation(data,inputValue)

            })
}})
//-->ajout de toute les cartes normales à la div principale
buttonAll.addEventListener('click', ()=>{
    clearPage()
    const pokemonBox=document.querySelector('.pokemonBox');

    let rowPokemon=document.createElement('div');
    rowPokemon.classList.add('d-flex');
    rowPokemon.classList.add('row');
    rowPokemon.classList.add('pokemonBoxHeight');
    pokemonBox.appendChild(rowPokemon);

    for (let i = 1; i < 21; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(res => res.json())
            .then(data => {
                try {
                    //si il n'y a pas de deuxième attaque
                    let secondAttack = data.abilities[1].ability.name;//--> récupération du nom de la deuxième attaque de ce pokemon
                } catch (e) {
                    let namePokemon = data.forms[0].name
                    let firstAttack = data.abilities[0].ability.name;//--> récupération du nom de la première attaque de ce pokemon
                    let imageFrontPokemon = data.sprites.front_default;
                    let firstTypePokemon = data.types[0].type.name;


                    let imagePokemon = document.createElement('img');
                    imagePokemon.src = imageFrontPokemon;
                    imagePokemon.classList.add('card-img-top');

                    let pokemonName = document.createElement("p");
                    pokemonName.innerHTML = `${namePokemon.toUpperCase()}`;
                    pokemonName.classList.add('pokemonTextCard');
                    pokemonName.classList.add('fs-3');

                    let firstTypePokemonText = document.createElement("p");
                    firstTypePokemonText.innerHTML = `Type: ${firstTypePokemon}`;
                    firstTypePokemonText.classList.add('pokemonTextCard');


                    let textfirstAttack = document.createElement("p");
                    textfirstAttack.innerHTML = `First Attack: ${firstAttack}`;
                    textfirstAttack.classList.add('pokemonTextCard');

                    let textsecondAttackPhantom = document.createElement("p");
                    textsecondAttackPhantom.innerHTML = `No Second Attack`;
                    textsecondAttackPhantom.classList.add('pokemonTextCard');


                    let col = document.createElement("div");
                    col.classList.add('col-4');

                    let card = document.createElement("div");
                    card.classList.add('cardAspect');
                    card.classList.add('card');

                    card.appendChild(pokemonName);
                    card.append(imagePokemon);
                    card.appendChild(firstTypePokemonText);
                    card.appendChild(textfirstAttack);
                    card.appendChild(textsecondAttackPhantom)
                    col.appendChild(card);
                    rowPokemon.appendChild(col);
                }
                let namePokemon = data.forms[0].name
                let firstAttack = data.abilities[0].ability.name;//--> récupération du nom de la première attaque de ce pokemon
                let secondAttack = data.abilities[1].ability.name;//--> récupération du nom de la deuxième attaque de ce pokemon
                let imageFrontPokemon = data.sprites.front_default;
                let firstTypePokemon = data.types[0].type.name;


                let imagePokemon = document.createElement('img');
                imagePokemon.src = imageFrontPokemon;
                imagePokemon.classList.add('card-img-top');

                let pokemonName = document.createElement("p");
                pokemonName.innerHTML = `${namePokemon.toUpperCase()}`;
                pokemonName.classList.add('pokemonTextCard');
                pokemonName.classList.add('fs-3');

                let firstTypePokemonText = document.createElement("p");
                firstTypePokemonText.innerHTML = `Type: ${firstTypePokemon}`;
                firstTypePokemonText.classList.add('pokemonTextCard');


                let textfirstAttack = document.createElement("p");
                textfirstAttack.innerHTML = `First Attack: ${firstAttack}`;
                textfirstAttack.classList.add('pokemonTextCard');

                let textsecondAttack = document.createElement("p");
                textsecondAttack.innerHTML = `Second Attack: ${secondAttack}`;
                textsecondAttack.classList.add('pokemonTextCard');

                let col = document.createElement("div");
                col.classList.add('col-4');

                let card = document.createElement("div");
                card.classList.add('cardAspect');
                card.classList.add('card');

                card.appendChild(pokemonName);
                card.append(imagePokemon);
                card.appendChild(firstTypePokemonText);
                card.appendChild(textfirstAttack);
                card.appendChild(textsecondAttack);
                col.appendChild(card);
                rowPokemon.appendChild(col);
            })


    }

})
