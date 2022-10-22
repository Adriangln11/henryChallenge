/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function pedirComida(array) {
  // la funcion recibe un array de objetos en donde se detalla nombre y tipo de dieta de los integrantes de un meeting
  // debe retornar un objeto que diga cuantos menus de que tipo de dieta hay que pedir
  // (a fines practicos solo hay dieta "standard" y "vegan")
  // Por ej:
  // pedirComida([{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}])
  // retorna {standard: 2, vegan: 1}
  // Tu código aca:
  let standard = 0;
  let vegan = 0;
  let dietas = array.map(function(i){
    if (i.dieta == "standard") {
      standard ++;
    }else if(i.dieta == "vegan"){
      vegan ++;
    }
  });
  return {
    standard: standard,
    vegan: vegan
  };
}

// No modifiques nada debajo de esta linea //

module.exports = pedirComida



// const integrantes = [{nombre: "Harry", dieta: "standard"}, {nombre: "Luna", dieta: 'vegan'}, {nombre: "Goyle", dieta: "standard"}];
// let standard = 0;
// let vegan = 0;
// let dietas = integrantes.map(function(i){
//   if (i.dieta == "standard") {
//     standard ++;
//   }else if(i.dieta == "vegan"){
//     vegan ++;
//   }
// });

// console.log(standard, vegan);

