/*
function calcularCuota3(monto) {
  const calculo = monto * 30 / 100;
  const cuotaTotal = (monto + calculo) / 3;
  return cuotaTotal;
}
function calcularCuota6(monto) {
    const calculo = monto * 40 / 100;
    const cuotaTotal = (monto + calculo) / 6;
    return cuotaTotal;
  }
  function calcularCuota12(monto) {
    const calculo = monto * 50 / 100;
    const cuotaTotal = (monto + calculo) / 12;
    return cuotaTotal;
  }
  class Cliente {
    constructor(nombre, apellido, edad, direccion, telefono) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.direccion = direccion;
      this.telefono = telefono;
    }
  }

  let clientes = [];
  

//let validacion = prompt("Buen dia esto es un simulador de prestamos necesitaria saber si trabajas en blanco pon si o no")

if (validacion =="no") {
    alert("Lo lamento solo se pueden dar prestamos a personas que estan trabajando en blanco")
    
    }
    else{
    let empresa = "";
    while (empresa == "") {
        empresa = prompt("¿Para que empresa trabajas?");
        if (empresa == "") {
            alert("Por favor escribe el nombre de tu empresa.");
           
        }
    }
    
    let salario = Number(prompt("¿Cuánto ganas en " + empresa + "?"));
        if (salario <45000) { alert("disculpa a montos menores a 45000 no se puede otorgar un prestamo")
            
        }
        if (salario >=45000 && salario < 60000) {
            let corte ="si";
            monto = Number (prompt("con un monton de " +salario+ " se te puede dar un prestamo de 80000 puedes eleguir entre 5000 hasta 80000"))
            while(corte !="no"){
                if (monto <5000 || monto >80000) {
                    monto = Number (prompt("por favor elija bien el monto entre 5000 hasta 80000"))
                }
                else{
            cuotas = Number (prompt("ya estas casi a un paso de tu prestamo de "+monto+ " elige cuantas cuotas te gustaria entre 3 cuotas 6 cuotas 12 cuotas"))
            
            switch (cuotas) {
                case 3:
                    cuotatotal = calcularCuota3(monto)
                    corte = prompt("serian 3 cuotas de "+cuotatotal+" quieres simular en mas cuotas? escribe si o no" )
                    break;
                case 6:
                    cuotatotal = calcularCuota6(monto)
                    corte = prompt("serian 6 cuotas de "+cuotatotal+" quieres simular en 3 o 12 cuotas? escribe si o no" )
                    break;

                    case 12:
                        cuotatotal = calcularCuota12(monto)
                        corte = prompt("serian 12 cuotas de "+cuotatotal+" quieres simular en menos cuotas? escribe si o no" )
                        break;    
                default:alert("ingrese correctamente las cuotas entre 3 6 o 12")
                    break;
            }}
        } }if (salario >60000 && salario <= 120000) {
            let corte ="si";
            monto = Number (prompt("con un monton de " +salario+ " se te puede dar un prestamo de 200000 puedes eleguir entre 5000 hasta 200000"))
            while(corte !="no"){
                if (monto <5000 || monto >200000) {
                    monto = Number (prompt("por favor elija bien el monto entre 5000 hasta 200000"))
                }
                else{  
            cuotas = Number (prompt("ya estas casi a un paso de tu prestamo de "+monto+ " elige cuantas cuotas te gustaria entre 3 cuotas 6 cuotas 12 cuotas"))
            
            switch (cuotas) {
                case 3:
                    cuotatotal = calcularCuota3(monto)
                    corte = prompt("serian 3 cuotas de "+cuotatotal+" quieres simular en mas cuotas? escribe si o no" )
                    break;
                case 6:
                    cuotatotal = calcularCuota6(monto)
                    corte = prompt("serian 6 cuotas de "+cuotatotal+" quieres simular en 3 o 12 cuotas? escribe si o no" )
                    break;

                    case 12:
                        cuotatotal = calcularCuota12(monto)
                        corte = prompt("serian 12 cuotas de "+cuotatotal+" quieres simular en menos cuotas? escribe si o no" )
                        break;    
                default:alert("ingrese correctamente las cuotas entre 3 6 o 12")
                    break;
            }}
        } }if (salario >120000 && salario <= 1000000) {
            let corte ="si";
            monto = Number (prompt("con un monton de " +salario+ " se te puede dar un prestamo de 500000 puedes eleguir entre 10000 hasta 500000"))
            while(corte !="no"){
                if (monto <5000 || monto >500000) {
                    monto = Number (prompt("por favor elija bien el monto entre 10000 hasta 500000"))
                }
                else{    
            cuotas = Number (prompt("ya estas casi a un paso de tu prestamo de "+monto+ " elige cuantas cuotas te gustaria entre 3 cuotas 6 cuotas 12 cuotas"))
            
            switch (cuotas) {
                case 3:
                    cuotatotal = calcularCuota3(monto)
                    corte = prompt("serian 3 cuotas de "+cuotatotal+" quieres simular en mas cuotas? escribe si o no" )
                    break;
                case 6:
                    cuotatotal = calcularCuota6(monto)
                    corte = prompt("serian 6 cuotas de "+cuotatotal+" quieres simular en 3 o 12 cuotas? escribe si o no" )
                    break;

                    case 12:
                        cuotatotal = calcularCuota12(monto)
                        corte = prompt("serian 12 cuotas de "+cuotatotal+" quieres simular en menos cuotas? escribe si o no" )
                        break;    
                default:alert("ingrese correctamente las cuotas entre 3 6 o 12")
                    break;
            }
        }} }else {
            
        }
        if (salario <45000) { alert ("Gracias")
            
        }
        else{
        let nombre, apellido,edad, direccion, telefono, respuesta;

do {
    alert("Tomaremos algunos datos para ponernos en contacto de su prestamo de "+monto)
  nombre = prompt("Ingrese su nombre");
  apellido = prompt("Ingrese su apellido");
  edad = Number (prompt ("Ingrese su edad"));
  direccion = prompt("Ingrese su dirección");
  telefono =Number (prompt ("Ingrese su teléfono"));

  respuesta = prompt("Los datos ingresados son:\n" +
  "Nombre completo: " + nombre + " " + apellido + "\n" +
  "Edad: " + edad + "\n" +
  "Dirección: " + direccion + "\n" +
  "Teléfono: " + telefono + "\n" +
  "¿Son correctos los datos? (si/no)");

} while (respuesta.toLowerCase() === 'no');

alert("Estos son sus datos:\n" +
  "Nombre completo: " + nombre + " " + apellido + "\n" +
  "Edad: " + edad + "\n" +
  "Dirección: " + direccion + "\n" +
  "Teléfono: " + telefono + "\n" +
  "Gracias por tomarse el tiempo de responder, lo contactaremos en breve.");

  let nuevoCliente = new Cliente(nombre, apellido, edad, direccion, telefono);
clientes.push(nuevoCliente);
}}
*/

