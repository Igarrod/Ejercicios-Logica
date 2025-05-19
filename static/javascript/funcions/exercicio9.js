/**
 *  ###########################
 *  ## E J E R C I C I O   9 ##
 *  ###########################
 *
 *  A partir del array de personas deduce el animal que tienen más personas como mascota.
 *
 */

/* 
1. Entrar al array de mascotas
2. Mirar el .type de cada mascota
3. Contar qué .type se repite más veces


*/

import { pets } from "../datos/datosEnunciados.js";

export function animalMasRepetido() {
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

  let typeMasComun = "";
  let maxCount = 0;

  for (let typeMascota in typeCuenta) {
    if (typeCuenta[typeMascota] > maxCount) {
      maxCount = typeCuenta[typeMascota];
      typeMasComun = typeMascota;
    }
  }

  return typeMasComun;
}
