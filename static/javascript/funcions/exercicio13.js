/**
 *  #############################
 *  ## E J E R C I C I O   1 3 ##
 *  #############################
 *
 *  Array de países que tienen personas con loros como mascota.
 *
 */

import { persons, pets, countries } from "../datos/datosEnunciados.js";

export function paisesConLoros() {
  let paisesLoros = [];

  for (let contador = 0; contador < persons.length; contador++) {
    // Verificar si la mascota es un loro
    for (let contador2 = 0; contador2 < pets.length; contador2++) {
      if (
        pets[contador2].name === persons[contador].pet &&
        pets[contador2].type === "loro"
      ) {
        // Buscar el país de la persona
        for (let contador3 = 0; contador3 < countries.length; contador3++) {
          if (persons[contador].country === countries[contador3].code) {
            paisesLoros.push(countries[contador3].name);
          }
        }
      }
    }
  }
  return paisesLoros;
}
