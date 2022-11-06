
function acendeLampada() {
    document.getElementById("clickme").onclick = function() {clicked()};
} 

function clicked() {
    document.getElementById("myImage").src = "img/pic_bulbon.gif"
}

function apagaLampada() {
    document.getElementById("clickoff").onclick = function() {clickApagaLampada()};
}

function clickApagaLampada() {
    document.getElementById("myImage").src = "img/pic_bulboff.gif"
}

acendeLampada();
apagaLampada();
