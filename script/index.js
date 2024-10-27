const btnIniciarSesion = document.querySelector('#btn-iniciar-sesion');

btnIniciarSesion.addEventListener('click', iniciarSesion);

let intentos = 3;

function iniciarSesion(e) {
  e.preventDefault();

  const usuario = 'admin';
  const password = '1234';

  if (intentos > 0) {
    let inputUsuario = document.querySelector('#usuario').value.toLowerCase();
    let inputPassword = document.querySelector('#password').value.toLowerCase();

    if (inputUsuario === usuario && inputPassword === password) {
      location.href = './calculadora.html';
    } else {
      document.querySelector('form').reset()
      intentos -= 1;
      const divMensaje = document.querySelector('#mensaje');

      while (divMensaje.firstChild) {
        divMensaje.removeChild(divMensaje.firstChild);
      }

      const parrafo = document.createElement('P');
      parrafo.textContent = `Contraseña o Usuario incorrectos!! \n Intentos: ${intentos}`;
      parrafo.classList.add('error');

      divMensaje.append(parrafo);
    }

    if(intentos == 0) {
      const mensaje = document.createElement('H1');
      mensaje.textContent = '';

      document.querySelector('body').innerHTML = `
          <h1>El sistema se ha bloqueado!!</h1>
          <p>Recargue la página</p>
        `
    }

    }

    // do {
    // intentos -= 1;
    // console.log(intentos)

    // console.log(intentos)

    // let inputUsuario = document.querySelector('#usuario').value.toLowerCase();
    // let inputPassword = document.querySelector('#password').value.toLowerCase();

    // if( inputUsuario === usuario && inputPassword ===  password ) {
    //   location.href = './calculadora.html';
    //   return;
    // } else {
    //   const divMensaje = document.querySelector('#mensaje');

    //   while( divMensaje.firstChild ) {
    //     divMensaje.removeChild(divMensaje.firstChild);
    //   }

    //   const parrafo = document.createElement('P');
    //   parrafo.textContent = `Contraseña o Usuario incorrectos!! \n Intentos: ${intentos}`

    //   divMensaje.append(parrafo)
    // }

    // if( intentos == 0 ) {
    //   const mensaje = document.createElement('H1');
    //   mensaje.textContent = '';

    //   document.querySelector('body').innerHTML = `
    //     <h1>El sistema se ha bloqueado!!</h1>
    //     <p>Recargue la página</p>
    //   `
    // }

    // } while(intentos > 0);
  }

