// alert("hola");
var tablero, direccion;

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};

var fondo = {
	fondoAncho: 500,
	fondoAlto: 500,
	imagenURL: "img/fondo.png",
	imagenOK: false // false: la imagen no cargó, true: la imagen ya cargó
};

var tifis = {
	x: 0,
	y: 0,
	frenteURL: "img/diana-frente.png",
	frenteOK: false, // false: la imagen no cargó, true: la imagen ya cargó
	atrasURL: "img/diana-atras.png",
	atrasOK: false, // false: la imagen no cargó, true: la imagen ya cargó
	derURL: "img/diana-der.png",
	derOK: false, // false: la imagen no cargó, true: la imagen ya cargó
	izqURL: "img/diana-izq.png",
	izqOK: false, // false: la imagen no cargó, true: la imagen ya cargó
	velocidad: 50
};

var liz = {
	x: 400,
	y: 200,
	lizURL: "img/liz.png",
	lizOK: false
}

function inicio() {
	// obtenemos el canvas del html
	var canvas = document.getElementById("campo");
	// creamos nuestro contexto
	tablero = canvas.getContext("2d");
	
	//--------------dibujo el fondo y explico las funciones
	//--------------de ahroa en mas son las mismas ya no las explico para ahorrar espacio
	// objeto de tipo img
	fondo.imagen = new Image();	// new Image() propiedad de Json para asignar atributos de imagenes (<img>)
	// cargamos la imagen, pero todavía no la muestra
	fondo.imagen.src = fondo.imagenURL; // asigno al atributo imagen la fuente de la imagen

	// javascript es mas rapido al ejecutar instrucciones de lo que se puede cargar una imagen
	// por chica que sea siempre tarda mas, por ello debemos llamar a un metodo (onload) que
	// se encargue de "avisarnos" cuadno la imagen se haya cargado y la dibuje, para ello, cuando
	// onload se active, llama a la función dibujarFondo() la que se encarga ahora si de dibujar el fondo
	fondo.imagen.onload = confirmarFondo; // confirmamos si la imagen ya se cargó

	//--------------dibujo tifis
	//-frente
	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;
	//-atras
	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;
	//-izq
	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;
	//-der
	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	liz.lizy = new Image();
	liz.lizy.src = liz.lizURL;
	liz.lizy.onload = confirmarLiz;



	// var m = document.getElementById("mover");
	// m.addEventListener("click", movimiento);
	document.addEventListener("keydown", teclado);
}

function teclado (datos) {
	// console.log(datos);
	/*if(datos.keyCode == 38){
		alert("arriba");
	}*/
	// guardo el codigo de la tecla orpimida
	var codigo = datos.keyCode;

	if(codigo == teclas.UP){
		if(tifis.y >= tifis.velocidad){ // si restar velocidad a valory es mayor a cero muevo.
			if(tifis.y == 250){
				if(tifis.x == 150 || tifis.x > 200){
					tifis.y -= tifis.velocidad;
				}
			}else if(tifis.y == 400){
				if(tifis.x < 150){
					tifis.y -= tifis.velocidad;
				}
			}else{
				tifis.y -= tifis.velocidad;
			}
		}
	}
	if(codigo == teclas.DOWN){
		if(tifis.y < (fondo.fondoAlto - tifis.velocidad)){
			if(tifis.y == 150){
				if(tifis.x > 100){
					tifis.y += tifis.velocidad;	
				}
			}else if(tifis.y == 300){
				if(tifis.x < 150){
					tifis.y += tifis.velocidad;	
				}
			}else{
				tifis.y += tifis.velocidad;
			}
		}
	}
	if(codigo == teclas.LEFT){
		if(tifis.x >= tifis.velocidad){
			if(tifis.x == 250){
				if(tifis.y == 250 || tifis.y == 300 || tifis.y >= 400){
					tifis.x -= tifis.velocidad;
				}
			}else if(tifis.y == 200){
				if(tifis.x != 150){
					tifis.y += tifis.velocidad;
				}				
			}else{
				tifis.x -= tifis.velocidad;
			}
		}
	}
	if(codigo == teclas.RIGHT){
		if(tifis.x < (fondo.fondoAncho - tifis.velocidad)){
			if(tifis.x == 100){
				if(tifis.y != 350){
					tifis.x += tifis.velocidad;
				}
			}else if(tifis.x == 150){
				if(tifis.y > 200){
					tifis.x += tifis.velocidad;
				}
			}else{
				tifis.x += tifis.velocidad;
			}
		}
	}

	// muestro valores de X e Y
	document.getElementById("valorx").value = "valor tifis.x: " + tifis.x;
	document.getElementById("valory").value = "valor tifis.y: " + tifis.y;

	direccion = codigo;
	dibujar();
}

function confirmarLiz () {
	liz.lizOK = true;
	dibujar();
}

function confirmarFondo() {
	fondo.imagenOK = true;
	dibujar();
}

function confirmarFrente() {
	tifis.frenteOK = true;
	dibujar();
}
function confirmarAtras() {
	tifis.atrasOK = true;
	dibujar();
}
function confirmarDer() {
	tifis.derOK = true;
	dibujar();
}
function confirmarIzq() {
	tifis.izqOK = true;
	dibujar();
}

function dibujar () {
	// capa 1: fondo
	if(fondo.imagenOK == true){
		// para dibujar imagene llamo al método "drawImage", como parametros le paso el objeto imagen y la posición inicial
		tablero.drawImage(fondo.imagen, 0, 0);
	}

	// capa 2: tifis
	var tifiDibujo = tifis.frente;
	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK){
		if(direccion == teclas.UP){
			tifiDibujo = tifis.atras;
		}
		if(direccion == teclas.DOWN){
			tifiDibujo = tifis.frente;
		}
		if(direccion == teclas.LEFT){
			tifiDibujo = tifis.izq;
		}
		if(direccion == teclas.RIGHT){
			tifiDibujo = tifis.der;
		}

		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	}

	// capa 3: liz
	if(liz.lizOK){
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	}
}

/*
function movimiento () {
	tifis.x += 10;
	dibujar();
}
*/