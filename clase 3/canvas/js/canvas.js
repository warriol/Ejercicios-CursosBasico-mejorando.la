/*
+ Programación Básica con Mejordandola: https://cursos.mejorando.la/
+ Clase 3 - canvas
+ ALumno: Wilson Denis Arriola @WilsonArriolaUY
+ Docente: John Freddy Vega @freddier
+ Octubre 2014
*/

// alert("fuera");
// function inicio(){
// 	alert("dentro");
// }
var dibujo, lienzo, t, b;
var dibujoT, lienzoT;
function inicio(){
	// dibujo con freddy vega
    t = document.getElementById("usuario"); // numero de lineas ingresado por el usaurio
    b = document.getElementById("dibujalo"); // boton

	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");
	dibujoMarco(lienzo);
	dibujoCirculo(lienzo);
	// dibujoGrilla(lienzo); // estas rayas las dibujará el usuario dependiendo de la cantidad q elija

	// comienzo la tarea, dibujar las lineas diagnoales y pintar el circulo
	dibujoT = document.getElementById("tarea");
	lienzoT = dibujoT.getContext("2d");
	dibujoMarco(lienzoT);
	dibujoCirculo(lienzoT);
	dibujoGrillaDiagonal(lienzoT);

	b.addEventListener("click", dibujoGrilla);

/*
	lienzo.beginPath(); // comienza un nuevo traxo y se le puede cmabair el color
	lienzo.strokeStyle = "#00AA00";
	lienzo.moveTo(100,100); // moverse (x, y)
	lienzo.lineTo(100,200); // linea (x, y)
	lienzo.stroke();
	lienzo.closePath();
*/

}

function dibujoMarco (l) {
	// dibujo un marco
	l.strokeStyle = "#F00"; // color del borde
	l.fillStyle = "#0826EB"; // color de relleno
	l.moveTo(0,0); // (x, y)
	l.lineTo(300,0);
	l.lineTo(300,300);
	l.lineTo(0,300);
	l.lineTo(0,0);
	l.stroke(); // dibujo borde
	l.fill(); // pinto relleno
}

function dibujoCirculo (l) {
	l.beginPath();
	l.strokeStyle = "#00F"
	l.fillStyle = "#000";
	l.arc(150, 150, 100, (Math.PI * 2), false); // (X, Y, radio, radianes, en sentido del reloj)
	l.closePath();
	l.stroke(); // dibujo borde
	l.fill(); // pinto relleno
}

function dibujoGrilla () {
	l = lienzo; // lienzo como variables globar (para no renombrar las l)
	var rayas = Number(t.value);


	var ancho = 300, alto = 300; // alto y ancho del lienzo
	var linea;
	var separacion = ancho / rayas; //30; // separación entre lineas
	var limiteX = ancho / separacion; // espacio entre lineas X
	var limiteY = alto / separacion; // espacio entre lineas Y

	l.strokeStyle = "#ff0";

	// lineas verticales
	for(linea = 0; linea <= limiteX; linea++){
		l.beginPath();
		l.moveTo(linea * separacion, 0);
		l.lineTo(linea * separacion, 300);
		l.stroke();
		l.closePath; // para comenzar desde cero, sino serían diagonales
	}

	// lineas horizonatles
	for(linea = 0; linea <= limiteY; linea++){
		l.beginPath();
		l.moveTo(0, linea * separacion);
		l.lineTo(300, linea * separacion);
		l.stroke();
		l.closePath;
	}
}

function dibujoGrillaDiagonal (l) {
	var ancho = 300, alto = 300; // alto y ancho del lienzo
	var linea;
	var separacion = 15; // separación entre lineas
	var limiteX = ancho / separacion; // espacio entre lineas X
	var limiteY = alto / separacion; // espacio entre lineas Y

	l.strokeStyle = "#ff0";

	// diagnoal izquierda-abajo a derecha-arriba
	for(linea = 0; linea <= limiteX; linea++){
		l.beginPath();
		l.moveTo(0, linea * separacion);
		l.lineTo(linea * separacion,0);
	 	l.moveTo((linea+1) * separacion, 300); // le sumo 1 a linea para que no se repita la diagnoal (0,300)
	 	l.lineTo(300, (linea +1)* separacion);
		l.stroke();
		l.closePath; // para comenzar desde cero, sino serían diagonales
		// coordenadas.innerHTML += "moveTo: 0 ," + (linea * separacion) + " -- lineTo: " + (linea * separacion) + ", 0<br>";
		// coordenadas2.innerHTML += "moveTo: " + (linea * separacion) + ", 300 -- lineTo: 300," + (linea * separacion) + "<br>";
	}

	// diagnoal derecha-abajo a izquierda-arriba
	for(linea = 0; linea <= limiteY; linea++){
		l.beginPath();
		l.moveTo(linea * separacion, 300);
		l.lineTo(0, alto - (linea * separacion));
		l.moveTo(300, linea * separacion);
		l.lineTo(alto - (linea * separacion), 0);
		l.stroke();
		l.closePath;
		// coordenadas.innerHTML += "moveTo: " + (linea * separacion) + ", 300 -- lineTo: 0, " + (alto - (linea * separacion)) + "<br>";
		// coordenadas2.innerHTML += "moveTo: " + (linea * separacion) + ", 300 -- lineTo: 300," + (linea * separacion) + "<br>";
	}
}