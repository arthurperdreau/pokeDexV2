//--> récupération de l'input et du button Search
const searchBar = document.querySelector('.inputSearch');
const buttonSearch=document.querySelector('.buttonSearch');


//--> ajout d'un événement lorsque que l'on clique sur le button Search
buttonSearch.addEventListener('click',()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let inputValue=searchBar.value.toLowerCase();
            for(let i = 0; i < 20; i++){
                if (data[i]['name'] === inputValue){
                    console.log(inputValue)
                }
            }
        })
})
