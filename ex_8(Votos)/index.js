var age = 65

console.log(`Você tem ${age} de idade`)
if (age < 16){
    console.log("Não vota")
}else if(age >= 16 && age < 18 || age >= 65){
    console.log("voto opcional")
    
}else{
    console.log("voto obrigatorio")
}