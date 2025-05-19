/**
 *  ###########################
 *  ## E J E R C I C I O   7 ##
 *  ###########################
 *
 *  Array de españoles con perro.
 *
 */

import { persons, pets } from "../datos/datosEnunciados.js";

export function espanhoisConCan() {
  let espanhoisCan = [];

  for (let contador = 0; contador < persons.length; contador++) {
    if (persons[contador].country === "ES") {
      for (let contador2 = 0; contador2 < pets.length; contador2++) {
        if (
          persons[contador].pet === pets[contador2].name &&
          pets[contador2].type === "perro"
        ) {
          espanhoisCan.push(persons[contador].name);
        }
      }
    }
  }
  return espanhoisCan;
}
