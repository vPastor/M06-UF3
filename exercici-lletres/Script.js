var puntos=0;
var lletraspasadas = 0;
function myFunction() {
    alert("Page is loaded");
    generarletra();
 
}
//document.body.addEventListener("keydown",comprobargenerar(event));
document.addEventListener('keydown', (event) => {
    lletraspasadas=0;
    var keyName = event.key;
    var objective=  document.getElementById('coment').innerText;
    console.log(objective);
    console.log(keyName);
    if (objective.toLowerCase() == keyName.toLowerCase())
    {
        console.log("has acertado, +1 punto");
        puntos +=1;
    }
    
    else
    {
        console.log("has fallado, -1 punto");
        puntos -=1;
    }
    generarletra();
  });
function generarletra(){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    result = characters.charAt(Math.floor(Math.random() * characters.length));
    document.getElementById('coment').innerText = result;
    document.getElementById("puntos").innerText = puntos;
}
function passarlletra()
{
    if(lletraspasadas==1)
    {
        alert('TENCANT PROGRAMA');
        window.close();
    }
    else
    {
        lletraspasadas=1;
        generarletra();
    }
}