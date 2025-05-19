/**
 *  ###########################
 *  ## E J E R C I C I O   6 ##
 *  ###########################
 *
 *  Array con las personas infectadas del array de personas.
 *
 */

import { persons } from "../datos/datosEnunciados.js";

export function ArrayPersoasInfectadas() {
  let arrayInfectados = [];

  for (let contador = 0; contador < persons.length; contador++) {
    if (persons[contador].infected) {
      arrayInfectados.push(persons[contador].name);
    }
  }
  return arrayInfectados;
}
