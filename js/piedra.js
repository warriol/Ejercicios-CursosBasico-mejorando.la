/*
+ Programación Básica con Mejordandola: https://cursos.mejorando.la/
+ Script creado para el ejercicio de piedra, papel, tijera, lagarto, spock
+ ALumno: Wilson Denis Arriola @WilsonArriolaUY
+ Docente: John Freddy Vega @freddier
+ Octubre 2014
*/

// declaración de variables y array
var clic = 1;
var error = 0;
var ganador = 0; // Empate --> 1 jugador - 2 maquina

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opcionUsuario;
var opcionMaquina;
var resultado;
var tabla;
var ganadas = 0;
var perdidas = 0;
var empates = 0;

var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];

// Funciones

// Generar número aleatorio entre minimo y maximo
function aleatorio(minimo, maximo){
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

// comprobar el checkbox seleccionado
function comprobarCheckbox(){
	if(document.getElementById('ckbPiedra').checked){
		opcionUsuario = 0;
	}
	if(document.getElementById('ckbPapel').checked){
		opcionUsuario = 1;
	}
	if(document.getElementById('ckbTijera').checked){
		opcionUsuario = 2;
	}
	if(document.getElementById('ckbLagarto').checked){
		opcionUsuario = 3;
	}
	if(document.getElementById('ckbSpock').checked){
		opcionUsuario = 4;
	}
}

// jugar
function jugar(){
	comprobarCheckbox();
	//alert("ckb: " + opcionUsuario);
	buscarGanador();
}

// Buscar ganador
function buscarGanador(){
	// genero la opcion de la maquina
	opcionMaquina = aleatorio(0,4);

	// verifico que lo que el usuario ingreso este dentro de los parámetros requeridos
	if(0 <= opcionUsuario && opcionUsuario < 5){

		// Verifico el caos en que haya empate
		if(opcionUsuario == opcionMaquina){
			ganador = 0; // alert("Empate :|");
		}else{
			// bsuco al ganador

			//caso piedra
			//gana contra: tijera y lagarto
			if(opcionUsuario == piedra){
				if(opcionMaquina == tijera || opcionMaquina == lagarto){
					ganador = 1; // alert("Ganaste!!! :)");
				}else{
					ganador = 2; // alert("Perdiste... :(");	
				}
			}

			//caso papel
			//gana contra: piedra y spock
			if(opcionUsuario == papel){
				if(opcionMaquina == piedra || opcionMaquina == spock){
					ganador = 1; // alert("Ganaste!!! :)");
				}else{
					ganador = 2; // alert("Perdiste... :(");	
				}
			}

			//caso tijera
			//gana contra: papel y lagarto
			if(opcionUsuario == tijera){
				if(opcionMaquina == papel || opcionMaquina == lagarto){
					ganador = 1; // alert("Ganaste!!! :)");
				}else{
					ganador = 2; // alert("Perdiste... :(");	
				}
			}

			//caso lagarto
			//gana contra: papel y spock
			if(opcionUsuario == lagarto){
				if(opcionMaquina == papel || opcionMaquina == spock){
					ganador = 1; // alert("Ganaste!!! :)");
				}else{
					ganador = 2; // alert("Perdiste... :(");	
				}
			}

			//caso spock
			//gana contra: piedra y tijera
			if(opcionUsuario == spock){
				if(opcionMaquina == piedra || opcionMaquina == tijera){
					ganador = 1; // alert("Ganaste!!! :)");
				}else{
					ganador = 2; // alert("Perdiste... :(");	
				}
			}
		}


		if(ganador == 0){
			// empate
			resultado = '<ul id="alertaContenedorResultado"><li><div id="marco"><img src="img/' + opciones[opcionUsuario] + '.png"><br /><span>Jugador ' + opciones[opcionUsuario] + '</span></div></li><li><div id="marco"><img src="img/' + opciones[opcionMaquina] + '.png"><br /><span>Maquina ' + opciones[opcionMaquina] + '</span></div></li></ul><div id="alertaMensajeResultado"><span id="empate">EMPATE!!! :|</span></div>';
			empates ++;
		}else if(ganador == 1){
			// ganaste
			resultado = '<ul id="alertaContenedorResultado"><li><div id="marco"><img src="img/' + opciones[opcionUsuario] + '.png"><br /><span>Jugador ' + opciones[opcionUsuario] + '</span></div></li><li><div id="marco"><img src="img/' + opciones[opcionMaquina] + '.png"><br /><span>Maquina ' + opciones[opcionMaquina] + '</span></div></li></ul><div id="alertaMensajeResultado"><span id="ganador">GANASTE!!! :)</span></div>';
			ganadas ++;
		}else{
			// perdiste
			resultado ='<ul id="alertaContenedorResultado"><li><div id="marco"><img src="img/' + opciones[opcionUsuario] + '.png"><br /><span>Jugador ' + opciones[opcionUsuario] + '</span></div></li><li><div id="marco"><img src="img/' + opciones[opcionMaquina] + '.png"><br /><span>Maquina ' + opciones[opcionMaquina] + '</span></div></li></ul><div id="alertaMensajeResultado"><span id="perdedor">PERDISTE!!! :(</span></div>';
			perdidas ++;				
		}

		tabla = '<h2>Resumen</h2><div class="tablaResultados"><table><tr><td>Ganados</td><td>Perdidos</td><td>Empatados</td></tr><tr><td>' + ganadas + '</td><td>' + perdidas + '</td><td>' + empates + '</td></tr></table></div>';
		document.getElementById('alertasMensaje').innerHTML = resultado;
		document.getElementById('tabla').innerHTML = tabla;
		abrirAlertas();
		
	}else{
		alert("¿Que mierda elegiste?");
		error = 1;
	}

/*	if(error == 0){

		if(ganador == 0){
			// empate
			resultado = '<ul id="alertaContenedorResultado"><li><div id="marco"><img src="img/' + opciones[opcionUsuario] + '.png"><br /><span>Jugador ' + opciones[opcionUsuario] + '</span></div></li><li><div id="marco"><img src="img/' + opciones[opcionMaquina] + '.png"><br /><span>Maquina ' + opciones[opcionMaquina] + '</span></div></li></ul><div id="alertaMensajeResultado"><span id="empate">EMPATE!!! :|</span></div>';
			empates ++;
		}else if(ganador == 1){
			// ganaste
			resultado = '<ul id="alertaContenedorResultado"><li><div id="marco"><img src="img/' + opciones[opcionUsuario] + '.png"><br /><span>Jugador ' + opciones[opcionUsuario] + '</span></div></li><li><div id="marco"><img src="img/' + opciones[opcionMaquina] + '.png"><br /><span>Maquina ' + opciones[opcionMaquina] + '</span></div></li></ul><div id="alertaMensajeResultado"><span id="ganador">GANASTE!!! :)</span></div>';
			ganadas ++;
		}else{
			// perdiste
			resultado ='<ul id="alertaContenedorResultado"><li><div id="marco"><img src="img/' + opciones[opcionUsuario] + '.png"><br /><span>Jugador ' + opciones[opcionUsuario] + '</span></div></li><li><div id="marco"><img src="img/' + opciones[opcionMaquina] + '.png"><br /><span>Maquina ' + opciones[opcionMaquina] + '</span></div></li></ul><div id="alertaMensajeResultado"><span id="perdedor">PERDISTE!!! :(</span></div>';
			perdidas ++;				
		}

		tabla = '<h2>Resumen</h2><div class="tablaResultados"><table><tr><td>Ganados</td><td>Perdidos</td><td>Empatados</td></tr><tr><td>' + ganadas + '</td><td>' + perdidas + '</td><td>' + empates + '</td></tr></table></div>';
		document.getElementById('alertasMensaje').innerHTML = resultado;
		document.getElementById('tabla').innerHTML = tabla;
		abrirAlertas();
	}*/
}


function abrirAlertas(){
	document.getElementById("alertas").style.display='block';
}

function cerrarAlertas(){
	document.getElementById("alertas").style.display='none';
}

function reiniciar(){
	ganadas = 0;
	perdidas = 0;
	empates = 0;

	tabla = '<h2>Resumen</h2><div class="tablaResultados"><table><tr><td>Ganados</td><td>Perdidos</td><td>Empatados</td></tr><tr><td>' + ganadas + '</td><td>' + perdidas + '</td><td>' + empates + '</td></tr></table></div>';

	document.getElementById('tabla').innerHTML = tabla;
}

// Mostrar Ocultar
function ayuda(){
	if(clic==1){
		document.getElementById("contenedorAyuda").style.display='block';
		clic = clic + 1;
	} else{
		document.getElementById("contenedorAyuda").style.display='none';
		clic = 1;
	}
}