
const segundosEnUnMinuto = 60
const minutosEnUnaHora = 60

const $botonCalcular = document.querySelector("#boton-calcular")

$botonCalcular.onclick = function(){

    const horasVideos = document.querySelectorAll(".horas")
    let horasTotal = 0
    for (let i = 0; i < horasVideos.length; i++) {
    horasTotal += Number(horasVideos[i].value)
}
    const minutosVideos = document.querySelectorAll(".minutos")
    let minutosTotal = 0
    for (let i = 0; i < minutosVideos.length; i++) {
    minutosTotal += Number(minutosVideos[i].value)
}
while (minutosTotal >= minutosEnUnaHora){
    horasTotal ++
    minutosTotal --
}
    const segundosVideos = document.querySelectorAll(".segundos")
    let segundosTotal = 0
    for (let i = 0; i < segundosVideos.length; i++) {
    segundosTotal += Number(segundosVideos[i].value)
}
while (segundosTotal >= segundosEnUnMinuto){
    minutosTotal ++
    segundosTotal --
}
    let total = document.querySelector("#total")
    total.textContent = `El total de los videos es de ${horasTotal} horas, ${minutosTotal} minutos, ${segundosTotal}, segundos`
    return false
}

