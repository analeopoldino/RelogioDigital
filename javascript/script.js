const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    if (hora < 10) {
        hora = '0' + hora;
    }
    horas.textContent = hora;

    if (minuto < 10) {
        minuto = '0' + minuto;
    }
    minutos.textContent = minuto;

    if (segundo < 10) {
        segundo = '0' + segundo;
    }
    segundos.textContent = segundo;
});