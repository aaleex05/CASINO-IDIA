//VARIABLES
const listaImagenes = [
    "aubergine",
    "banana",
    "carrots",
    "cherries",
    "dollar",
    "lemon",
    "orange",
    "peach",
    "potato",
    "tomato",
  ];
  const verdurasFrutas = [
    "aubergine",
    "banana",
    "carrots",
    "cherries",
    "lemon",
    "orange",
    "peach",
    "potato",
    "tomato",
  ];
  var monedas = 0;
  
  //INPUTS-BOTONES PARA LAS MONEDAS
  var introducirMonedas = document.getElementById("inputMonedas"); //INPUT QUE INTRODUCE MONEDAS
  
  var botonIntroducir = document.getElementById("introducirMonedas"); // BOTON PARA INTRODUCIRLAS
  
  //SLOTS DE FRUTAS
  var slot1 = document.getElementById("slot1");
  var slot2 = document.getElementById("slot2");
  var slot3 = document.getElementById("slot3");
  
  var monedasActuales = document.getElementById("numeroTotal"); //DONDE SALE EL NUMERO TOTAL DE MONEDAS
  monedasActuales.innerHTML = 0;
  introducirMonedas.value = 0;
  
  //MONDEDAS NEGATIVAS
  botonIntroducir.addEventListener("click", function () {
    if (introducirMonedas.value < 0) {
      alert("No puedes introducir números negativos");
      vaciarInputMonedas();
    } else {
      monedas += parseInt(introducirMonedas.value);
      monedasActuales.innerHTML = monedas;
      introducirMonedas.disabled = true;
      botonIntroducir.disabled = true;
      vaciarInputMonedas();
    }
  });
  
  
  //PALANCIA HACIA ABAJO
  palanca.addEventListener("mousedown", function () {
    palanca.src = "archivos-slotmachine/palancaDOWN.png";
    if (monedasActuales.innerHTML > 0) {
      monedasActuales.innerHTML -= 1;
    }
  });
  
  //PALANCA HACIA ARRIBA
  palanca.addEventListener("mouseup", function () {
    palanca.src = "archivos-slotmachine/palancaUP.png";
    if (monedasActuales.innerHTML > 0) {
      cambiaImagen(slot1, slot2, slot3);
      comparacion(slot1, slot2, slot3);
    } else {
      alert("Necesitas introducir monedas para jugar,  introducca un número y presiona el boton rojo");
    }
  });

  //CALCULOS DE LA SLOT
  
  function vaciarInputMonedas() {
    introducirMonedas.value = 0;
  }
  
  function aleatorio(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }
  
  function devuelveImagen() {
    return listaImagenes[aleatorio(0, 9)];
  }
  
  function cambiaImagen(imagen, imagen2, imagen3) {
    let imagenes = [devuelveImagen(), devuelveImagen(), devuelveImagen()];
  
    imagen.src = "archivos-slotmachine/" + imagenes[0] + ".png";
    imagen.setAttribute("alt", imagenes[0]);
  
    imagen2.src = "archivos-slotmachine/" + imagenes[1] + ".png";
    imagen2.setAttribute("alt", imagenes[1]);
  
    imagen3.src = "archivos-slotmachine/" + imagenes[2] + ".png";
    imagen3.setAttribute("alt", imagenes[2]);
  }
  
  function comparacion(source, source2, source3) {
    if (
      (source.getAttribute("alt") == "dollar" &&
        verdurasFrutas.indexOf(source2.getAttribute("alt")) ==
          verdurasFrutas.indexOf(source3.getAttribute("alt"))) ||
      (verdurasFrutas.indexOf(source.getAttribute("alt")) ==
        verdurasFrutas.indexOf(source2.getAttribute("alt")) &&
        source3.getAttribute("alt") == "dollar") ||
      (source2.getAttribute("alt") == "dollar" &&
        verdurasFrutas.indexOf(source.getAttribute("alt")) ==
          verdurasFrutas.indexOf(source3.getAttribute("alt")))
    ) {
      monedasActuales.innerHTML = parseInt(monedasActuales.innerHTML) + 3;
  
    } else if (
      source.getAttribute("alt") == "dollar" &&
      source2.getAttribute("alt") == "dollar" &&
      source3.getAttribute("alt") == "dollar"
    ) {
      monedasActuales.innerHTML = parseInt(monedasActuales.innerHTML) + 10;
  
    } else if (
      (source.getAttribute("alt") == "dollar" &&
        source2.getAttribute("alt") == "dollar") ||
      (source2.getAttribute("alt") == "dollar" &&
        source3.getAttribute("alt") == "dollar") ||
      (source.getAttribute("alt") == "dollar" &&
        source3.getAttribute("alt") == "dollar")
    ) {
      monedasActuales.innerHTML = parseInt(monedasActuales.innerHTML) + 4;
  
    } else if (
      source.getAttribute("alt") == "dollar" ||
      source2.getAttribute("alt") == "dollar" ||
      source3.getAttribute("alt") == "dollar"
    ) {
      monedasActuales.innerHTML = parseInt(monedasActuales.innerHTML) + 1;
  
    } else if (
      verdurasFrutas.indexOf(source.getAttribute("alt")) ==
        verdurasFrutas.indexOf(source2.getAttribute("alt")) &&
      verdurasFrutas.indexOf(source2.getAttribute("alt")) ==
        verdurasFrutas.indexOf(source3.getAttribute("alt"))
    ) {
      monedasActuales.innerHTML = parseInt(monedasActuales.innerHTML) + 5;
  
    } else if (
      verdurasFrutas.indexOf(source.getAttribute("alt")) ==
        verdurasFrutas.indexOf(source2.getAttribute("alt")) ||
      verdurasFrutas.indexOf(source.getAttribute("alt")) ==
        verdurasFrutas.indexOf(source3.getAttribute("alt")) ||
      verdurasFrutas.indexOf(source2.getAttribute("alt")) ==
        verdurasFrutas.indexOf(source3.getAttribute("alt"))
    ) {
      monedasActuales.innerHTML = parseInt(monedasActuales.innerHTML) + 2;
    }
  }
  