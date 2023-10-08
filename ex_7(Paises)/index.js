function conferir(){
    var pais = document.getElementById("paises")
    var p = (pais.value)
    var result = document.getElementById("res")

    if(p == "Brasil"){
        result.innerText = "Elea/e é brasileiro!"
    }else{
        result.innerHTML = "<p>Elea/e é estrangeiro</p>"
    }
}