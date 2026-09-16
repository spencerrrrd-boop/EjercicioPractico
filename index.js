let nombre = prompt("Cual es tu nombre");
let apellido = prompt ("Cual es tu apellido");
let anonacimiento = Number(prompt ("en que ano naciste"));
let edad = 2026 - anonacimiento;
let esMayorEdad = edad > 18 ? "eres mayor de edad" : "eres menor de edad" ;

let mensaje = `Hola ${nombre} ${apellido} usted nacio ${anonacimiento} y tienes ${edad}, y usted es ${esMayorEdad}`;

alert(mensaje);
