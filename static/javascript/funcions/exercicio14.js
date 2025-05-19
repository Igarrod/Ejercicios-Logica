/**
 *  #############################
 *  ## E J E R C I C I O   1 4 ##
 *  #############################
 *
 *  Número de infectados totales (en el array de países) de los países con mascotas de ocho patas.
 *
 */

import { persons, pets, animals, countries } from "../datos/datosEnunciados.js";

export function totalInfectadosMascotas8Patas() {
  let paises = [];

  for (let contador = 0; contador < persons.length; contador++) {
    // Buscar el tipo de mascota
    for (let contador2 = 0; contador2 < pets.length; contador2++) {
      if (pets[contador2].name === persons[contador].pet) {
        // Buscar si ese tipo tiene 8 patas
        for (let contador3 = 0; contador3 < animals.length; contador3++) {
          if (
            animals[contador3].kind === pets[contador2].type &&
            animals[contador3].legs === 8
          ) {
            paises.push(persons[contador].country);
          }
        }
      }
    }
  }

  // Sumar infectados
  let total = 0;
  for (let contador4 = 0; contador4 < countries.length; contador4++) {
    for (let contador5 = 0; contador5 < paises.length; contador5++) {
      if (countries[contador4].code === paises[contador5]) {
        total += countries[contador4].infected;
      }
    }
  }

  return total;
}
