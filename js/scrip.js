function Cliente(nombre, apellido, dni, celular, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.dni = dni;
  this.celular = celular;
  this.email = email;
}


const formulario = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado');
const formulario2 = document.getElementById('formulario2');
const formulario3 = document.getElementById('formulario3');
const formulario4 = document.getElementById('formulario4');

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
    formulario2.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const monto = montoSeleccionado.value;
      const cuotas = cuotasSeleccionadas.value;
      const interes = 1.1;
    
      const cuota = (monto * interes) / cuotas;
      
      resultadoDiv2.innerHTML = `Para un préstamo de $${monto} en ${cuotas} cuotas, cada cuota será de $${cuota.toFixed(2)}.`;
    
      formulario2.appendChild(botonVolver);
      formulario2.appendChild(botonOtraSimulacion);
      formulario3.appendChild(botonaceptarprestamo);
    });
    }

    else if (sueldo >= 100000 && sueldo < 1000000) {
      formulario.style.display = 'none';
      
      formulario3.style.display = 'block';
      formulario3.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const monto = montoSeleccionado.value;
        const cuotas = cuotasSeleccionadas.value;
        const interes = 1.1;
      
        const cuota = (monto * interes) / cuotas;
        
        resultadoDiv2.innerHTML = `Para un préstamo de $${monto} en ${cuotas} cuotas, cada cuota será de $${cuota.toFixed(2)}.`;
      
        formulario2.appendChild(botonVolver);
        formulario2.appendChild(botonOtraSimulacion);
      });
      }




}
});