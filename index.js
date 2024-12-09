var setadireita = window.document.getElementById("setadireita")
var colheita = window.document.getElementById("colheita")
var plantar =  window.document.getElementById("plantar")
var setaesquerda =  window.document.getElementById("setaesquerda")
var trator =  window.document.getElementById("trator")
function deslizarparadireita(){
    colheita.style="diplay:none"
    plantar.style="display:flex"
    trator.style="display:flex"
    setadireita.style="display:none"
    setaesquerda.style="display:flex; margin-top=50px"
}

function deslizarparaesquerda(){
    colheita.style="diplay:flex"
    plantar.style="display:none"
    setaesquerda.style="display:none"
    setadireita.style="display:flex; margin-top=50px"
}