// // var menu = ["Productor","Ventas", "Contacto"];

// // document.write(menu);
// // document.write(menu[2]);

// // var foda = [ ["Fortalezas", "Oportunidades"], ["Debilidades", "Amenazas"] ]

// function explosion(){
// 	alert("BOOM!!");
// 	document.write("<h1>BOOM! Elegiste un área minada :(</h1>");
// }

// function ganaste(){
// 	document.write("GANASTE!! :)");
// }

// // 1 = Bomba, 0 = No hay bomba
// var campo = [ [ 1 , 0 , 0 ] ,
// 			  [ 0 , 1 , 0 ] ,
// 			  [ 1 , 1 , 1 ] ];

// /*
// // prueba
// if(campo[1][2] == 1){
// 	explosion();
// }else{
// 	ganaste();
// }
// */

// var textos = ["cesped", "bomba"]

// var x, y;

// alert("Estas en un campo minado.\n Elije una posición entre el 0 y el 2 paa X y para Y");

// x = prompt("Posición en X? (entre 0 y 2)");
// y = prompt("Posición en Y? (entre 0 y 2)");


// /*
// // prueba dle juego
// var posicion = campo[x][y];

// document.write( textos[posicion]);
// */

// if (x <= 2 && y <= 2){
// 	var posicion = campo[x][y];
// 	document.write("Elegiste " + textos[posicion] + "<br />");
// 	if (posicion == 1){
// 		explosion();
// 	}else{
// 		ganaste();
// 	}
// }else{
// 	document.write("Te saliste del campo!");
// 	explosion();
// }


// Cramos de nuevo el jugeo bomba pero esta vez serán asigandas de forma aleatoria

// Generar número aleatorio entre minimo y maximo
function aleatorio(minimo, maximo){
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

function explosion(){
	alert("BOOM!!");
	document.write("<h1>BOOM! Elegiste un área minada :(</h1>");
}

function ganaste(){
	document.write("GANASTE!! :)");
}

// 1 = Bomba, 0 = No hay bomba
var campo = [ [ aleatorio(0,1) , aleatorio(0,1) , aleatorio(0,1) ] ,
			  [ aleatorio(0,1) , aleatorio(0,1) , aleatorio(0,1) ] ,
			  [ aleatorio(0,1) , aleatorio(0,1) , aleatorio(0,1) ] ];


var textos = ["cesped", "bomba"]

var x, y;

alert("Estas en un campo minado.\n Elije una posición entre el 0 y el 2 paa X y para Y");

x = prompt("Posición en X? (entre 0 y 2)");
y = prompt("Posición en Y? (entre 0 y 2)");

if (x <= 2 && y <= 2){
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br />");
	if (posicion == 1){
		explosion();
	}else{
		ganaste();
	}
}else{
	document.write("Te saliste del campo!");
	explosion();
}

document.write("<br>Elcampo en el que jugaste se veía así (los 1 indican bombas) <br>" +
				campo[0][0] + " - " + campo[0][1] + " - " + campo[0][2] + "<br>" +
				campo[1][0] + " - " + campo[1][1] + " - " + campo[1][2] + "<br>" +
				campo[2][0] + " - " + campo[2][1] + " - " + campo[2][2]);