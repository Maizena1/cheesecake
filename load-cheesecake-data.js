let data = [];

const fs = require("fs"),
    dataHero = "data-hero.json";

fs.readFile(dataHero, 'utf8', (error,info) => {
    if (error) throw error;
    //Los puntos suspensivos (spreat operator) son para acceder a los datos. 
    //Si no se agregan, se estaria refiriendo a la localidad en memoria de la variable
    //a la que se esta refiriendo.
    data = [ ... info]; 
})

export default data;
