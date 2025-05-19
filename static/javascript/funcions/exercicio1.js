/**
 *  ###########################
 *  ## E J E R C I C I O   1 ##
 *  ###########################
 *
 *  Número total de infectados do array de persoas.
 *
 */

import { persons } from "../datos/datosEnunciados.js";

/**
 * - Contar o número de persoas infectadas
 *
 * - Teño que filtrar:
 *      si (persoas infectadas){
 *          { CONTO O AS PERSOAS }
 *      }
 *
 *  - Para recorrer un array utilizaréi un bucle 'for'
 */

export function numAfectados() {
  let numAfectados = 0;

  for (let contador = 0; contador < persons.length; contador++) {
    //console.log("persons[", contador, "]", persons[contador]);

    if (persons[contador].infected) {
      numAfectados++;
    }
  }

  return numAfectados;
}
