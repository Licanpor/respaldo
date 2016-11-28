var submit = document.getElementById('submit');
var txt1 = document.getElementById('txt-1'); 



// function random(){
// 	var min = 3;
// 	var max = 10;
//     return Math.floor(Math.random()*(max-min+1)+min);
// };

var wordCount = function (){

	if(txt1.value==""){
		txt1.setAttribute('placeholder', '*o* Ingresa tu respuesta');//validacion de campo
		
		return false;
	}
	
	var arrayPalabras = txt1.value.trim().replace(/\s+/gi, ' ').split(' ');
	arrayPalabras  = _.uniq(arrayPalabras);//funcion de underscorejs.org para tomar solo las palabras una vez sin sus repeticiones.
	var conteoPalabras = arrayPalabras.length;
	console.log('el numero de palabras unicas es ' + conteoPalabras);
	console.log('el arreglo es ' + arrayPalabras);

	var list = [];
	var filtro = [];
	var arregloRep = [];//arreglo de repeticiones.
	var numero = [];
	var nuevoPar = [];

	arrayPalabras.forEach(function(valor, indice, array){
		console.log("En el índice " + indice + " hay este valor: " + valor);
		var filtro = function (word, count) {
		                return count >= 1 && word.length > 2 && word !== "a" && word !== "ante" && word != "bajo" 
		                && word !== "con" && word !== "contra" && word != "sobre" && word !== "para" && word !== "por" 
		                && word != "aquí" && word !== "ahí" && word !== "allí" && word != "así" && word != "encima" 
		                && word != "enfrente" && word != "acá" && word != "allá" && word != "también" && word != "aunque" 
		                && word != "tampoco" && word != "cómo" && word != "cuándo" && word != "dónde" && word != "quién" 
		                && word != "quien" && word != "como" && word != "según" && word != "sin" && word != "son" && word != "tras" 
		                && word != "se" && word != "la" && word != "el" && word != "las" && word != "los" && word != "es" && word != "son" 
		                && word != "cual" && word != "tal" && word !== "un" && word !== "una" && word !== "y" && word !== "e" && word !== "que"
		                && word != "unas" && word != "o" && word != "u" && word != "ora" && word != "mas" && word != "pero" && word != "sino" && word != "si" 
		                && word != "no" && word != "embargo" && word != "unos" && word != "su" && word != "aun" && word != "al";
		            }
		           
		// console.log(array);
		var numero = txt1.value.match(new RegExp( valor, "gi" )).length;//numero de repeticiones de una palabra
		console.log('la palabra "' + valor + '" se repite ' + numero + ' veces');
		if (numero > 5){
			var arreglo = [valor, numero];//
			arregloRep.push(numero);
			list.push(arreglo);// agregara a list [[palabra, tamañoDeFuente], [palabra, tamañoDeFuente], [palabra, tamañoDeFuente]...]
			// console.log('viejo list: ' + list);
		}
		
	});/*Ok. Justo tienes que filtrar las palabras luego de hacer el array de palabras unicas
Puedes recorrer el array con foreach e ir armando un nuevo array con las palabras filtradas
Y esas son las que vas a contar

Se me ocurre que puedes tener un array de palabras "filtro" y hacer un match entre el elemento actual y el array de filtro. 
Si el valor actual coincide con alguna palabra filtro puedes usar la funcion "continue" para saltarte esa iteracion del foreach

El match con regex*/

	var masRepeticion = _.max(arregloRep);
	console.log('la repeticion mas alta es ' + masRepeticion);

	//normalizacion de tamaño de fuente asignado

	if(masRepeticion !== 10){
		var coe = 10/masRepeticion;

		//forEach para sustituir el tamaño de la letra
		list.forEach(function(par, index){
			console.log('el par es ' + par[0] + ' ' + par[1]);
			// console.log('sou un index ' + index);
		// el numero entre corchetes corresponde al indice del arreglo par. 
		//Siempre sera solamente 0 y 1 puesto que no hay mas elementos: [palabra,  tamañoDeFuente].
			var tamañoFuente = coe*par[1];
			console.log('soy una tamaño de fuente ' + tamañoFuente);
			 if(tamañoFuente < 3){
			 	tamañoFuente = 3;
			 }
			// var nuevoPar = [];
			// list.push(nuevoPar);
			// console.log('nuevo list: ' + list);
			
		});
	}
	
	WordCloud(document.getElementById('canvas'), { list: list } );

}

submit.addEventListener('click', wordCount);


