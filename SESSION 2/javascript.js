var nifRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
var nieRegex = /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function validate(){
    validardocumento();
    validarcontrasenya();
};
function rellenar(){
    console.log("Llegó");
    var div = document.getElementById("inputdocument");
    var pasaporte = document.createElement("input");
    pasaporte.setAttribute("type", "radio");
    pasaporte.innerText="Pasaporte";
    pasaporte.setAttribute("id","pasaporte");
    pasaporte.setAttribute("name","contact");
    div.appendChild(pasaporte);
}