/**
 *  #############################
 *  ## E J E R C I C I O   1 1 ##
 *  #############################
 *
 *  Array con las personas que tienen animales de 4 patas
 *
 */
import { persons, pets, animals } from "../datos/datosEnunciados.js";

export function personasConMascotasDe4Patas() {
  let resultado = [];

  for (let contador = 0; contador < persons.length; contador++) {
    // Buscar el tipo de mascota
    for (let contador2 = 0; contador2 < pets.length; contador2++) {
      if (pets[contador2].name === persons[contador].pet) {
        // Si se encontró el tipo, buscar si tiene 4 patas
        for (let contador3 = 0; contador3 < animals.length; contador3++) {
          if (
            animals[contador3].kind === pets[contador2].type &&
            animals[contador3].legs === 4
          ) {
            resultado.push(persons[contador].name);
          }
        }
      }
    }
  }

  return resultado;
}
