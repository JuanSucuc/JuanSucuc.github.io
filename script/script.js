//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

// mi scrips

let ListaDeBanderas = "";

console.log("hola");

//////////////

for(let pais of paises){


    for(datosPais in pais){
        console.log(datosPais);
        
        ListaDeBanderas += "\n <div>" + datosPais + "</div>";
        ListaDeBanderas += "\n <div>" + pais[datosPais] + "</div>";
    
    
    }
    
}


console.log(ListaDeBanderas);


agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {
    
}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
  //TODO
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
}


document.getElementById("paises").innerHTML = ListaDeBanderas;

