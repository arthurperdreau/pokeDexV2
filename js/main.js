//--> récupération de l'input et du button Search
const searchBar=document.querySelector('.inputSearch');
const buttonSearch=document.querySelector('.buttonSearch');
const divTextAcueil=document.querySelector('.textHomePokemon');

function pokemonArray (){
    let pokemonList=[];
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(res => res.json())
    .then(data => {
        for(let i = 0; i < 20; i++) {
            pokemonList.push((data.results[i].name));
        }
    });
    //console.log(pokemonList);
    return pokemonList;

}
//console.log(pokemonArray());

//--> ajout d'un événement lorsque que l'on clique sur le button Search
buttonSearch.addEventListener('click',()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then((data) => {
            let inputValue=searchBar.value.toLowerCase();
            console.log(inputValue);
            let arrayPokemon=pokemonArray();
            console.log(arrayPokemon);
            if((arrayPokemon.includes(inputValue))){
                console.log("coucou c bon ca marche");
                divTextAcueil.style.display="none";
                fetch('https://pokeapi.co/api/v2/pokemon/'+inputValue)
                .then(res => res.json())
                .then(data => {
                    const pokemonBox=document.querySelector('.pokemonBox');

                    let firstAttack = data.abilities[0].ability.name;//--> récupération du nom de la première attaque de ce pokemon
                    let secondAttack = data.abilities[1].ability.name;//--> récupération du nom de la deuxième attaque de ce pokemon
                    let imageFrontPokemon=data.sprites.front_default;
                    //let imageBackPokemon=data.sprites.back_default;
                    //let imageFrontPokemonShiny=data.sprites.front_shiny;
                    //let imageBackPokemonShiny=data.sprites.back_shiny;

                    let imagePokemon=document.createElement('img');
                    imagePokemon.src=imageFrontPokemon;
                    imagePokemon.classList.add('card-img-top');

                    let pokemonName = document.createElement("p");
                    pokemonName.innerHTML = inputValue;

                    let textfirstAttack = document.createElement("p");
                    textfirstAttack.innerHTML = `First Attack: ${firstAttack}`;

                    let textsecondAttack = document.createElement("p");
                    textsecondAttack.innerHTML = `Second Attack: ${secondAttack}`;

                    let card = document.createElement("div");
                    card.classList.add('card');


                    card.append(imagePokemon);
                    card.appendChild(pokemonName);
                    card.appendChild(textfirstAttack);
                    card.appendChild(textsecondAttack);
                    pokemonBox.appendChild(card);
                })
            }
        });
})
