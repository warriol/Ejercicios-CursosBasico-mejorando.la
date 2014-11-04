/*
+ Programación Básica con Mejordandola: https://cursos.mejorando.la/
+ DOM - funciones - objetos
+ ALumno: Wilson Denis Arriola @WilsonArriolaUY
+ Docente: John Freddy Vega @freddier
+ Octubre 2014
*/


// DOCUMENT OBJECT MODEL

// navigator: Opciones especiales del navegador
// windows: controla la ventana (ancho, alto)
// document: controla el codigo html

// alert("hola");
// Objeto
//		Variable
//		Funcion

// document.write("Hola mamá!");
// var pi = 3.141592654;
// pi = Math.floor(pi); // piso
// pi = Math.ceil(pi); // techo
//document.write(pi);

// var maxima;
// var numeros = [5,23,4,5,12,23,100];

// maxima = Math.max(5,23,4,5,12,23,100);

// document.write(maxima);

// acceder a ubicacion gps

// function mostrar(pos){
//	document.write(pos.coords.latitude + "," + pos.coords.longitude);
// }

// navigator.geolocation.getCurrentPosition(mostrar);

// variables de asignacion por valor
// variables de asignacion por referencia

/*
function Pokemon(nombrePokemon, vidaPoke, ataPoke, tipoPoke, debiPoke){
	var estructuraPokemon = {
		nombre: nombrePokemon,
		vida: vidaPoke,
		ataque: ataPoke,
		datos: {tipo: tipoPoke, debilidad: debiPoke}
	};

	return estructuraPokemon;
}


// Contrucción del objeto
var pikachu = Pokemon("Pikachu", 100, 55, "Electrico", "Tierra");

var bulbasaur = Pokemon("Bulbasaur", 90, 50, "Tierra", "Electrico");

//	bulbasaour.nombre = "Bulsasaour";
//	bulbasaour.tipo = "Tierra";
//	bulbasaour.vida = 90;
//	bulbasaour.ataque = 50;

document.writeln(bulbasaur.datos.tipo);
document.writeln(pikachu.vida);

console.log(bulbasaur)
*/


function Pokemon (n,v,a,g) {
	this.grito = g;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.rutaImg = "img/" + n + ".png";
	this.gritar = function(){
		alert(this.grito);
	}
}

function inicio () {
	var pokemon = new Pokemon("Bulbasaur", 90, 45, "Bulbasaur!")
	var pokemon2 = new Pokemon("Pikachu", 100, 55, "Pika!")
	// pikachu.vida = pikachu.vida - 13;

	// pikachu.gritar();

	
//  	var it = document.getElementsByTagName('body')[0];
//		var ob = document.getElementById('txt');
//		console.log( (it.innerText != undefined) ? ob.innerText : ob.textContent );
	
	

	// nombrePokemon.innerText = pikachu.nombre; // chrome
	// nombrePokemon.innerHTML = pikachu.nombre; // chrome & FF
	nombrePokemon.textContent = pokemon.nombre; // chrome

	datos = '<img src="' + pokemon.rutaImg + '" height=\"42\" width=\"42\" /> <br />Su vida es: ' + pokemon.vida + '<br />Su ataque es: ' + pokemon.ataque + '<br />Su grito es: ' + pokemon.grito;

	// datosPokemon.textContent = datos; // colo el texto en forma plana sin reconocer etiquetas html
	// datosPokemon.innerText = datos; // Lo mismo que antes, pero no funciona en FF
	datosPokemon.innerHTML = datos;
}