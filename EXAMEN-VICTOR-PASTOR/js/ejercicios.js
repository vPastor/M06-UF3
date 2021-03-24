document.addEventListener("load", alert('se ha cargado la pagina'));
function sumbit1() {
    var secondform = false;
    var completo = true;
    var avisoalterno = false;
    if (checkearvalue("Plaques")) {
        completo = false;
    }
    if (checkearvalue("Processadors")) {
        completo = false;
    }
    if (checkearvalue("Memories")) {
        completo = false;
    }
    if (checkearvalue("Fonts")) {
        completo = false;
    }
    if (checkearvalue("Discs")) {
        completo = false;
    }
    if (checkearvalue("acasa")) {
        completo = false;
    }
    if (comprobarlogica()) {
        completo = false;
        avisoalterno = true;
    }
    else {
        var rates = document.getElementsByName("acasa");
        var rate_value;
        for (var i = 0; i < rates.length; i++) {
            if (rates[i].checked) {
                rate_value = rates[i].value;
            }
            if (rate_value == "cal") {
                secondform = true;
            }
        }
    }

    if (completo == true) {
        console.log("esta completo");
        var div = document.getElementById("MensajeAviso");
        div.innerHTML = "";
        if (secondform == true) {
            var div = document.getElementById("form2");
            div.setAttribute("display", "block");
            console.log("entraqui");
            document.getElementById("form2").style.display = "block";
            document.getElementById("form1").style.display = "none";
        }

    } else {
        if (avisoalterno == false) {
            var div = document.getElementById("MensajeAviso");
            div.innerHTML = "<p>El formulario esta incompleto, rellena los campos necesarios</p>";
        }

    }
}
function checkearvalue(id) {
    var rates = document.getElementsByName(id);
    var rate_value;
    for (var i = 0; i < rates.length; i++) {
        if (rates[i].checked) {
            rate_value = rates[i].value;
        }
    }
    if (rate_value != null) {
        console.log("esta seleccionao")
        console.log(rate_value);
    }
    return (rate_value == null)
}
function comprobarlogica() {
    console.log(document.getElementsByName("Discs"));
    if (document.getElementsByName("Processadors")[3].checked) {
        if (document.getElementsByName("Plaques")[2].checked) {
            return false
        }
        else {
            var div = document.getElementById("MensajeAviso");
            div.innerHTML = "<p>El Procesador i9 tiene que ir en la placa C</p>";
            return true


        }

    } else {


        if (document.getElementsByName("Discs")[3].checked) {
            if (document.getElementsByName("Fonts")[2].checked) {
                if (document.getElementsByName("Plaques")[2].checked) {
                    return false
                }
                else {
                    var div = document.getElementById("MensajeAviso");
                    div.innerHTML = "<p>El disco de 1TB tiene que ir en la placa C</p>";
                    return true


                }


            } else {
                var div = document.getElementById("MensajeAviso");
                div.innerHTML = "<p>El disco de 1TB tiene que ir con la fuente de alimentacion  10000W</p>";
                return true

            }
        } else {
            return false
        }
    }
}
function submit2() {
    var completo = true;
    var nombre = document.getElementById("nombreFormContacto");
    var aviso = document.getElementById("aviso");
    aviso.innerText = "";
    if (nombre.innerText == "") {
        completo = false;
        var mensaje = document.createElement("p");
        mensaje.innerText = "NOMBRE VACIO";
        aviso.appendChild(mensaje);
        console.log("Entra en nombre");
    }
    
    var telf = document.getElementById("Telefono");
    console.log(telf.innerText);
    if (parseInt(telf.innerText) < 99999999 || telf.innerText=="") {
        console.log("Entra en telf");
        completo = false;
        var mensaje = document.createElement("p");
        mensaje.innerText = "Telefono no valido";
        aviso.appendChild(mensaje);
    }
    var carrer = document.getElementById("NumCarr");
    var ciutat = document.getElementById("ciutat");
    if (carrer.innerText == "" || ciutat.innerText == "") {
        completo = false;
        var mensaje = document.createElement("p");
        mensaje.innerText = "Ciudad o carrer no validos";
        aviso.appendChild(mensaje);
    }
}