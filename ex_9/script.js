var now = new Date ()
var hour = now.getHours()

console.log(`Agora são ${hour} Horas`)

if (hour <= 6){
 console.log("Vai dormi mlk")
}else if (hour <= 12){
    console.log("Bom dia")
} else if (hour <= 18){
    console.log("Boa Tarde")
}else{
    console.log("Boa Noite")
}