const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");  //Guardar en la var/constante "pokename" el acceso al elemento input mediante el id
    let pokeInput = pokeName.value;  //Ya con acceso al elemento ahora vamos a obtener en especifico lo que el usuario ingreso en el imput (valor)
    pokeInput = pokeInput.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; //Se guarda el link en la constante "url" y se sustituye el nombre del pokemon por la variable donde e tiene acceso a lo que ingreso el usuario
    fetch(url).then((res) => {  //fetch hace una petición al servidor del sitio para tener acceso a recursos del mismo de manera "asincrona" por lo que el "fetch" devolvera una 'promesa'con "then" que será aceptada cuando reciba una respuesta y sólo será rechazada si hay un fallo de red o si por alguna razón no se pudo completar la petición
        if(res.status != "200"){ //Sí el estatus de la respuesta es distinto de 200(encontrado), hara lo siguente:
            console.log(res);
            pokeImage("./assets/imagenesPokemon/pokemon-bored-error.gif");
            limpiarInformacion(); //Limpia toda la informacion del pokemon anterior para que no se confunda con la buqueda actual
            limpiarInput();  
        }
        else{
            return res.json();  //Cuando la promesa sea aceptada se regresara la "response         ================> <================="
        }
    }).then((data) => {  //Se devuelve otra promesa para acceder especificamente a los datos
        console.log(data);  //Se imprimen en consola los datos requeridos
        let pokeImg = data.sprites.front_default;  //Se crea una variable para almacenar el "front_default" del pokemon ingresado en el input
        pokeImage(pokeImg);  //Se llama a la funcion "pokeImage" con el parametro "pokeImg" para que imprima la imagen del pokemon ingresado en la pagina
        console.log(pokeImg);  //Se imprime en consola los datos de "front_default"
        let id = data.id;
        pokeId(id);
        console.log(id)
        let name = data.name; //Aqui
        pokeNombre(name);
        console.log(name);
        let pesos = data.weight;  //Ahora aqui
        pokeWeight(pesos/10);
        console.log(pesos);
        let altura = data.height;  //En realidad aqui
        pokeHeight(altura/10);
        console.log(altura);
        let tipo = data.types.map (tp => tp.type.name);  //El ".map" es para acceder a los 2 arreglos de "types" en la data por lo que al usar el metodo ".map" se llama una funcion anonima adelante en la cual vamos a ingresar hasta el "name" de los "type"
        pokeType(tipo);
        console.log(tipo);
        let movimiento = data.moves.map (mv => mv.move.name);
        pokeMoves(movimiento);
        console.log(movimiento);
        let habilidad = data.abilities.map (abil => abil.ability.name);
        pokeAbilities(habilidad);
        console.log(habilidad);
        let hp = data.stats[0].base_stat;
        pokeStats1(hp);
        console.log(hp);
        let ataque = data.stats[1].base_stat;
        pokeStats2(ataque);
        console.log(ataque);
        let defensa = data.stats[2].base_stat;
        pokeStats3(defensa);
        console.log(defensa);
        let ataqueEspecial = data.stats[3].base_stat;
        pokeStats4(ataqueEspecial);
        console.log(ataqueEspecial);
        let defensaEspecial = data.stats[4].base_stat;
        pokeStats5(defensaEspecial);
        console.log(defensaEspecial);
        let velocidad = data.stats[5].base_stat;
        pokeStats6(velocidad);
        console.log(velocidad);
        limpiarInput();  //Limpla la casilla donde se ingresa el nombre o número del pokemon
        titleStats();  //Se imprime el titulo "Stats" arriba de las estadisticas del pokemon
    })
}

