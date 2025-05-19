/**
 *  ###########################
 *  ## E J E R C I C I O   2 ##
 *  ###########################
 *
 *  Número total de sanos.
 *
 */

import { persons } from "../datos/datosEnunciados.js";

export function numSanos() {
  let numSanos = 0;
  
  for (let contador = 0; contador < persons.length; contador++) {
    if (persons[contador].infected == false) {
      numSanos++;
    }
  }

  return numSanos;
}
