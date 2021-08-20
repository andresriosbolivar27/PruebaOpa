var i = 0;
var desde
var hasta
var cantidadNumeros
var NumerosPerfectos = new Array()


function ProcesoPerfecto(desde){
    if (desde == hasta) {
        GuardarDB()
        return -1
        
    }else{
        let suma = EsPerfecto(desde,1,0)
        if (suma == desde) {

            console.log("El numero: "+ desde + " es perfecto")
            NumerosPerfectos.push(desde)
        }
        return ProcesoPerfecto(desde +1 )
    }
}

function EsPerfecto(desde,j,acumuulador){
    if (desde <= j) {
        return acumuulador
    }else{
        if (desde % j==0) {
            acumuulador+=j                
        }
        return EsPerfecto(desde,j+1,acumuulador)
    }
}
function proceso() {
    desde = parseInt(document.getElementById('desde').value)
    hasta = parseInt(document.getElementById('hasta').value)
    cantidadNumeros = hasta-desde     
    ProcesoPerfecto(desde)
    MostrarResultado()
    
}

function CambioTab(){
    $('#tab_resultado').trigger('click')
}

function ProgressBar(i){
    
    $('#myProgress').show();
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 0;
      var id = setInterval(frame, 0);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
          width = 0;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
          $('#myProgress').hide();
          CambioTab()
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width  + "%";
        }
      }
    }
}

const GuardarDB = () => {

    for (let index = 0; index < NumerosPerfectos.length; index++) {
        let valor = index+1
        let valorPerfecto = "Perfecto "+valor        
        localStorage.setItem("Perfecto "+valor, JSON.stringify(NumerosPerfectos[index]));        
    }   
  }

  function MostrarResultado(){
        var x = localStorage.getItem(valorPerfecto);
        document.getElementById("resultado").value += x;
  }

  window.onload=function() {
    MostrarResultado()
}

  