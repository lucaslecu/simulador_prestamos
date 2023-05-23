document.addEventListener('DOMContentLoaded', obtenerValorDolar);

function obtenerValorDolar() {
  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
      const valorDolarEnPesos = data.rates.ARS;
      const dolarDiv = document.getElementById('valor-dolar');
      dolarDiv.innerHTML = `Valor del dólar: ${valorDolarEnPesos.toFixed(2)} pesos`;
    })
    .catch(error => {
      console.error('Error al obtener el valor del dólar:', error);
    });
}
document.getElementById('formulario-datos').addEventListener('submit', function(e) {
  e.preventDefault();
  const sueldo = parseInt(document.getElementById('sueldo').value);
  const trabajo = document.getElementById('trabajo').value;
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';

  if (sueldo < 45000) {
      resultadoDiv.innerHTML = 'Lo sentimos, no se puede otorgar un préstamo con ese sueldo.';
      return;
  }

  let montoMaximo;
  let interesPorcentaje;

  if (sueldo <= 100000) {
      montoMaximo = 200000;
      interesPorcentaje = 15;
  } else if (sueldo <= 1000000) {
      montoMaximo = 1000000;
      interesPorcentaje = 30;
  }

  resultadoDiv.innerHTML = `Felicitaciones, puede obtener un préstamo de hasta ${montoMaximo.toLocaleString()} pesos.<br>`;
  resultadoDiv.innerHTML += 'Seleccione el monto y las cuotas para continuar.';
  document.getElementById('formulario').style.display = 'none';
  document.getElementById('formulario2').style.display = 'block';
  document.getElementById('adquirir-prestamo').style.display = 'none';
});

document.getElementById('formulario-monto-cuotas').addEventListener('submit', function(e) {
  e.preventDefault();
  const montoSeleccionado = parseInt(document.getElementById('monto_seleccionado').value);
  const cuotasSeleccionadas = parseInt(document.getElementById('cuotas_seleccionadas').value);
  const resultadoDiv = document.getElementById('resultado2');
  resultadoDiv.innerHTML = '';

  const interesPorcentaje = 15;
  const interesAnual = montoSeleccionado * (interesPorcentaje / 100);
  const montoTotal = montoSeleccionado + interesAnual;
  const cuotaMensual = montoTotal / cuotasSeleccionadas;

  resultadoDiv.innerHTML = `Su préstamo es de ${montoSeleccionado.toLocaleString()} pesos en ${cuotasSeleccionadas} cuotas de ${cuotaMensual.toLocaleString()} pesos mensuales.`;
  document.getElementById('adquirir-prestamo').style.display = 'block';

  // almacenamiento local
  localStorage.setItem('montoSeleccionado', montoSeleccionado);
  localStorage.setItem('cuotasSeleccionadas', cuotasSeleccionadas);
});

document.getElementById('formulario-monto-cuotas2').addEventListener('submit', function(e) {
  e.preventDefault();
  const montoSeleccionado = parseInt(document.getElementById('monto_seleccionado_2').value);
  const cuotasSeleccionadas = parseInt(document.getElementById('cuotas_seleccionadas_2').value);
  const resultadoDiv = document.getElementById('resultado3');
  resultadoDiv.innerHTML = '';

  const interesPorcentaje = 30;
  const interesAnual = montoSeleccionado * (interesPorcentaje / 100);
  const montoTotal = montoSeleccionado + interesAnual;
  const cuotaMensual = montoTotal / cuotasSeleccionadas;

  resultadoDiv.innerHTML = `Su préstamo es de ${montoSeleccionado.toLocaleString()} pesos en ${cuotasSeleccionadas} cuotas de ${cuotaMensual.toLocaleString()} pesos mensuales.`;
  document.getElementById('adquirir-prestamo-2').style.display = 'block';

  // almacenamiento local
  localStorage.setItem('montoSeleccionado', montoSeleccionado);
  localStorage.setItem('cuotasSeleccionadas', cuotasSeleccionadas);
});

document.getElementById('adquirir-prestamo').addEventListener('click', function() {
  document.getElementById('formulario2').style.display = 'none';
  document.getElementById('formulario4').style.display = 'block';
});

document.getElementById('adquirir-prestamo-2').addEventListener('click', function() {
  document.getElementById('formulario3').style.display = 'none';
  document.getElementById('formulario4').style.display = 'block';
});

document.getElementById('formulario-datos-personales').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const dni = document.getElementById('dni').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;

  const mensajeEnviadoDiv = document.getElementById('mensaje-enviado');
  mensajeEnviadoDiv.innerHTML = `<h2>¡Gracias por su solicitud, ${nombre}!</h2>`;
  mensajeEnviadoDiv.innerHTML += `<p>Nos pondremos en contacto con usted a través de ${email} o al teléfono ${telefono} a la brevedad.</p>`;
  document.getElementById('formulario4').style.display = 'none';
  mensajeEnviadoDiv.style.display = 'block';

  // almacenamiento local
  localStorage.setItem('nombre', nombre);
  localStorage.setItem('apellido', apellido);
  localStorage.setItem('dni', dni);
  localStorage.setItem('telefono', telefono);
  localStorage.setItem('email', email);
});

