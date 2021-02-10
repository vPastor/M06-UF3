var semaforo=0;
var lletraspasadas = 0;
function myFunction() {
    alert("Page is loaded");
}
function ratonpelotero(event)
{
    if(event.type=="mouseup")
    {
        console.log(event.isTrusted);
        document.getElementById("button").innerHTML = "Click";
    }
    if(event.type=="mousedown")
    {
        console.log(event.type);
        document.getElementById("button").innerHTML = "S'ha clickat el boto";
    }
    if(event.type=="mouseenter")
    {
        console.log(event.type);
        document.getElementById("button").innerHTML = "El ratolí ha entrat";
    }
    if(event.type=="mouseout")
    {
        console.log(event.type);
        document.getElementById("button").innerHTML = "El ratolí ha marxat";
    }
    
    

    var x = event.type;
    var x = event.target;
  document.getElementById("button").innerHTML = x;
}
//document.body.addEventListener("keydown",comprobargenerar(event));
function passarlletra()
{

}
document.addEventListener('keydown', (event) => {

    var keyName = event.key;
    
    console.log(keyName);
  });


  var nList = document.getElementsByTagName("*");
  for (var i = 0; i < nList.length; i++)
   {
      var node = nList.item(i);
      console.log(node.nodeName);
      var name = node.attributes;
      console.log(name);
   }
   function semaforon()
   {
    width="300px" 
    semaforo +=1;
    var sema =document.getElementById("semaforo");
    sema.style.width = "300px";
    sema.style.height="300px";
    if(semaforo==1)
    {
        sema.style.backgroundColor = "green";
    }
    if(semaforo==2)
    {
        sema.style.backgroundColor = "yellow";
    }
    if(semaforo==3)
    {
        sema.style.backgroundColor = "red";
    }
    if(semaforo==4)
    {
        semaforo=1;
        sema.style.backgroundColor = "green";
    }
   }