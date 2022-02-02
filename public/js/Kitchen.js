let menuTile = document.getElementById('menu-tile')
menuTile.addEventListener('click', () => {
    location.replace('/menu-categories')
    //e.preventDefault();
    
})

let specialsTile = document.getElementById('specials-tile')
specialsTile.addEventListener('click', () => {
    location.replace('/menu-categories')
    //e.preventDefault();
})

let about = document.querySelector("#about")
about.addEventListener("click", () =>{
    
    location.replace('/about')
})

    
