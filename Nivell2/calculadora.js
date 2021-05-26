// Nivell 2
// Aprofita la funció "calculadora" de l'exercici 
//  per crear una calculadora completa amb opcions per sumar, restar, 
//   i dividir. Hauràs de controlar el Zero com a denominador d'una 
//   divisió.


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
            case "divide":
                  return valor1 / valor2;
                  break;
            default:    
                  alert('Operador incorrecto');
                  break; 
      }
}
alert(calculadora('resta', 40, 20));