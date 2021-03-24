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
    var llistat = document.createElement("input").innerHTML="<datalist id='ensenyaments'>    <option value='Educació secundària obligatòria'><option value='Programes de formació i inserció'>    <option value='Formació professional'>    <option value=Batxillerat>    <option value='Ensenyaments artístics superiors'>    <option value=Batxillerat>    <option value='Ensenyaments esportius'>  </datalist><br>";
    document.getElementById("nivelldestudis").append(llistat);
}