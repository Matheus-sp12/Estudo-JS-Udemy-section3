function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
    hour12: false
    });
}



const time = setInterval( function () {
    console.log(mostraHora());
}, 1000);

setTimeout( function () {//função pra 10 segundos
    clearInterval(time)
}, 10000);