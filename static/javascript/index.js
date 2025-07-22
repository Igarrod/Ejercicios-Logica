//EXERCICIO 11

import { personasConMascotasDe4Patas } from "./funcions/exercicio11.js";

let personasConMascotasDe4PatasExer11 = personasConMascotasDe4Patas();
console.log(
  "Exercicio 11: as personas que teñen animais de 4 patas son",
  personasConMascotasDe4PatasExer11
);

let refExer11 = document.querySelector(`[name='exer-11']`);
refExer11.after(personasConMascotasDe4PatasExer11);

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
