
document.addEventListener("load", myfunction());



function myfunction() {
    var bodys = document.getElementsByTagName("body")[0];
    var titulobody = document.createElement("h1");
    titulobody.innerHTML = "Benvingut al menú del día digital!";                  // Insert text
    bodys.appendChild(titulobody);
    var par = document.createElement("p");
    par.innerHTML = "Cada persona de la taula ha de seleccionar un plat per cada fila i emplenar el formulari. Un cop emplenat, només cal clicar al botó enviar i en breu els tindrà a taula";                  // Insert text
    bodys.appendChild(par);
    var tbl = document.createElement('table');
    tbl.style.width = '100%';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');

    var tr = document.createElement('tr');

    var td = document.createElement('td');
    var img = document.createElement("img");

    img.src = "1-consome-vegetal.png";


    td.appendChild(img);
    tr.appendChild(td)
    var td2 = document.createElement('td');
    var img2 = document.createElement("img");

    img2.src = "1-crema-verdures.png";
    td2.appendChild(img2);

    tr.appendChild(td2)
    var td3 = document.createElement('td');
    var img3 = document.createElement("img");

    img3.src = "1-endivies-amb-roquefort.png";
    td3.appendChild(img3);

    tr.appendChild(td3)


    tbdy.appendChild(tr);
    tr = document.createElement('tr');

    td = document.createElement('td');
    img = document.createElement("img");

    img.src = "2-amanida-cigrons.png";


    td.appendChild(img);
    tr.appendChild(td)
    td2 = document.createElement('td');
    img2 = document.createElement("img");

    img2.src = "2-bullit-pesols-i-pastanaga.png";
    td2.appendChild(img2);

    tr.appendChild(td2)
    td3 = document.createElement('td');
    img3 = document.createElement("img");

    img3.src = "2-gaspatxo.png";
    td3.appendChild(img3);

    tr.appendChild(td3)

    tbdy.appendChild(tr);


    tr = document.createElement('tr');

    td = document.createElement('td');
    img = document.createElement("img");

    img.src = "3-lassanya-espinacs.png";


    td.appendChild(img);
    tr.appendChild(td)
    td2 = document.createElement('td');
    img2 = document.createElement("img");

    img2.src = "3-rotllets-alberginia-tofu.png";
    td2.appendChild(img2);

    tr.appendChild(td2)
    tbdy.appendChild(tr);
    var tr = document.createElement('tr');

    var td = document.createElement('td');
    var img = document.createElement("img");

    img.src = "4-iogurt-natural.png";


    td.appendChild(img);
    tr.appendChild(td)
    var td2 = document.createElement('td');
    var img2 = document.createElement("img");

    img2.src = "4-mousse-xocolata.png";
    td2.appendChild(img2);

    tr.appendChild(td2)
    var td3 = document.createElement('td');
    var img3 = document.createElement("img");

    img3.src = "4-sindria.png";
    td3.appendChild(img3);

    tr.appendChild(td3)


    tbdy.appendChild(tr);

    tbl.appendChild(tbdy);
    bodys.appendChild(tbl)
}

var thumbs = document.getElementsByTagName("img");
for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].setAttribute("selected", "false");
    thumbs[i].addEventListener("click", function (i) {
        if (event.target.getAttribute("selected") == "false") {
            event.target.style.border = " 3px solid red";
            event.target.setAttribute("selected", "true");
        } else {
            event.target.style.border = "none";
            event.target.setAttribute("selected", "false");
        }
        var imga = document.getElementsByTagName("img");
        var texto = "";
        var textofinal="";
        var primer=0;
        var segon=0;
        var tecer = 0;
        var quart=0;
        for (var i = 0; i < imga.length; i++) {
           
            if (imga[i].getAttribute("selected") == "true") {
                var fullPath = imga[i].src;
                var filename = fullPath.replace(/^.*[\\\/]/, '');
                // or, try this, 
                // var filename = fullPath.split("/").pop();
                if(i<4 && i >=0 && primer==0)
                {
                    textofinal += "Primer plat : ";
                primer=1;
                }
                if(i<6 && i >=3 && segon==0)
                {
                    textofinal += "\nSegon plat : ";
                segon=1;
                }
                if(i<8 && i >=6 && tecer==0)
                {
                    textofinal += "\nTercer plat : ";
                tecer=1;
                }
                if(i<11 && i >=8 && quart==0)
                {
                    textofinal += "\nPostres : ";
                quart=1;
                }
                texto += filename + ",";
                textofinal += filename + ",";
            }
            
        }
        console.log(texto);
        var p = document.createElement("p");
        p.innerText = textofinal;
        document.body.appendChild(p);

            });
}
