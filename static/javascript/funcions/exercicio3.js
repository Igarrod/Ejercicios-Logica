/**
 *  ###########################
 *  ## E J E R C I C I O   3 ##
 *  ###########################
 *
 *  Número total de infectados en el array de países.
 *
 */

import { countries } from "../datos/datosEnunciados.js";

export function numPersoasInfectadasPais() {
  let numPersoasInfectadasTodosOsPaises = 0;

  for (let contador = 0; contador < countries.length; contador++) {
    numPersoasInfectadasTodosOsPaises =
      numPersoasInfectadasTodosOsPaises + countries[contador].infected;
  }

  return numPersoasInfectadasTodosOsPaises;
}
