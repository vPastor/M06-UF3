var izquierda = document.getElementById("izquierda");
izquierda.addEventListener('mousedown', (event) => {
    document.getElementById("respuesta").innerText = "el elemento que activo el evento fue :"+event.target;
});
var izquierda = document.getElementById("izquierda");
izquierda.addEventListener('mouseup', (event) => {
    document.getElementById("respuesta").innerText = "SE LEVANTO EL CLICK";
});
var derecha = document.getElementById("derecha");
derecha.addEventListener('mousedown', (event) => {
    document.getElementById("respuesta").innerText = "el elemento que activo el evento fue :"+event.target;
});
var derecha = document.getElementById("derecha");
derecha.addEventListener('mouseup', (event) => {
    document.getElementById("respuesta").innerText = "SE LEVANTO EL CLICK";
});
var medio = document.getElementById("medio");
medio.addEventListener('mousedown', (event) => {
    document.getElementById("respuesta").innerText = "el elemento que activo el evento fue :"+event.target;
});
var medio = document.getElementById("medio");
medio.addEventListener('mouseup', (event) => {
    document.getElementById("respuesta").innerText = "SE LEVANTO EL CLICK";
});
var over = document.getElementById("over");
over.addEventListener('mouseenter', (event) => {
    document.getElementById("over").innerText = "El ratolí ha entrat";
});
over.addEventListener('mouseleave', (event) => {
    document.getElementById("over").innerText = "El ratolí ha marxat";
});

document.addEventListener('keydown', (event) => {
    var keyName = event.key;
    console.log(keyName);
});
window.onload(alert('Buenas!'));
window.onclose(alert('adeu!'));
document.addEventListener('load', (event) => {
alert('Hola');
});
window.addEventListener('close', (event) => {
    alert('adeu');
    });