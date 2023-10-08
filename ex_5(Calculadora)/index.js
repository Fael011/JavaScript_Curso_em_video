var a = document.getElementById("area")
a.addEventListener('click', handleClicar)
a.addEventListener('mouseenter', handleEntrar)
a.addEventListener('mouseout', handleSair)

function handleClicar(){
    a.innerHTML = "Clicou!"
    a.style.background = "red"
    a.style.color = "white"
}

function handleEntrar(){
    a.innerHTML = "Entrou!"
    a.style.background = "yellow"
    a.style.color = "black"
}

function handleSair(){
    a.innerHTML = "Saiu!"
    a.style.background = "green"
    a.style.color = "white"
}

function somar(){
    var tn1 = document.getElementById("txtn1")
    var tn2 = document.getElementById("txtn2")

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var s = n1 + n2

    res.innerHTML = `A soma dos numeros <strong>${n1}</strong> + <strong>${n2}</strong> é igual a <strong>${s}</strong>`
}