const formulario = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado');
const formulario2 = document.getElementById('formulario2');
const montoSeleccionado = document.getElementById('monto_seleccionado');
const cuotasSeleccionadas = document.getElementById('cuotas_seleccionadas');
const resultadoDiv2 = document.getElementById('resultado2');

const botonVolver = document.createElement('button');
botonVolver.innerText = 'Volver';
botonVolver.addEventListener('click', () => {
  formulario2.style.display = 'none';
  formulario.style.display = 'block';
  resultadoDiv2.innerHTML = '';
});

const botonOtraSimulacion = document.createElement('button');
botonOtraSimulacion.innerText = 'Realizar otra simulación';
botonOtraSimulacion.addEventListener('click', () => {
  formulario2.style.display = 'block';
  resultadoDiv2.innerHTML = '';
});

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const trabajo = document.getElementById('trabajo').value;
  const empresa = document.getElementById('empresa').value;
  const sueldo = document.getElementById('sueldo').value;

  if(trabajo === "no") {
    resultadoDiv.innerHTML = "Lo siento, no se le puede otorgar el préstamo.";
  } else {
    if (sueldo < 45000) {
      resultadoDiv.innerHTML = "Disculpe, a montos menores a $45,000 no se puede otorgar un préstamo.";
    } else if (sueldo >= 45000 && sueldo < 100000) {
      formulario.style.display = 'none';
      formulario2.style.display = 'block';
    }
  }
});

formulario2.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const monto = montoSeleccionado.value;
  const cuotas = cuotasSeleccionadas.value;
  const interes = 1.1;

  const cuota = (monto * interes) / cuotas;
  
  resultadoDiv2.innerHTML = `Para un préstamo de $${monto} en ${cuotas} cuotas, cada cuota será de $${cuota.toFixed(2)}.`;

  formulario2.appendChild(botonVolver);
  formulario2.appendChild(botonOtraSimulacion);
});
