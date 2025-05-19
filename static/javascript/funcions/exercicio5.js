/**
 *  ###########################
 *  ## E J E R C I C I O   5 ##
 *  ###########################
 *
 *  Array con el nombre de todas las mascotas.
 *
 */

import { pets } from "../datos/datosEnunciados.js";

export function nomeMascotas() {
  let nomeDasMascotas = [];

  for (let contador = 0; contador < pets.length; contador++) {
    nomeDasMascotas.push(pets[contador].name);
  }
  return nomeDasMascotas;
}
