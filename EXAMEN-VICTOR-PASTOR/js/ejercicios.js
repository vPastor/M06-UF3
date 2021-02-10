function sumbit1(){
    var secondform = false;
    var completo = true;
    if(checkearvalue("Plaques")){
        completo=false;
    }
    if(checkearvalue("Processadors")){
        completo=false;
    }
    if(checkearvalue("Memories")){
        completo=false;
    }
    if(checkearvalue("Fonts")){
        completo=false;
    }
    if(checkearvalue("Discs")){
        completo=false;
    }
    if(checkearvalue("acasa")){
        completo=false;
    }else{
        var rates = document.getElementsByName("acasa");
        var rate_value;
        for(var i = 0; i < rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
        }
        if(rate_value=="cal")
        {
            secondform=true;
        }
    }
    }

    if(completo==true)
    {
        console.log("esta completo");
        var div = document.getElementById("MensajeAviso");
        div.innerHTML= "";
        if(secondform==true)
        {
            var div = document.getElementById("form2");
            div.setAttribute("display","block");
            console.log("entraqui");
            document.getElementById("form2").style.display = "block";
            document.getElementById("form1").style.display = "none";
        }
    
    }else{
        var div = document.getElementById("MensajeAviso");
        div.innerHTML= "<p>El formulario esta incompleto, rellena los campos necesarios</p>";
    }
}
function checkearvalue(id){
    var rates = document.getElementsByName(id);
    var rate_value;
    for(var i = 0; i < rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
        }
    }
    if(rate_value != null)
    {
        console.log("esta seleccionao")
        console.log(rate_value);
    }
    return (rate_value == null)
}