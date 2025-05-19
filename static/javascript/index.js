//EXERCICIO 1

import { numAfectados } from "./funcions/exercicio1.js";

let numAfectadosExer1 = numAfectados();
console.log("Exercicio 1: Número de persoas infectadas ", numAfectadosExer1);

let refExer1 = document.querySelector(`[name='exer-1']`);
refExer1.after(`${numAfectadosExer1}`);

//EXERCICIO 2

import { numSanos } from "./funcions/exercicio2.js";

let numSanosExer2 = numSanos();
console.log("Exercicio 2: Número de persoas sanas ", numSanosExer2);

let refExer2 = document.querySelector(`[name='exer-2']`);
refExer2.after(numSanosExer2);

//EXERCICIO 3

import { numPersoasInfectadasPais } from "./funcions/exercicio3.js";

let numPersoasInfectadasPaisExer3 = numPersoasInfectadasPais();
console.log(
  "Exercicio 3: Número de persoas infectadas nos países do array ",
  numPersoasInfectadasPaisExer3
);

let refExer3 = document.querySelector(`[name='exer-3']`);
refExer3.after(numPersoasInfectadasPaisExer3);

//EXERCICIO 4

import { numInfectadosPais } from "./funcions/exercicio4.js";

let paisMaisInfectadosExer4 = numInfectadosPais();
console.log(
  "Exercicio 4: O país con máis infectados é ",
  paisMaisInfectadosExer4.name
);

let refExer4 = document.querySelector(`[name='exer-4']`);
refExer4.after(paisMaisInfectadosExer4.name);

//EXERCICIO 5

import { nomeMascotas } from "./funcions/exercicio5.js";

let nomeMascotasExer5 = nomeMascotas();
console.log("Exercicio 5: os nomes das mascotas son ", nomeMascotasExer5);

let refExer5 = document.querySelector(`[name='exer-5']`);
refExer5.after(nomeMascotasExer5);

//EXERCICIO 6

import { ArrayPersoasInfectadas } from "./funcions/exercicio6.js";

let arrayInfectadosExer6 = ArrayPersoasInfectadas();
console.log("Exercicio 6: as persoas infectadas son ", arrayInfectadosExer6);

let refExer6 = document.querySelector(`[name='exer-6']`);
refExer6.after(arrayInfectadosExer6);

//EXERCICIO 7

import { espanhoisConCan } from "./funcions/exercicio7.js";

let espanhoisConCanExer7 = espanhoisConCan();
console.log("Exercicio 7: os españois con can son ", espanhoisConCanExer7);

let refExer7 = document.querySelector(`[name='exer-7']`);
refExer7.after(espanhoisConCanExer7);

//EXERCICIO 8

import { personasDatosMascotas } from "./funcions/exercicio8.js";

let personasDatosMascotasExer8 = personasDatosMascotas();
console.log(
  "Exercicio 8: o nome das personas e os datos das súas mascotas son ",
  personasDatosMascotasExer8
);

let refExer8 = document.querySelector(`[name='exer-8']`);
refExer8.after(personasDatosMascotasExer8);

//EXERCICIO 9

import { animalMasRepetido } from "./funcions/exercicio9.js";

let animalMasRepetidoExer9 = animalMasRepetido();
console.log("Exercicio 9: O animal máis repetido é ", animalMasRepetidoExer9);

let refExer9 = document.querySelector(`[name='exer-9']`);
refExer9.after(animalMasRepetidoExer9);

//EXERCICIO 10

import { patasTotales } from "./funcions/exercicio10.js";

let patasMascotasExer10 = patasTotales();
console.log("Exercicio 10: O número total de patas é", patasMascotasExer10);

let refExer10 = document.querySelector(`[name='exer-10']`);
refExer10.after(patasMascotasExer10);

//EXERCICIO 11

import { personasConMascotasDe4Patas } from "./funcions/exercicio11.js";

let personasConMascotasDe4PatasExer11 = personasConMascotasDe4Patas();
console.log(
  "Exercicio 11: as personas que teñen animais de 4 patas son",
  personasConMascotasDe4PatasExer11
);

let refExer11 = document.querySelector(`[name='exer-11']`);
refExer11.after(personasConMascotasDe4PatasExer11);

//EXERCICIO 12
/*
import {  } from "./funcions/exercicio12.js";

let  = ;
console.log("Exercicio 12: as personas españolas non infectadas son", );

let refExer12 = document.querySelector(`[name='exer-12']`);
refExer12.after(); 
*/

//EXERCICIO 13

import { paisesConLoros } from "./funcions/exercicio13.js";

let paisesConLorosExer13 = paisesConLoros();
console.log(
  "Exercicio 13: os países que teñen persoas con loros como mascota son",
  paisesConLorosExer13
);

let refExer13 = document.querySelector(`[name='exer-13']`);
refExer13.after(paisesConLorosExer13);

//EXERCICIO 14

import { totalInfectadosMascotas8Patas } from "./funcions/exercicio14.js";

let totalInfectadosMascotas8PatasExer14 = totalInfectadosMascotas8Patas();
console.log(
  "Exercicio 14: os infectados dos países con mascotas de 8 patas son",
  totalInfectadosMascotas8PatasExer14
);

let refExer14 = document.querySelector(`[name='exer-14']`);
refExer14.after(totalInfectadosMascotas8PatasExer14);
