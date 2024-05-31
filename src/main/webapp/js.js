/**
 * 
 */
var letras = []

var palabraAdivinada = []
var palabra=[]

function introducirLaPalabra() {
	palabra = prompt ("Introduce la palabra a adivinar");
	/*se crea un array lleno de * que sea igual al tamaño de la palabra*/
	palabraAdivinada = palabra.split("");
	palabraAdivinada.fill("*");
	palabra=palabra.split("");
	/*elimino todas las letras*/
	letter = []
	/*muestro los cuadros para que el usuario vea la longitud de la palabra*/
	mostrar()
	
}
function pedirLaLetra() {
	let letra;
	do
		letra = prompt("Introduce una letra")
		/* analizar si tiene un número O si tiene varias letras O si está repetida O si está vacía*/
	while (Number(letra) || letra.length > 1 || repe(letra) || letra == "")
	

	/*añadir letra al array para que no se repita */
	letras.push(letra);
	comprobarLetras(letra);
}

function mostrar() {
  let texto=""
  palabraAdivinada.forEach(function (i) {
		if (i != "*")
			texto = texto + '<p>' +i+ "</p>"
		else
			texto = texto + "*"
	 })
	texto="<p>"+texto+"</p>"
	 document.getElementById("palabra").innerHTML=(texto)
	 document.getElementById("lugar").innerHTML=(texto)
}


function comprobarLetras(letra){
	/*letra por letra la palabra*/
	for (i=0; i<palabra.length; i++){
		if (palabra[i]==letra){
			alert ("Has acertado");
			palabraAdivinada[i]=letra;
			mostrar()
			/*mira si hay algun * */
			if (!palabraAdivinada.some((value)=>value=="*"))
				alert("Has ganado");
		}
	}
	if (!palabra.some((value)=>value==letra))
		alert("Has fallado")
}



