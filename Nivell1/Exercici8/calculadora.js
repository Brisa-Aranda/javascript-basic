// Exercici 8
// Crea una funció anomenada calculadora que tingui com a entrada
// els següents paràmetres: operador, valor1 i valor2. 
// Estructura de la funció que faci sumes, restes i multiplicacions.
//El resultat haurà de ser mostrar per pantalla.


// 			function calculadora( __, __, __)
// 			{
// 			……...
// 			}

// 			var resultat = calculadora('resta',40,20);


function calculadora(operador, valor1, valor2) {
      var valor1 = parseInt(prompt('Introduce el primer número'));
      var valor2 = parseInt(prompt('Introduce el segundo número'));
      var operador = prompt('¿Qué operación deseas realizar?');
      switch (operador) {
            case "suma":
                  return valor1 + valor2;
                  break;
            case "resta":
                  return valor1 - valor2;
                  break;
            case "multiplica":
                  return valor1 * valor2;
                  break;
      }
}
alert(calculadora('resta', 40, 20));