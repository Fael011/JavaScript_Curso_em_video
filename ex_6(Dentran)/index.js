function calcular(){
    var txtv = document.getElementById("txtvel")
    var vel = (Number(txtv.value))
    var result = document.getElementById("res")

    
    if (vel > 90){
        result.innerHTML = `<p>Você ultrapassou a velocidade permitira de 90KM/H.<strong>MULTADO!</strong></p>`
    }else{
        result.innerHTML = `<p>Sua velocidade é <strong>${vel}km/h</strong></p><br/>`
    }

}