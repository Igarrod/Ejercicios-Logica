/**
 *  #############################
 *  ## E J E R C I C I O   1 0 ##
 *  #############################
 *
 *  Número total de patas de las mascotas de las personas.
 *
 */

/*
1. Entrar al array de pets, y contar cuántas hay de cada tipo (type) (igual que en el 9)
2. Entrar en el array animals y consultar cuántas patas (legs) tiene cada animal (kind)
3. Multiplicar las patas por la cantidad de mascotas
4. Sumar todo
*/

import { pets, animals } from "../datos/datosEnunciados.js";

export function patasTotales() {
  let typeCuenta = {};

  //1: Cuenta cuántas mascotas hay de cada tipo en el array pets
  for (let contador = 0; contador < pets.length; contador++) {
    let typeMascota = pets[contador].type;

    if (typeCuenta[typeMascota]) {
      typeCuenta[typeMascota]++;
    } else {
      typeCuenta[typeMascota] = 1; // Si no existe, inicializamos en 1
    }
  }

  let totalPatas = 0;

  //2: Suma las patas basándose en la cantidad de cada tipo
  for (let contador2 = 0; contador2 < animals.length; contador2++) {
    let animal = animals[contador2];

    //Verifica si el tipo de animal existe en el typeCuenta
    if (typeCuenta[animal.kind]) {
      totalPatas = totalPatas + typeCuenta[animal.kind] * animal.legs;
    }
  }

  return totalPatas;
}
