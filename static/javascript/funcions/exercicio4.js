/**
 *  ###########################
 *  ## E J E R C I C I O   4 ##
 *  ###########################
 *
 *  País con más infectados.
 *
 */

import { countries } from "../datos/datosEnunciados.js";

/*export function numInfectadosPais() {
  let paisMaisInfectadosNumero = 0;

  for (let contador = 0; contador < countries.length; contador++) {
    if (paisMaisInfectadosNumero < countries[contador].infected) {
      paisMaisInfectadosNumero = countries[contador].infected;
    }
  }

  return paisMaisInfectadosNumero;
}
*/

export function numInfectadosPais() {
  let maisInfectados = countries[0];

  for (let contador = 0; contador < countries.length; contador++) {
    if (maisInfectados.infected < countries[contador].infected) {
      maisInfectados = countries[contador];
    }
  }

  return { name: maisInfectados.name, infected: maisInfectados.infected };
}

/*
export function paisConMaxNumInfectados() {
  let cantidadInfectadosPorPais = 0;
  let paisConNumMaxInf = "";
  for (let contador = 0; contador < countries.length; contador++) {
    if (cantidadInfectadosPorPais < countries[contador].infected) {
      cantidadInfectadosPorPais = countries[contador].infected;
      paisConNumMaxInf = countries[contador];
    }
  }

  return paisConNumMaxInf;
}

*/