// Función para la imagen
const pokeImage = (url) => {  //Se pasa el link en url con la variable "pokeinput" implicita como parametro a la funcion "pokeImage"
    const pokeImg = document.getElementById("pokeImg"); //Se crea la const "pokeImg" a la cual se le posiciona en la imagen(elemento) con el id="pokeImg"
    pokeImg.src = url; //Ya posicionados en el elemento accedemos al atributo "src" y le asignamos el parametro (url)
}
// Función para el numemro de Pokemon
const pokeId = (id) =>{
    const numeracion = document.getElementById("id");
    numeracion.innerHTML = ("No: " + id);
}
// Función para el nombre de Pokemon
const pokeNombre = (name) =>{
    const nombre = document.getElementById("name");
    nombre.innerHTML = ("Nombre: " + name);
}
// Función para el peso de Pokemon
const pokeWeight = (pesos) =>{
    const pesaje = document.getElementById("peso");
    pesaje.innerHTML = ("Peso: " + pesos + " Kg");
}
// Función para la altura de Pokemon
const pokeHeight = (altura) =>{
    const alt = document.getElementById("altura");
    alt.innerHTML = ("Altura: " + altura + "mts");
}
// Función para el tipo de Pokemon
const pokeType = (tipo) =>{
    const tipos = document.getElementById("tipo");
    tipos.innerHTML = ("Tipo: "+ tipo);
}
// Función para el movimiento de Pokemon
const pokeMoves = (movimiento) =>{
    const movimientos = document.getElementById("movs");
    movimientos.innerHTML = ("Movimientos: " + movimiento);
}
// Función para la habilidad de Pokemon
const pokeAbilities = (habilidad) =>{
    const habilidades = document.getElementById("habil");
    habilidades.innerHTML = ("Habilidades: " + habilidad);
}
// Funciónes para las estadistica de Pokemon
const pokeStats1 = (hp) =>{
    const hps = document.getElementById("hp");
    hps.innerHTML = ("HP: " + hp);
}
const pokeStats2 = (ataque) =>{
    const ataques = document.getElementById("ataque");
    ataques.innerHTML = ("Attack: " + ataque);
}
const pokeStats3 = (defensa) =>{
    const defensas = document.getElementById("defensa");
    defensas.innerHTML = ("Defense: " + defensa);
}
const pokeStats4 = (ataqueEspecial) =>{
    const ataquesEsp = document.getElementById("ataquEsp");
    ataquesEsp.innerHTML = ("Special-Attack: " + ataqueEspecial);
}
const pokeStats5 = (defensaEspecial) =>{
    const defensaEsp = document.getElementById("defensaEsp")
    defensaEsp.innerHTML = ("Special-Defense: " + defensaEspecial);
}
const pokeStats6 = (velocidad) =>{
    const velocidades = document.getElementById("velocidad");
    velocidades.innerHTML = ("Speed: " + velocidad);
}
const titleStats = () =>{       //Funcion para reemplazar el texto de html que esta en el id=stats por la palabra "Stats"
    const desplegar = document.getElementById("stats");
    desplegar.innerHTML = ("Stats");
}

// Funcion para limpiar toda la información al terminar de realizar la buqueda

const limpiarInformacion = () =>{
    const clean = document.getElementById("id");
    clean.innerHTML="";
    const clean2 = document.getElementById("name");
    clean2.innerHTML="";
    const clean3 = document.getElementById("altura");
    clean3.innerHTML="";
    const clean4 = document.getElementById("peso");
    clean4.innerHTML="";
    const clean5 = document.getElementById("tipo");
    clean5.innerText="";
    const clean6 = document.getElementById("movs");
    clean6.innerHTML="";
    const clean7 = document.getElementById("habil");
    clean7.innerHTML="";
    const clean8 = document.getElementById("hp");
    clean8.innerHTML="";
    const clean9 = document.getElementById("ataque");
    clean9.innerHTML="";
    const clean10 = document.getElementById("defensa");
    clean10.innerHTML="";
    const clean11 = document.getElementById("ataquEsp");
    clean11.innerHTML="";
    const clean12 = document.getElementById("defensaEsp");
    clean12.innerHTML="";
    const clean13 = document.getElementById("velocidad");
    clean13.innerHTML="";
    const desplegar = document.getElementById("stats");
    desplegar.innerHTML="";
}

// Funcion para limpiar la casilla de input despues de realizar la busqueda
const limpiarInput = () =>{
    document.getElementById("pokeName").value = "";
}
