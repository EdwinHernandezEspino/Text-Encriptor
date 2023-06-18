function encriptar() {
    let textarea = document.getElementById("texto");
    let areatexto = document.getElementById("mensaje");
    let copiar = document.getElementById("btn-copiar");
    let texto = textarea.value;
    console.log(texto);
    let textoEncriptado = "";
    let esperar = document.getElementById("aviso-esperar");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
  
    for (let i = 0; i < texto.length; i++) {
      let letra = texto[i];
  
      switch (letra) {
        case "e":
          textoEncriptado += "enter";
          break;
        case "i":
          textoEncriptado += "imes";
          break;
        case "a":
          textoEncriptado += "ai";
          break;
        case "o":
          textoEncriptado += "ober";
          break;
        case "u":
          textoEncriptado += "ufat";
          break;
        default:
          textoEncriptado += letra;
      }
    }

    if(textoEncriptado.length != 0){
        showAlert();
        esperar.style.display = "none";
        areatexto.value = textoEncriptado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        copiar.style.display = "inline-block";
    }else{
        showAlert2();
        areatexto.value = "";
        esperar.style.display = "block";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        copiar.style.display = "none";
    }
    
  }
  
  function desencriptar() {
    let textarea = document.getElementById("texto");
    let areatexto = document.getElementById("mensaje");
    let copiar = document.getElementById("btn-copiar");
    let textoEncriptado = textarea.value;
    let resultado = "";
    let esperar = document.getElementById("aviso-esperar");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
  
    resultado = textoEncriptado.replace(/enter/g, "e");
    resultado = resultado.replace(/imes/g, "i");
    resultado = resultado.replace(/ai/g, "a");
    resultado = resultado.replace(/ober/g, "o");
    resultado = resultado.replace(/ufat/g, "u");
  
    if (resultado.length !== 0) {
      showAlert();
      areatexto.value = resultado;
      esperar.style.display = "none";
      tituloMensaje.textContent = "";
      parrafo.textContent = "";
      copiar.style.display = "inline-block";
    } else {
      showAlert2();
      areatexto.value = "";
      esperar.style.display = "block";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
      copiar.style.display = "none";
    }
  }

  let arearesultado = document.getElementById("mensaje");
  let copiar = document.getElementById("btn-copiar");

  copiar.addEventListener("click", function() {
    // Obtener el texto del textarea
    var texto = arearesultado.value;
  
    // Verificar si el navegador es compatible con el método writeText()
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Copiar el texto al portapapeles utilizando writeText()
      navigator.clipboard.writeText(texto)
        .then(function() {
          showAlert4();
        })
        .catch(function(error) {
          showAlert3();
        });
    } else {
      // Navegador no compatible, mostrar mensaje de error alternativo
      alert("Tu navegador no es compatible con la función de copiar al portapapeles.");
    }
  });

var audio1 = document.getElementById("myAudio");
var btnEncriptar = document.getElementById("btnEncriptar");

btnEncriptar.addEventListener("click", function() {
  if (audio1.paused) {
    audio1.play();
  } else {
    audio1.pause();
  }
});

var audio2 = document.getElementById("myAudio");
var btnDesencriptar = document.getElementById("btnDesencriptar");

btnDesencriptar.addEventListener("click", function() {
  if (audio2.paused) {
    audio2.play();
  } else {
    audio2.pause();
  }
});

var audio3 = document.getElementById("Audio");
var btnCopiar = document.getElementById("btn-copiar");

btnCopiar.addEventListener("click", function() {
  if (audio3.paused) {
    audio3.play();
  } else {
    audio3.pause();
  }
});

function showAlert() {
    Swal.fire({
      title: '¡Encriptación / Desencriptación!',
      text: 'Texto encriptado / desencriptado con exito',
      icon: 'success',
      iconColor: 'black',
      color: '#CCCCCC',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'black',
    });
}

function showAlert2() {
    Swal.fire({
      title: '¡Encriptación / Desencriptación!',
      text: 'Texto encriptado / desencriptado sin exito',
      icon: 'warning',
      iconColor: 'black',
      color: '#CCCCCC',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'black',
    });
}

function showAlert3() {
    Swal.fire({
      title: 'El texto no fue copiado con exito',
      text: '¡Intente de nuevo!',
      icon: 'error',
      iconColor: 'black',
      color: '#CCCCCC',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'black',
    });
}

function showAlert4() {
    Swal.fire({
      title: 'El texto fue copiado con exito',
      text: '¡Texto en el portapapeles!',
      icon: 'success',
      iconColor: 'black',
      color: '#CCCCCC',
      confirmButtonText: 'Aceptar',
      confirmButtonColor: 'black',
    });
}