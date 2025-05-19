/**
 *  ###########################
 *  ## E J E R C I C I O   8 ##
 *  ###########################
 *
 *  Array con las personas. A mayores, este array debe incluír el objeto con los datos de su mascota
 *
 */

/*
1. Array con todas as persoas (persons)
2. Acceder ao .pet de cada persoa (ten o nome das mascotas)
3. No array pets, hai que acceder ao .type. Ten que coincidir o .pet do array persons e o .name do pets

*/
import { persons, pets } from "../datos/datosEnunciados.js";

export function personasDatosMascotas() {
  let personasDtoMascotas = [];

  for (let contador = 0; contador < persons.length; contador++) {
    for (let contador2 = 0; contador2 < pets.length; contador2++) {
      if (pets[contador].name === persons[contador].pet) {
        personasDtoMascotas.push({
          nombrePersona: persons[contador].name,
          mascota: { nombre: pets[contador].name, animal: pets[contador].type },
        });
        break;
      }
    }
  }

  let datosEnSerie = "";
  for (let valores of personasDtoMascotas) {
    //console.log("valores ", valores);
    datosEnSerie += `\n${valores.nombrePersona} tiene un ${valores.mascota.animal} que se llama ${valores.mascota.nombre}.`;
  }
  return datosEnSerie;
}
