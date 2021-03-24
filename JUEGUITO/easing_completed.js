let portero = document.querySelector("#portero");
let porteria = document.querySelector("#porteria");
let pelota      = document.querySelector("#pelota");


porteria.addEventListener("click", startAnimation);
function startAnimation(event)
{
    let startKeyframes = {"top": "90vh"," left": "50vw"};
    let endKeyframes = {"top": event.clientY+"px"," left": event.clientX+"px"};
    console.log(startKeyframes);
    console.log(endKeyframes);
    let options = {
        duration: 3000,
        easing: "cubic-bezier(0.5, 0, 0.75, 0)"
    };

    //pelota.animate([startKeyframes, endKeyframes], options);
    pelota.animate({
        top: [ "90vh", event.clientY+"px" ],          // [ from, to ]
        left:   [ "#50vw",  event.clientX+"px" ] // [ from, to ]
      }, 2000);
};